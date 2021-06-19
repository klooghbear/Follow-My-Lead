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
      password: "",
      isLoading: false
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({ isLoading: true })

    const { username, password } = this.state
    const url = process.env.BASE_API_URL

    this.props.handleLoader(true)

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
          })
        }
      }).catch((error) => {
        this.props.handleLoader(false)
        this.setState({ isLoading: false })
        console.log(error)
      }).then(() => {
        this.props.handleLoader(false)
        this.props.history.push("/login")
      })
  }

  render() {
    return (
      <div>
        <h1 className="page-title">
          Owner registration form
        </h1>

        <div className="form-container">
          <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
            <img className="logoform" src="/images/Logo2.png" alt="logo"/>

            <label>
              Username:
            </label>

            <input
              className="input"
              type="text"
              name="username"
              onChange={(event) => this.handleChange(event)}
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
              onChange={(event) => this.handleChange(event)}
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
              onChange={(event) => this.handleChange(event)}
              autoComplete="off"
            />

            <label>
              First name:
            </label>

            <input
              className="input"
              type="text"
              name="first_name"
              onChange={(event) => this.handleChange(event)}
              autoComplete="off"
            />

            <label>
              Last name:
            </label>

            <input
              className="input"
              type="text"
              name="last_name"
              onChange={(event) => this.handleChange(event)}
              autoComplete="off"
            />

            <label>
              Location:
            </label>

            <select
              className="input"
              type="text"
              name="location"
              onChange={(event) => this.handleChange(event)}
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
              onChange={(event) => this.handleChange(event)}
              autoComplete="off"
            />

            <label>
              Photo:
            </label>

            <input
              className="input"
              type="text"
              name="photo"
              onChange={(event) => this.handleChange(event)}
              autoComplete="off"
            />

            <input
              className="button"
              type="submit"
              disabled={this.isLoading}
              value="Submit"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    )
  }
}
