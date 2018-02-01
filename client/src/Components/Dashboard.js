import React, { Component } from 'react'
import NewCompany from './NewCompany'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return(
      <div>
        {/* Sidebar of options: Company/Jobs/Notifications */}
        <Link to="/dashboard/company/new">Create a new company</Link>
      </div>
    )
  }
}

export default Dashboard
