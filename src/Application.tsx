import * as React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import "./assets/styles/index.scss"
// import Creator from "./Creator"
// import Showcase from "./Showcase"
import Start from "./Start"
import ReactGA from "react-ga"
import { AssetsStore, FontRenderers } from "./stores/AssetsStore"
import { buildFontSourceFileURL } from "./engine/utility"
import { isFontFromGoogle } from "./assets/fonts/google-fonts"
import opentype from "opentype.js"
import loadable from '@loadable/component'
import Fallback from "./components/Fallback"

const Creator = loadable( () => import('./Creator'), { fallback: <Fallback /> } )
const Showcase = loadable( () => import('./Showcase'), { fallback: <Fallback /> } )

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

        document.fonts.ready.then(() => {
            const fontSet = new Set<string>()

            document.fonts.forEach((f) => {
                const cleanedFontFamily = f.family.replace(/"/g, '')
                // console.log(cleanedFontFamily)
                if (isFontFromGoogle(cleanedFontFamily)) {
                    fontSet.add(cleanedFontFamily)
                    const fileURL = buildFontSourceFileURL(cleanedFontFamily)
                    if (fileURL) {
                        fetch(fileURL, {
                            method: "HEAD",
                            mode: "cors",
                        }).then((resp) => {
                            if (resp.ok) {
                                return cleanedFontFamily
                            }
                            return null
                        })
                    }
                }
            })

            const fontPaths = Array.from(fontSet).map((font) => {
                return {
                    font: font,
                    path: buildFontSourceFileURL(font),
                }
            })

            // console.log(fontPaths)

            const fontRequets = fontPaths
                .filter((fontPath) => fontPath.path)
                .map(async (font) => {
                    // console.log(font.path)
                    const renderer = await opentype.load(font.path || "")
                    return {
                        font: font.font,
                        renderer: renderer,
                    }
                })

            Promise.all(fontRequets).then((fontRenderers) => {
                // console.log(fontRenderers)
                // transformTextToSVG(fontRenderers[0].renderer, 'Hey', 52)
                AssetsStore.update((s) => {
                    s.fonts.fontRenderers = fontRenderers.reduce(
                        (fontRenderers: FontRenderers, font): FontRenderers => {
                            fontRenderers[font.font] = font.renderer
                            return fontRenderers
                        },
                        {}
                    )
                    s.fonts.activeFonts = fontRenderers.map(({ font }) => font)
                })
            })
        })
    }, [])

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/creator">
                        <Creator />
                    </Route>
                    <Route path="/showcase">
                        <Showcase />
                    </Route>
                    <Route path="/fallback">
                        <Fallback />
                    </Route>
                    <Route path="/">
                        <Start />
                    </Route>
                </Switch>
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
