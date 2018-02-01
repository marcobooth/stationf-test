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

    console.log("starting state: ", this.state)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    console.log("name: ", name)
    console.log("value: ", value)

    this.setState({
      [name]: value
    });

    // setTimeout(function (){
    //   console.log("current state: ", this.state)
    // }.bind(this), 1000);

  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/company/new', {
      name: this.state.name,
      website: this.state.website,
      description: this.state.description
    })
    .then((response) => {
      // console.log(response)
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
        <h4>Create a new company</h4>
        { this.errorMessage() }
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>
              Name:
              <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Website:
              <input name="website" type="text" value={this.state.website} onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
            </label>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewCompany = withRouter(NewCompany)
