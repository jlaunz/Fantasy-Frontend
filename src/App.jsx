import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import util from './util'
import 'animate.css'
import './App.css'
import { HostPage } from './views/host/hostPage'
import { ReduxLandingPage } from './views/landing/landingPage'
import { GuestPage } from './views/guest/GuestPage'
import { Logout } from './components/Logout'

class App extends React.Component {
    componentDidMount() {
        util.setUserCookieFromURL()
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/host" component={HostPage}>
                            <HostPage></HostPage>
                        </Route>

                        <Route path="/guest" component={GuestPage}>
                            <GuestPage></GuestPage>
                        </Route>

                        <Route path="/logout" component={Logout}>
                            <Logout></Logout>
                        </Route>

                        <Route path="/">
                            <ReduxLandingPage></ReduxLandingPage>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
