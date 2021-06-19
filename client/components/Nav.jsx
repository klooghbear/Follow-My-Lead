import React, { Component } from "react"
import { Link } from "react-router-dom"
import { logOff, getDecodedToken, isAuthenticated } from "authenticare/client"
import { fetchUser } from "../api/walkerApi"

import { IfAuthenticated, IfNotAuthenticated } from "./Authenticated"
import Loader from "./Loader/Loader.jsx"

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profileUrl: ""
    }
  }

  componentDidMount() {
    if (isAuthenticated()) {
      const id = getDecodedToken().id

      fetchUser(id).then(user => {
        if (user.owner) {
          this.setState({ profileUrl: `/owner/${user.owner.id}` })
        } else {
          this.setState({ profileUrl: `/walker/${user.walker.id}` })
        }
      })
    }
  }

  render() {
    const { isLoading } = this.props
    return (
      <div className="nav">
        <Link to="/">
          <img className="logo" src="/images/Logo1.png" alt="logo"/>
        </Link>

        {
          isLoading
            ? <Loader type={"navigation"}/>
            : <ul>
              <li>
                <Link className="nav-link" to="/" >
                  Home
                </Link>
              </li>
    
              <IfNotAuthenticated>
                <li>
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                </li>
                
                <li>
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
    
                <li>
                  <Link className="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </IfNotAuthenticated>
    
              <IfAuthenticated>
                <li>
                  <Link className="nav-link" to="/" onClick={logOff}>
                    Logout
                  </Link>
                </li>
    
                <li>
                  <Link className="nav-link" to={this.state.profileUrl}>
                    My Profile
                  </Link>
                </li>
                
                <li>
                  <Link className="nav-link" to="/doglist">
                    Doglist
                  </Link>
                </li>
    
                <li>
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
    
                <li>
                  <Link className="nav-link" to="/Contact" >
                    Contact
                  </Link>
                </li>
              </IfAuthenticated>
            </ul>
        }
      </div>
    )
  }
}
