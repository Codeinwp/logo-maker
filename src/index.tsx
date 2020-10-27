import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./assets/styles/index.scss"
import "./assets/styles/tailwind.css"
import Creator from "./Creator"
import Showcase from "./Showcase"
import Start from "./Start"

const Application: React.FunctionComponent<unknown> = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/start">
                        <Start />
                    </Route>
                    <Route path="/showcase">
                        <Showcase />
                    </Route>
                    <Route path="/">
                        <Creator />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

render(<Application />, document.getElementById("root"))
