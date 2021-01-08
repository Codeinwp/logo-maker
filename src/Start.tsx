/**
 * @packageDocumentation
 */

import * as React from "react"
import { Link } from "react-router-dom"
import ThemeisleUI from "./assets/ui/ThemeisleUI"
import UIStore from "./stores/UIStore"
import "../src/assets/styles/Start/start.scss"
import BackUI from "./assets/ui/BackUI"

import ReactGA from "react-ga"

/**
 * This is the main component for the Start page
 * 
 * It use the global object `window.logomaker.parentLink` as link for the `Back` button
 */

const Start: React.FunctionComponent<unknown> = () => {

    /**
     * 
     * @param value The Title Text
     */
    const setTitleText = (value: string) => {
        UIStore.update((s) => {
            s.title.text = value
        })
    }

    const setSloganText = (value: string) => {
        UIStore.update((s) => {
            s.slogan.text = value
        })
    }

    React.useEffect(() => {
        if (!window.logomaker?.parentLink) {
            console.log(
                "Parent link was not provided by WordPress. The back button from the start page will point to itself as default behaviour!"
            )
        }
        ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search)
    }, [])

    return (
        <div className="logo-maker logo-maker-container">
            <div className="top-section">
                {!window.logomaker?.parentLink ? (
                    <BackUI />
                ) : (
                    <div className="back">
                        <a href={window.logomaker?.parentLink}>
                            <svg
                                width="42"
                                height="42"
                                viewBox="0 0 42 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="21" cy="21" r="20.5" fill="white" stroke="#E7E7E7" />
                                <path
                                    d="M23 17L19 21L23 25"
                                    stroke="#585858"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>Back</p>
                        </a>
                    </div>
                )}

                <ThemeisleUI />
            </div>
            <div className="content-section">
                <div className="titles">
                    <h1>Add your business name</h1>
                    <p>You can change this information after you designs have been created</p>
                </div>
                <div className="step1">
                    <label>Logo Text</label>
                    <input
                        type="text"
                        id="logo-text-input"
                        value={UIStore.useState((s) => s.title.text)}
                        onChange={(e) => setTitleText(e.target.value)}
                    />
                    <label>Slogan text (Optional)</label>
                    <input
                        type="text"
                        id="slogan-text-input"
                        value={UIStore.useState((s) => s.slogan.text)}
                        onChange={(e) => setSloganText(e.target.value)}
                    />
                </div>
                <div className="next">
                    <Link to="/showcase">Next</Link>
                </div>
            </div>
        </div>
    )
}

export default Start
