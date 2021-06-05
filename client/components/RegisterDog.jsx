import React, { Component } from "react"

import { getDecodedToken } from "authenticare/client"

import { addDog, getDogs } from "../api/dogApi"
import { getUserDetails } from "../api/walkerApi"

export default class RegisterDog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      owner_id: 0,
      name: "",
      breed: "",
      sex: "",
      age: "",
      size: "",
      activity_requirements: "",
      good_with_other_dogs: "",
      special_requirements: "",
      photo: "",
      vet_name: "",
      vet_contact: ""
    }
  }

  componentDidMount() {
    getDogs()
      .then(dogs => {
        console.log("dog.length: ", dogs.length + 1)
        this.setState({ id: dogs.length + 1 })
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    addDog({
      name: this.state.name,
      breed: this.state.breed,
      sex: this.state.sex,
      age: this.state.age,
      size: this.state.size,
      activity_requirements: this.state.activity_requirements,
      good_with_other_dogs: this.state.good_with_other_dogs,
      special_requirements: this.state.special_requirements,
      photo: this.state.photo,
      vet_name: this.state.vet_name,
      vet_contact: this.state.vet_contact
    }).then(() => {
      this.props.history.push(`/dog/${this.state.id}`)
    })
  }

  render() {
    return (
      <div>
        <h1 className="page-title">
          Dog Registration Form
        </h1>

        <div className="form-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <img className="logoform" src="/images/Logo2.png" alt="logo" />
            <label>
              Name:
            </label>

            <input className="input"
              type="text"
              name="name"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Photo:
            </label>

            <input className="input"
              type="text"
              name="photo"
              onChange={this.handleChange}
              autoComplete="off"
              placeholder="Upload File"
            />

            <label>
              Breed:
            </label>

            <input className="input"
              type="text"
              name="breed"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Sex:
            </label>
            
            <select
              className="input"
              type="text"
              name="sex"
              onChange={this.handleChange}
            >
              <option value="select">
                select
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>
            </select>

            <label>
              Age:
            </label>

            <select
              className="input"
              type="text"
              name="age"
              onChange={this.handleChange}
            >
              <option value="select">
                select
              </option>

              <option value="Puppy">
                Puppy
              </option>

              <option value="Adolescent">
                Adolescent
              </option>

              <option value="Adult">
                Adult
              </option>

              <option value="Senior">
                Senior
              </option>
            </select>

            <label>
              Size:
            </label>

            <select
              className="input"
              type="text"
              name="size"
              onChange={this.handleChange}
            >
              <option value="select">
                select
              </option>

              <option value="Small">
                Small 9kg or less
              </option>

              <option value="Medium">
                Medium 10-22kg
              </option>

              <option value="Large">
                Large 22kg or more
              </option>
            </select>
            <br />

            <label>
              Activity Requirements:
            </label>

            <select
              className="input"
              type="text"
              name="activity_requirements"
              onChange={this.handleChange}
            >
              <option value="select">
                select
              </option>

              <option value="30-45mins">
                30-45 minutes
              </option>

              <option value="45-60mins">
                45-60 minutes
              </option>

              <option value="60-90mins">
                60-90 minutes
              </option>
            </select>

            <label>
              Good With Other Dogs:
            </label>

            <select
              className="input"
              type="text"
              name="good_with_other_dogs"
              onChange={this.handleChange}
            >
              <option value="select">
                select
              </option>

              <option value="Yes">
                Yes
              </option>

              <option value="No">
                No
              </option>
            </select>

            <label>
              Special Requirements:
            </label>

            <textarea
              className="input"
              type="text"
              name="special_requirements"
              onChange={this.handleChange}
            />

            <label>
              Vet Practice:
            </label>

            <input className="input"
              type="text"
              name="vet_name"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <label>
              Vet Contact:
            </label>

            <input
              className="input"
              type="text"
              name="vet_contact"
              onChange={this.handleChange}
              autoComplete="off"
            />

            <input className="button" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
