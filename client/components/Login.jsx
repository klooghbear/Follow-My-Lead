import React from "react"
import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client'
import { getUserDetails } from "../api/walkerApi"

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            walker: []
        }
    }

    handlChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        signIn({
            username: this.state.username,
            password: this.state.password
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
            .then((token) => {
                if (isAuthenticated()) {
                    getUserDetails(getDecodedToken().id).then(user => {
                        if (user.walker) this.props.history.push('/walker/' + user.walker.id)
                        if (user.owner) this.props.history.push('/owner/' + user.owner.id)
                    })
                }
            })
            // .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Login</h1>
                <div className="form-container">
                <form className='form' onSubmit={this.handleSubmit}>
                    
                <img className="logoform" src="/images/Logo2.png" alt="logo" />
                  <br />
                  <br/>
                    <label> Username:</label>
                    <br />
                 
                    <input className='input' type='text' placeholder='username' name='username' onChange={this.handlChange} autocomplete="off"/>
                    <br/>
                    <br />
                    <label> Password: </label>
                    <br />
                   
                    <input className='input' type='password' placeholder='password' name='password' onChange={this.handlChange} autocomplete="off"/>
                    <br/>
                    <br />
                  
                    <input className='button' type="submit" value="Submit" autocomplete="off" />
                </form>
                <br />
                </div>
            </div>
        )
    }



}
export default Login