// Use environment variable for the base URL
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;

// Function for starting GitHub authentication
export const startGithubAuthentication = async () => {
    window.location.href = `${BACKEND_URL}/auth/github`;
};

// Function for fetching contributions
export const getContributions = async ({ username }) => {
    const response = await fetch(`${BACKEND_URL}/api/hacktoberfest-contributions?username=${username}`);
    const data = await response.json();
    return data;
};

// Function for fetching the profile URL
export const getProfileUrl = async ({ username }) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching profile URL:", error);
        return null;
    }
};
