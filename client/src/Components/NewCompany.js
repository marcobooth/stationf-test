import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

class NewCompany extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      website: '',
      description: '',
      error: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/company/new', {
      name: this.state.name,
      website: this.state.website,
      description: this.state.description
    })
    .then((response) => {
      this.props.history.push('/dashboard')
    })
    .catch((error) => {
      this.setState({
        error: error.response.data
      })
    })
  }

  errorMessage() {
    if (this.state.error === '')
      return

    return (
      <div className="ui error message">
        <div className="header">Error for You</div>
        <p>{this.state.error}</p>
      </div>
    )
  }

  render() {
    return(
      <div>
        <h2 className="ui header">Create a new company</h2>
        { this.errorMessage() }
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Name:</label>
            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
          </div>
          <div className="field">
            <label>Website:</label>
            <input name="website" type="text" value={this.state.website} onChange={this.handleInputChange} />
          </div>
          <div className="field">
            <label>Description:</label>
            <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewCompany = withRouter(NewCompany)
