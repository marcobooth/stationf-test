import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Companies from './Companies'
import PostedJobs from './PostedJobs'


class Dashboard extends Component {
  render() {
    return(
      <div>
        {/* Sidebar of options: Company/Jobs/Notifications */}
        <Link to="/dashboard/company/new">Create a new company</Link>
        <Companies/>
        <Link to="/dashboard/job/new">Create a new job</Link>
        <PostedJobs />
      </div>
    )
  }
}

export default Dashboard
