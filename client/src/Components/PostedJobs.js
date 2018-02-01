import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

class PostedJobs extends React.Component {
  componentDidMount() {
    this.props.fetchPostedJobs()
  }

  renderPostedJobs() {
    //ASKTEO: better null check
    if (this.props.postedJobs === null)
      return
    console.log("postedJobs: ", this.props.postedJobs)
    return this.props.postedJobs.map((job) => {
      return (
        <li key={job._id}>
          { job.title }
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>{ this.renderPostedJobs() }</ul>
      </div>
    )
  }
}

function mapStateToProps({ postedJobs }) {
  return ({ postedJobs })
}

export default connect(mapStateToProps, actions)(PostedJobs)
