import React from "react"
import { render } from "react-dom"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import WebFont from "webfontloader"
import fonts from "./assets/fonts/fonts"
// import "./assets/styles/index.scss"
import "./assets/styles/tailwind.css"
// import "./index.css"
import Creator from "./Creator"
import Showcase from "./Showcase"
import Start from "./Start"
import { AssetsStore } from "./stores/AssetsStore"

const Application: React.FunctionComponent<unknown> = () => {
    React.useEffect(() => {
        WebFont.load({
            google: {
                families: fonts,
            },
            loading: () => {
                AssetsStore.update((s) => {
                    s.fonts.fontsStatus = "loading"
                })
            },
            active: () => {
                AssetsStore.update((s) => {
                    s.fonts.fontsStatus = "active"
                })
            },
            inactive: () => {
                AssetsStore.update((s) => {
                    s.fonts.fontsStatus = "inactive"
                })
            },
            fontactive: (font) => {
                AssetsStore.update((s) => {
                    s.fonts.activeFonts.push(font)
                })
            },
        })
    }, [])

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
