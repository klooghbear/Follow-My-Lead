import React, { Component } from "react"
import { getOwner } from "../api/ownerApi"
import { Link } from "react-router-dom"

export default class OwnerProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      owner: {}
    }
  }

  componentDidMount() {
    getOwner(this.props.match.params.id)
      .then(ownerInfo => {
        this.setState({
          owner: ownerInfo
        })
      })
  }

  render() {
    return (
      <>
        <h1 className="page-title">
          {this.state.owner.first_name}'s Profile
        </h1>
        
        <div className="profile-container">
          <img className="profile-picture" src = {this.state.owner.photo}/>

          <p>
            <strong>
              Location:
            </strong>
            
            {this.state.owner.location}
          </p>

          <div className="profile-info">
            {
              this.state.owner &&

              <>
                <p>
                  <strong>
                    Name:
                  </strong>
                  
                  {this.state.owner.first_name}
                  
                  {this.state.owner.last_name}
                </p>
              
                <p>
                  <strong>
                    Email:
                  </strong>
                  
                  {this.state.owner.email}
                </p>
              </>
            }
          </div>
      
          <Link to={`/owner/${this.state.owner.id}/edit`} className="button">
            Edit Profile
          </Link>

          <Link to="/register/dog"className="button">
            Register your dog
          </Link>
        </div>
      </>
    )
  }
}
