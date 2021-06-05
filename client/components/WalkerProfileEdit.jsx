import React, { Component } from "react"
import { editWalker } from "../api/walkerApi"
import { IfAuthenticated } from "./Authenticated"

export default class WalkerProfileEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      blurb: "",
      location: "",
      photo: ""
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      blurb: this.state.blurb,
      location: this.state.location,
      photo: this.state.photo
    })
    const walker = this.state
    const id = this.props.match.params.id
    editWalker(id, walker)
    this.props.history.push("/walker/" + id)
  }

  render() {
    return (
      <div>
        <IfAuthenticated>
          <h1 className="page-title">
            Edit Walker Details
          </h1>

          <div className="form-container">
            <form className="form" onSubmit={this.handleSubmit}>
              <img className="logoform" src="/images/Logo2.png" alt="logo"/>

              <label>
                First name:

                <input
                  className="input"
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </label>

              <label>
                Last name:

                <input
                  className="input"
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </label>

              <label>
                email:

                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </label>

              <label>
                Blurb:

                <input
                  className="input"
                  type="text"
                  name="blurb"
                  placeholder="Blurb"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </label>

              <label>
                Location:

                <input
                  className="input"
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </label>

              <label>
                Photo:

                <input
                  className="input"
                  type="text"
                  name="photo"
                  placeholder="Image URL"
                  onChange={this.handleChange}
                  autoComplete="off"
                />
              </label>

              <input
                className="button"
                type="submit"
                value="Submit"
                autoComplete="off"
              />
            </form>
          </div>
        </IfAuthenticated>
      </div>
    )
  }
}
