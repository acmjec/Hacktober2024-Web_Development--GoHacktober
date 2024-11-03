import React from 'react'
import pr from '../assets/pr.png'
import issue from '../assets/issue.png'
import dev from '../assets/dev.png'


export default function Stats({stats}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 justify-between">
      {[
        { title: "Pull Requests", icon: pr, value: stats.totalPulls },
        { title: "Issues Raised", icon: issue, value: stats.totalIssues },
        { title: "Repos Contributed", icon: dev, value: stats.totalRepos },
      ].map((ele, index) => (
        <StatCard key={index} title={ele.title} icon={ele.icon} value={ele.value} />
      ))}
    </div>
  )
}

export function StatCard({title, value, icon}) {
  return (
  <div className="flex flex-col gap-4 bg-white bg-opacity-10  rounded-lg p-5 shadow-md ">
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm sm:text-base font-semibold">
        {title}
      </div>
      <img src={icon} alt='image' />
    </div>
    <div className="text-2xl sm:text-3xl text-left font-bold">
      {value}
    </div>
  </div>
  )
}
