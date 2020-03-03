import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'


// import Footer from './Footer'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import DogList from './DogList'
import DogProfile from './DogProfile'
import RegisterOwner from './RegisterOwner'
import RegisterWalker from './RegisterWalker'
import RegisterDog from './RegisterDog'
import DogProfileEdit from './DogProfileEdit'

import OwnerProfile from './OwnerProfile'
import WalkerProfile from './WalkerProfile'
import EditOwnerProfile from './EditOwnerProfile'
import WalkerProfileEdit from './WalkerProfileEdit'
import About from './About'
import Contact from './Contact'
import WorkInProgress from './WorkInProgress'



const App = () => {
  return (

    <Router>
      <React.Fragment>
        <Route path="/" component={Nav} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register/owner" component={RegisterOwner} />
        <Route exact path="/owner/:id" component={OwnerProfile} />
        <Route path="/owner/:id/edit" component={EditOwnerProfile} />
        <Route path="/register/walker" component={RegisterWalker} />
        <Route path="/register/dog" component={RegisterDog} />
        <Route path="/doglist" component={DogList} />
        <Route exact path="/walker/:id" component={WalkerProfile} />
        <Route path="/dog/:id" component={DogProfile} />
        <Route  path="/walker/:id/edit" component={WalkerProfileEdit} />
        <Route path='/dogEdit/' component={DogProfileEdit} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/social" component={WorkInProgress}/>
        {/* <Route path="/" component={Footer} /> */}
      </React.Fragment>
    </Router>
  )
}

export default App


//commented out DogProfile, as component got deleted in merge