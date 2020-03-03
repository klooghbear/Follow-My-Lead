import React from "react"
import { editWalker } from '../api/walkerApi'
import {IfAuthenticated} from './Authenticated'

//Josh Sat 29/2

class WalkerProfileEdit extends React.Component {
    constructor(){
        super()

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            blurb: '',
            location: '',
            photo:''
        }
    }

handleChange = e => {
    
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        blurb: this.state.blurb,
        location: this.state.location,
        photo: this.state.photo
    })
    let walker = this.state
    let id = this.props.match.params.id
    editWalker(id, walker)
    this.props.history.push('/walker/' + id)
 
}


    render() {

        return (
            <div>
                <ifAuthenticated>
                    <h1 className="page-title" >Edit Walker Details</h1>
                    <div className="form-container">
                    <form className='form' onSubmit = {this.handleSubmit}>
                    <img className="logoform" src="/images/Logo2.png" alt="logo" />
                        <br />
                        <label> First name:
                            <br/>
            <input className='input' type='text' name='first_name' placeholder='First name' onChange={this.handleChange} autocomplete="off"/>
                        </label>
                        <br />
                        <label> Last name:
                        <br/>
            <input className='input' type='text' name='last_name' placeholder='Last name' onChange={this.handleChange} autocomplete="off"/>
                        </label>
                        <br />
                        <label> email:
                        <br/>
            <input className='input' type='text' name='email' placeholder='email' onChange={this.handleChange} autocomplete="off"/>
                        </label>
                        <br />
                        <label> Blurb:
                        <br/>
            <input className='input' type='text' name='blurb' placeholder='Blurb' onChange={this.handleChange} autocomplete="off"/>
                        </label>
                        <br />
                        <label> Location:
                        <br/>
            <input className='input' type='text' name='location' placeholder='Location' onChange={this.handleChange} autocomplete="off"/>
                        </label>
                        <br />
                        <label> Photo:
                        <br/>
            <input className='input' type='text' name='photo' placeholder='Image URL' onChange={this.handleChange} autocomplete="off"/>
                        </label>
                        <br />
                        <br />
                        <input className='button' type="submit" value="Submit" autocomplete="off" />
                    </form>
                    </div>
                </ifAuthenticated>
            </div>
        )
    }



}
export default WalkerProfileEdit