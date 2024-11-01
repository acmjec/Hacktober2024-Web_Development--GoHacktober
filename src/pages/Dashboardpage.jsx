import React, { useState, useEffect } from "react";
import { Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

import Hero from '../components/Hero';
import { Contributions } from "../components/Contributions";

import { getContributions, getProfileUrl } from "../api/github";
import SpinnerLoader from "../components/Loader";
import Stats from "../components/StatCard";
import { getTotalContributions } from "../utils/calculateContribution";
import ContributionChart from "../components/Chart";

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  const [error, setError] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profileUrl, setProfileUrl] = useState(null);
  const [totalStats, setTotalStats] = useState({ totalRepos: 0, totalPulls: 0, totalIssues: 0 });

  const query = new URLSearchParams(window.location.search);
  const accessToken = query.get('accessToken');
  const login = query.get('login') || localStorage.getItem('login');

  const getDashboardStats = async () => {
    try {
      const data = await getContributions({ username: login });
      const profileUrl = await getProfileUrl({ username: login });
      setStats(data);
      setData(data);
      setTotalStats(getTotalContributions(data));
      setProfileUrl(profileUrl.avatar_url);
      setLoading(false);
    } catch (err) {
      setError("Failed to load stats.");
    }
  };

  useEffect(() => {
    if (query.get('login')) {
      localStorage.setItem('login', query.get('login'));
    } else if (!login) {
      setShowDialog(true);
    }

    getDashboardStats().catch(err => {
      console.log(err.message);
      setError("Failed to load contributions.");
    });
  }, []);

  const handleDialogClose = () => {
    setShowDialog(false);
    window.location.href = '/'; // Redirect to the login page
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="text-black min-h-screen">
      <Dialog open={showDialog} onClose={handleDialogClose}>
        <DialogTitle>Login Required</DialogTitle>
        <DialogContent>
          <p>Please log in again to access the dashboard.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Login</Button>
        </DialogActions>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        {loading ? <SpinnerLoader /> : (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <h1 className="text-2xl sm:text-3xl mb-4 sm:mb-0">
                Hacktoberfest Dashboard
              </h1>
              <Avatar src={profileUrl} />
            </div>
            <Hero username={login} pr={totalStats.totalPulls} />
            <Stats stats={totalStats} />
            <div className="flex flex-col lg:flex-row gap-8">
              <ContributionChart contributions={data} />
              <div className="w-full lg:w-1/2 bg-white bg-opacity-10 shadow-md rounded-lg p-4">
                <h2 className="text-lg mb-4">Repository Contributions</h2>
                <Contributions data={data} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
