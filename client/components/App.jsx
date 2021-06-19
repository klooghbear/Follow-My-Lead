import React, { useState } from "react"
import { HashRouter as Router, Route } from "react-router-dom"

import Nav from "./Nav"
import Home from "./Home"
import Login from "./Login"
import DogList from "./DogList"
import DogProfile from "./DogProfile"
import RegisterOwner from "./RegisterOwner"
import RegisterWalker from "./RegisterWalker"
import RegisterDog from "./RegisterDog"
import DogProfileEdit from "./DogProfileEdit"
import OwnerProfile from "./OwnerProfile"
import WalkerProfile from "./WalkerProfile"
import EditOwnerProfile from "./EditOwnerProfile"
import WalkerProfileEdit from "./WalkerProfileEdit"
import About from "./About"
import Contact from "./Contact"
import Loader from "./Loader/Loader.jsx"

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const handleLoader = (isLoading) => {
    setLoading(isLoading)
  }

  return (
    <Router>
      <React.Fragment>
        <Route path="/" render={() => {
          return <Nav isLoading={isLoading}/>
        }}/>
        <Route exact path="/" render={() => {
          return isLoading
            ? <Loader type={"main"}/>
            : <Home />
        }}/>
        <Route path="/login" render={() => {
          return isLoading
            ? <Loader type={"main"}/>
            : <Login handleLoader={handleLoader}/>
        }}/>
        <Route path="/register/owner" render={() => {
          return isLoading
            ? <Loader type={"main"}/>
            : <RegisterOwner handleLoader={handleLoader}/>
        }}/>
        <Route exact path="/owner/:id" render={({ match }) => {
          return isLoading
            ? <Loader type={"main"}/>
            : <OwnerProfile handleLoader={handleLoader} match={match}/>
        }}/>
        <Route path="/owner/:id/edit" component={EditOwnerProfile} />
        <Route path="/register/walker" component={RegisterWalker} />
        <Route path="/register/dog" component={RegisterDog} />
        <Route path="/doglist" component={DogList} />
        <Route exact path="/walker/:id" component={WalkerProfile} />
        <Route path="/dog/:id" component={DogProfile} />
        <Route path="/walker/:id/edit" component={WalkerProfileEdit} />
        <Route path='/dogEdit/' component={DogProfileEdit} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </React.Fragment>
    </Router>
  )
}
