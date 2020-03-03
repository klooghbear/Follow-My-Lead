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
  console.log('handle change working')
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  console.log('handle submit working')
  e.preventDefault()
  this.setState({
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    photo: this.state.photo,
    location: this.state.location,
    email: this.state.email,
  })
    let owner = this.state
    let id = this.props.match.params.id
    editOwner(id, owner)
    this.props.history.push('/owner/' + id)
}

render() {
  return(
    <div>
      <h1 className="page-title">Edit My Details</h1>
      <div className="form-container">
      <form className='form' onSubmit = {this.handleSubmit}>
      <img className="logoform" src="/images/Logo2.png" alt="logo" />
      <br/>
      <label> First name:
      <br />
      <input className='input' type = 'text' name='first_name' placeholder = 'First name' onChange = {this.handleChange} autocomplete="off" />
      </label>
      <br />
      <label> Last name:
      <br />
      <input className='input' type = 'text' name='last_name' placeholder = 'Last name' onChange = {this.handleChange} autocomplete="off"/>
      </label>
      <br/>
      <label> Photo:
      <br />
      <input className='input' type = 'text' name='photo' placeholder = 'Photo URL' onChange = {this.handleChange} autocomplete="off"/>
      </label>
      <br/>
      <label> Location:
      <br />
      <input className='input' type = 'text' name='location' placeholder = 'Location' onChange = {this.handleChange} autocomplete="off" />
      </label>
      <br/>
      <label> Email:
      <br />
      <input className='input' type = 'text' name='email' placeholder = 'Email' onChange = {this.handleChange} autocomplete="off"/>
      </label>
      <br/>
      <br />
      <input className='button' type="submit" value="Submit" autocomplete="off" />
      </form>
      </div>
    </div>
  )
}

}

export default EditOwnerProfile