import * as React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import "./assets/styles/index.scss"
import ReactGA from "react-ga"
import loadable from "@loadable/component"
import Fallback from "./components/Fallback"
import { getFontsFromServer } from "./engine/utility"

const Start = loadable(() => import("./Start"), { fallback: <Fallback /> })
const Creator = loadable(() => import("./Creator"), { fallback: <Fallback /> })
const Showcase = loadable(() => import("./Showcase"), { fallback: <Fallback /> })

/**
 * This is the main entry point of the application
 *
 * This component also initializes the Google Analytics library using the global object `window.logomaker.googleAnalyticsCode`
 */
export const Application: React.FunctionComponent<unknown> = () => {
    React.useEffect(() => {
        if (window.logomaker?.googleAnalyticsCode) {
            ReactGA.initialize(window.logomaker.googleAnalyticsCode)
            ReactGA.set({ anonymizeIp: true })
        }

        if (window.logomaker?.pluginURL) {
            getFontsFromServer()
        }
    }, [])

    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/creator" element={ <Creator />} />
                    <Route path="/showcase" element={ <Showcase /> } />
                    <Route path="/fallback" element={ <Fallback /> } />
                    <Route path="/" element={ <Start /> } />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default Application

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

// const googleFontsLink = document.createElement("link")
// googleFontsLink.rel = "stylesheet"
// googleFontsLink.type = "text/css"
// googleFontsLink.href = generateUrlForFonts(fonts)
// googleFontsLink.onerror = () => {
//     console.log("An error occurred loading the Google's fonts stylesheet!")
// }

// document.querySelector("head")?.appendChild(googleFontsLink)

// document.fonts.ready.then(() => {
//     // const fontSet = new Set<string>()

//     // // document.fonts.forEach(f => {
//     // //     fontSet.add(f.family)
//     // // });

//     // for (const f of document.fonts) {
//     //     fontSet.add(f.family)
//     // }

//     AssetsStore.update((s) => {
//         s.fonts.activeFonts = fontsList // Array.from(fontSet)
//     })
// })
