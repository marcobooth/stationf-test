import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

class NewJob extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      link: '',
      description: '',
      jobType: '',
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
    axios.post('/api/job/new', {
      title: this.state.title,
      link: this.state.link,
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
        <h4>Create a new job</h4>
        { this.errorMessage() }
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>
              Title:
              <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Link:
              <input name="link" type="text" value={this.state.link} onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              Description:
              <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange} />
            </label>
            <label>Job Type</label>
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewJob = withRouter(NewJob)
