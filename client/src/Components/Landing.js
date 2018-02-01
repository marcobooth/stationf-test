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
        <div key={job._id} className="four wide column">
          <div className="ui card">
            <div className="content">
              <div className="header">{job.title}</div>
              <div className="meta">2 days ago</div>
              <div className="description">
                <p>{job.description}</p>
              </div>
            </div>
            <a href={job.link} target="_blank" rel='noopener noreferrer' className="ui bottom attached button">
              <span>Apply for this job</span>
              {/* <i className="external icon"></i> */}
            </a>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui container grid">
        { this.renderJobs() }
      </div>
    )
  }
}

function mapStateToProps({ jobs }) {
  return({ jobs })
}

export default connect(mapStateToProps, { fetchJobs })(Landing)
