import React, { Component } from "react"
import { signIn, isAuthenticated, getDecodedToken } from "authenticare/client"
import { fetchUser } from "../api/walkerApi"

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
    const originUrl = `${window.location.origin}/#`
    
    this.props.handleLoader(true)
    
    signIn({ username: username, password: password }, { baseUrl: url })
      .then((token) => {
        if (isAuthenticated()) {
          const id = getDecodedToken().id

          fetchUser(id).then((user) => {
            if (user.walker) {
              location.replace(`${originUrl}/walker/${user.walker.id}`)
            }
            
            if (user.owner) {
              location.replace(`${originUrl}/owner/${user.owner.id}`)
            }
          })
        }
      }).catch((error) => {
        // notify error correctly
        console.log(error)
      }).finally(() => {
        this.props.handleLoader(false)
      })
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Login</h1>
        <div className="form-container">
          <form className="form" onSubmit={(e) => { this.handleSubmit(e) }}>
            <img className="logoform" src="/images/Logo2.png" alt="logo" />

            <label> Username:</label>
                 
            <input
              className="input"
              type="text"
              placeholder="username"
              name="username"
              autoComplete="off"
              onChange={(e) => { this.handlChange(e) }}
            />

            <label> Password: </label>
                   
            <input
              className="input"
              type="password"
              placeholder="password"
              name="password"
              autoComplete="off"
              onChange={(e) => { this.handlChange(e) }}
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
