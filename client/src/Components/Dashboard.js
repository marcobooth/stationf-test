import React, { Component } from 'react'
import Company from './Company'
import PostedJobs from './PostedJobs'


class Dashboard extends Component {
  render() {
    return(
      <div>
        {/* Sidebar of options: Company/Jobs/Notifications */}
        <Company/>
        <PostedJobs />
      </div>
    )
  }
}

export default Dashboard
