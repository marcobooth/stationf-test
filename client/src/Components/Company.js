import React from 'react'
import { fetchCompany } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Company extends React.Component {
  componentDidMount() {
    this.props.fetchCompany()
  }

  renderCompany() {
    if (this.props.company === null)
      return (
        <Link to="/dashboard/company/new">
          <button disabled={this.props.company} className="ui primary button">Create a new company</button>
        </Link>
      )

    return (
      <div className="ui segment">
        <div className="header">{ this.props.company.name }</div>
        <div className="meta">
          <span>{ this.props.company.website }</span>
        </div>
        <div className="description">
          <p>{this.props.company.description}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
          <i className="circular building icon"></i>
          Company
        </h2>
        { this.renderCompany() }
      </div>
    )
  }
}

function mapStateToProps({ company }) {
  console.log("company object: ", company)
  return ({ company })
}

export default connect(mapStateToProps, { fetchCompany })(Company)
