import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class PostedJobs extends React.Component {
  componentDidMount() {
    this.props.fetchPostedJobs()
  }

  renderJobsTableRows() {
    if (this.props.postedJobs === null || this.props.postedJobs.length === 0)
      return

    return this.props.postedJobs.map((job) => {
      return (
        <tr key={job._id}>
          <td>{job.title}</td>
          <td>{job.description}</td>
          <td>{job.link}</td>
        </tr>
      )
    })
  }

  renderJobsTable() {
    // ASKTEO: this best way to check object empty
    if (this.props.company === null
        || (Object.keys(this.props.company).length === 0
            && this.props.company.constructor === Object))
        return <div>You must create a company to post jobs</div>

    return(
      <div>
        <table className="ui table">
          <thead>
            <tr><th>Title</th>
            <th>Description</th>
            <th>Link</th>
          </tr></thead>
          <tbody>
            { this.renderJobsTableRows() }
          </tbody>
        </table>
        <Link to="/dashboard/job/new">
          <button className="ui primary button">Create a new job</button>
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"></i>
          Posted Jobs
        </h2>
        { this.renderJobsTable() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    company: state.company,
    postedJobs: state.postedJobs
  })
}

export default connect(mapStateToProps, actions)(PostedJobs)
