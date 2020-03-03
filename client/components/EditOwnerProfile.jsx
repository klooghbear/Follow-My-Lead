import React from 'react'
import { getOwner, editOwner } from '../api/ownerApi'



class EditOwnerProfile extends React.Component {
  constructor() {
    super()

    this.state = {
          first_name: '', 
          last_name: '', 
          photo: '', 
          location: '', 
          email: ''

    }
  }

handleChange = (e) =>{
  console.log('handlechange working')
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  console.log('submit working')
  e.preventDefault()
  this.setState({
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    email: this.state.email,
    photo: this.state.photo,
    location: this.state.location,
  })
let owner = this.state
let id = this.props.match.params.id
editOwner(id, owner)
this.props.history.push('/owner/' + id)
}

render() {
  return(
    <div>
  
      <h1>Edit Owner Details</h1>
      <form onSubmit = {this.handleSubmit}>
      <br/>
      <label> First name:
      <input type = 'text' name='first_name' placeholder = 'First name' onChange = {this.handleChange} />
      </label>
      <br />
      <label> Last name:
      <input type = 'text' name='last_name' placeholder = 'Last name' onChange = {this.handleChange} />
      </label>
      <br/>
      <label> Photo:
      <input type = 'text' name='photo' placeholder = 'Photo URL' onChange = {this.handleChange} />
      </label>
      <br/>
      <label> Location:
      <input type = 'text' name='location' placeholder = 'Location' onChange = {this.handleChange} />
      </label>
      <br/>
      <label> Email:
      <input type = 'text' name='email' placeholder = 'Email' onChange = {this.handleChange} />
      </label>
      <br/>
      <br />
      <input type="submit" value="Submit"  />
      </form>

    </div>
  )
}

}

export default EditOwnerProfile