import React from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'

class Companies extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies()
  }

  renderCompanies() {
    //ASKTEO: better null check
    if (this.props.company === null)
      return

    return this.props.company.map((company) => {
      return (
        <li key={company._id}>
          { company.name }
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderCompanies() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ company }) {
  return ({ company })
}

export default connect(mapStateToProps, actions)(Companies)
