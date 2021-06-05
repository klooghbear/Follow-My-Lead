import React, { Component } from "react"
import { register, isAuthenticated } from "authenticare/client"
import { addOwner } from "../api/ownerApi"

export default class RegisterOwner extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      location: "",
      email: "",
      photo: "",
      username: "",
      password: ""
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { username, password } = this.state
    const url = process.env.BASE_API_URL

    register({ username: username, password: password }, { baseUrl: url })
      .then((token) => {
        if (isAuthenticated()) {
          addOwner({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            blurb: this.state.blurb,
            location: this.state.location,
            email: this.state.email,
            photo: this.state.photo
          }).then(() => {
            this.props.history.push("/login")
          })
        }
      })
  }

  render() {
    return (
      <div>
        <h1 className="page-title">
          Owner registration form
        </h1>

        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <img className="logoform" src="/images/Logo2.png" alt="logo"/>

            <label>
              Username:
            </label>

            <input
              className="input"
              type="text"
              name="username"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Password:
            </label>

            <input
              className="input"
              type="password"
              id="pwd"
              name="password"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Confirm Password:
            </label>

            <input
              className="input"
              type="password"
              id="pwd"
              name="password"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              First name:
            </label>

            <input
              className="input"
              type="text"
              name="first_name"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Last name:
            </label>

            <input
              className="input"
              type="text"
              name="last_name"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Location:
            </label>

            <select
              className="input"
              type="text"
              name="location"
              onChange={this.handleChange}
              autoComplete="off"
            >
              <option value="select">
                select
              </option>

              <option value="Aro Valley">
                Aro Valley
              </option>
              <option value="Berhampore">
                Berhampore
              </option>
              <option value="Breaker Bay">
                Breaker Bay
              </option>
              <option value="Broadmeadows">
                Broadmeadows
              </option>
              <option value="Brooklyn">
                Brooklyn
              </option>
              <option value="Churton Park">
                Churton Park
              </option>
              <option value="Crofton Downs">
                Crofton Downs
              </option>
              <option value="Glenside">
                Glenside
              </option>
            </select>

            <label>
              Email:
            </label>

            <input
              className="input"
              type="text"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Photo:
            </label>

            <input
              className="input"
              type="text"
              name="photo"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <input
              className="button"
              type="submit"
              value="Submit"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    )
  }
}
