import React from "react"
import { Link } from 'react-router-dom'
import Footer from './Footer'



class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>

                    <div className="hero-image">
                        <div className="hero-text"></div>
                        <img className="home-image" src="/images/dog-on-lead.jpeg"
                            alt="hero-dog-image" />
                        <div className="home-page-headline">Follow My Lead!</div>
                        <div className="home-page-ptag">Partnering People and Pooches!</div>

                        <div className="register-buttons">
                            <Link className="button" to='/Register/Owner' >Register to have your dog walked</Link>
                            <Link className="button" to='/Register/Walker' >Register to walk a dog</Link>
                        </div>

                    </div>


                    <div className="blurb-container">
                        <div className="blurb-headline">Who are we? </div>
                        <br />
                        <div className="blurb-text">We are a group of web development students who all happen to love dogs!
                        We are working together to improve our development skills by creating a platform for dog lovers that can't own dogs and dog owners that don't always have the time to walk them.
                        </div>
                    </div>


                </main>
                <Footer />
            </>
        )
    }



}




export default Home