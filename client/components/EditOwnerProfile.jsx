import React, { Component } from "react"
import { editOwner } from "../api/ownerApi"

export default class EditOwnerProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      photo: "",
      location: "",
      email: ""
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
      photo: this.state.photo,
      location: this.state.location,
      email: this.state.email
    })

    const owner = this.state
    const id = this.props.match.params.id

    editOwner(id, owner).then(() => {
      this.props.history.push(`/owner/${id}`)
    })
  }

  render() {
    return (
      <>
        <h1 className="page-title">
          Edit My Details
        </h1>

        <div className="form-container">
          <form className='form' onSubmit = {this.handleSubmit}>
            <img className="logoform" src="/images/Logo2.png" alt="logo" />

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
              Photo:

              <input
                className="input"
                type="text"
                name="photo"
                placeholder="Photo URL"
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
              Email:

              <input
                className="input"
                type="text"
                name="email"
                placeholder="Email"
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
      </>
    )
  }
}
