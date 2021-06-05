import React, { Component } from "react"
import { signIn, isAuthenticated, getDecodedToken } from "authenticare/client"
import { getUserDetails } from "../api/walkerApi"

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      walker: []
    }
  }

  handlChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { username, password } = this.state
    const url = process.env.BASE_API_URL
    
    signIn({ username: username, password: password }, { baseUrl: url })
      .then((token) => {
        if (isAuthenticated()) {
          getUserDetails(getDecodedToken().id).then(user => {
            if (user.walker) {
              this.props.history.push("/walker/" + user.walker.id)
            }
            
            if (user.owner) {
              this.props.history.push("/owner/" + user.owner.id)
            }
          })
        }
      })
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Login</h1>
        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <img className="logoform" src="/images/Logo2.png" alt="logo" />

            <label> Username:</label>
                 
            <input
              className="input"
              type="text"
              placeholder="username"
              name="username"
              autoComplete="off"
              onChange={this.handlChange}
            />

            <label> Password: </label>
                   
            <input
              className="input"
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              onChange={this.handlChange}
            />
                  
            <input
              className="button"
              type="submit"
              value="Submit"
              autoComplete="off"
            />
          </form>
          <br />
        </div>
      </div>
    )
  }
}
