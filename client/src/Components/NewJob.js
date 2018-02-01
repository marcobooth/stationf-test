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

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

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
      this.props.history.push('/dashboard/jobs')
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
        <h2 className="ui header">Create a new job</h2>
        { this.errorMessage() }
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label> Title: </label>
              <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
          </div>
          <div className="field">
            <label>Link:</label>
            <input name="link" type="text" value={this.state.link} onChange={this.handleInputChange} />
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

export default NewJob = withRouter(NewJob)
