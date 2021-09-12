import React from 'react'
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Landing from '../Pages/LandingPage'
import Locator from '../Pages/Locator'

const ROUTES = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Landing/>
                </Route>
                <Route exact path='/locator'>
            <Locator/>
                </Route>
               
            </Switch>
        </Router>
    )
}

export default ROUTES
