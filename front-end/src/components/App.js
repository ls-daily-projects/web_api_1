import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Users from "./Users"
import UserPage from "./UserPage"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/users/:id" component={UserPage} />
            </Switch>
        </Router>
    )
}

export default App
