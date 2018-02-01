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
        <div className="ui card">
          <div className="content">
            <div className="header">{job.title}</div>
            <div className="meta">2 days ago</div>
            <div className="description">
              <p>{job.description}</p>
              <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
          </div>
          <div className="ui bottom attached button">
            <i className="add icon"></i>
            Apply for this job
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.jobs)
    return (
      <div>
        <div>this is the landing page</div>
        { this.renderJobs() }
      </div>
    )
  }
}

function mapStateToProps({ jobs }) {
  return({ jobs })
}

export default connect(mapStateToProps, { fetchJobs })(Landing)
