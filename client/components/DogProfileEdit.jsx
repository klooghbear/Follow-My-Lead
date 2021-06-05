import React, { Component } from "react"

import { editDog } from "../api/dogApi"

export default class DogProfileEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      owner_id: "",
      feedback_id: "",
      name: "",
      breed: "",
      sex: "",
      age: "",
      size: "",
      activity_requirements: "",
      good_with_other_dogs: "",
      special_requirements: "",
      photos: [],
      vet_name: "",
      vet_contact: ""
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
      owner_id: this.state.owner_id,
      feedback_id: this.state.feedback_id,
      name: this.state.name,
      breed: this.state.breed,
      sex: this.state.sex,
      age: this.state.age,
      size: this.state.size,
      activity_requirements: this.state.activity_requirements,
      good_with_other_dogs: this.state.good_with_other_dogs,
      special_requirements: this.state.special_requirements,
      photos: this.state.photos,
      vet_name: this.state.vet_name,
      vet_contact: this.state.vet_contact
    })

    const owner = this.state
    const id = this.props.match.params.id

    editDog(id, owner).then(() => {
      this.props.history.push(`/dog/${id}`)
    })
  }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className="page-title">
            Edit Dog Registration Form
          </h1>
          
          <label>
            Name:

            <input
              type="text"
              name="Name"
              onChange={this.handleChange}
              placeholder="Name"
              autoComplete="off"
            />
          </label>

          <label>
            Breed:

            <input
              type="text"
              name="Breed"
              onChange={this.handleChange}
              placeholder="Breed"
              autoComplete="off"
            />
          </label>

          <label>
            Sex:

            <input
              type="text"
              name="Sex"
              onChange={this.handleChange}
              placeholder="Sex"
              autoComplete="off"
            />
          </label>

          <label>
            Age:

            <input
              type="text"
              name="Age"
              onChange={this.handleChange}
              placeholder="Age"
              autoComplete="off"
            />
          </label>

          <label>
            Size:

            <input
              type="text"
              name="Size"
              onChange={this.handleChange}
              placeholder="Size"
              autoComplete="off"
            />
          </label>

          <label>
            Activity Requirements:

            <input
              type="text"
              name="Activity Requirements"
              onChange={this.handleChange}
              placeholder="Activity Requirements"
              autoComplete="off"
            />
          </label>

          <label>
            Good with other Dogs:

            <input
              type="text"
              name="Good with other Dogs"
              onChange={this.handleChange}
              placeholder="Good with other Dogs"
              autoComplete="off"
            />
          </label>

          <label>
            Special Requirements:

            <input
              type="text"
              name="Special Requirements"
              onChange={this.handleChange}
              placeholder="Special Requirements"
              autoComplete="off"
            />
          </label>

          <label>
            Photo:

            <input
              type="text"
              name="photo"
              onChange={this.handleChange}
              placeholder="Photo"
              autoComplete="off"
            />
          </label>
          
          <label>
            Vet Name:

            <input
              type="text"
              name="Vet Name"
              onChange={this.handleChange}
              placeholder="Vet Name"
            />
          </label>

          <label>
            Vet contact:

            <input
              type="text"
              name="Vet contact"
              onChange={this.handleChange}
              placeholder="Vet contact"
            />
          </label>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
