import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
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
        // WebFont.load({
        //     google: {
        //         families: fonts,
        //     },
        //     loading: () => {
        //         AssetsStore.update((s) => {
        //             s.fonts.fontsStatus = "loading"
        //         })
        //     },
        //     active: () => {
        //         AssetsStore.update((s) => {
        //             s.fonts.fontsStatus = "active"
        //         })
        //     },
        //     inactive: () => {
        //         AssetsStore.update((s) => {
        //             s.fonts.fontsStatus = "inactive"
        //         })
        //     },
        //     fontactive: (font) => {
        //         AssetsStore.update((s) => {
        //             s.fonts.activeFonts.push(font)
        //         })
        //     },
        // })

        const googleFontsLink = document.createElement("link")
        googleFontsLink.rel = "stylesheet"
        googleFontsLink.type = "text/css"
        googleFontsLink.href = generateUrlForFonts(fonts)
        googleFontsLink.onerror = () => {
            console.log("An error occurred loading the Google's fonts stylesheet!")
        }

        document.querySelector("head")?.appendChild(googleFontsLink)

        document.fonts.ready.then(() => {
            const fontSet = new Set<string>()

            // document.fonts.forEach(f => {
            //     fontSet.add(f.family)
            // });

            for (const f of document.fonts) {
                fontSet.add(f.family)
            }

            AssetsStore.update((s) => {
                s.fonts.activeFonts = Array.from(fontSet)
            })
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

export default Application
