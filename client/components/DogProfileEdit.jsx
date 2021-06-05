import React, { Component } from "react"

import { getDog } from "../api/dogApi"

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
  };

  onDrop(photo) {
    this.setState({
      photos: this.state.pictures.concat(photo)
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log("add")
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className="page-title">Edit Dog Registration Form</h1>
          <br />
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="Name"
              onChange={this.handleChange}
              placeholder="Name"
              autoComplete="off"
            />
          </label>
          <br />
          <label>
            {" "}
            Breed:
            <input
              type="text"
              name="Breed"
              onChange={this.handleChange}
              placeholder="Breed"
              autoComplete="off"
            />
          </label>
          <br />
          <label>
            {" "}
            Sex:
            <input
              type="text"
              name="Sex"
              onChange={this.handleChange}
              placeholder="Sex"
              autoComplete="off"
            />
          </label>
          <br />
          <label>
            {" "}
            Age:
            <input
              type="text"
              name="Age"
              onChange={this.handleChange}
              placeholder="Age"
              autoComplete="off"
            />
          </label>
          <br />
          <label>
            {" "}
            Size:
            <input
              type="text"
              name="Size"
              onChange={this.handleChange}
              placeholder="Size"
              autoComplete="off"
            />
          </label>
          <br />
          <label>
            {" "}
            Activity Requirements:
            <input
              type="text"
              name="Activity Requirements"
              onChange={this.handleChange}
              placeholder="Activity Requirements"
              autoComplete="off"
            />
          </label>
          <br />
          <label>
            {" "}
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
            {" "}
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
            {" "}
            Photo:
            <input
              type="text"
              name="photo"
              onChange={this.handleChange}
              placeholder="Photo"
              autoComplete="off"
            />
          </label>
          {/* <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          /> */}
          
          <label>
            {" "}
            Vet Name:
            <input
              type="text"
              name="Vet Name"
              onChange={this.handleChange}
              placeholder="Vet Name"
            />
          </label>
          <label>
            {" "}
            Vet contact:
            <input
              type="text"
              name="Vet contact"
              onChange={this.handleChange}
              placeholder="Vet contact"
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
