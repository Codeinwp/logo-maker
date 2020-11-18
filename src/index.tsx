import React from "react"
import { render } from "react-dom"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import WebFont from "webfontloader"
import fonts from "./assets/fonts/fonts"
import "./assets/styles/index.scss"
// import "./index.css"
// import "./assets/scss/style.scss"
import Creator from "./Creator"
import { generateUrlForFonts } from "./engine/googleFonts"
import Showcase from "./Showcase"
import Start from "./Start"
import { AssetsStore } from "./stores/AssetsStore"

export const Application: React.FunctionComponent<unknown> = () => {
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

        const googleFontsLink = document.createElement("link")
        googleFontsLink.rel = "stylesheet"
        googleFontsLink.href = generateUrlForFonts(fonts)
        document.querySelector("head")?.appendChild(googleFontsLink)
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
