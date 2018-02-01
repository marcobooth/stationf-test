import React, { Component } from 'react'
import { fetchJobs } from '../actions'
import { connect } from 'react-redux'

class Landing extends Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  renderJobs() {
    if (this.props.jobs === null)
      return

    return this.props.jobs.map(function(job) {
      return (
        <div key={job._id} className="ui card">
          <div className="content">
            <div className="header">{job.title}</div>
            <div className="meta">2 days ago</div>
            <div className="description">
              <p>{job.description}</p>
            </div>
          </div>
          <a href={job.link} target="_blank" rel='noopener noreferrer' className="ui bottom attached button">
            Apply for this job
            {/* <i className="external icon"></i> */}
          </a>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui centered cards">
        { this.renderJobs() }
      </div>
    )
  }
}

function mapStateToProps({ jobs }) {
  return({ jobs })
}

export default connect(mapStateToProps, { fetchJobs })(Landing)
