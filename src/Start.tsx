/**
 * @packageDocumentation
 */

import * as React from "react"
import { Link } from "react-router-dom"
import ThemeisleUI from "./components/ui/common/ThemeisleUI"
import UIStore from "./stores/UIStore"
import "../src/assets/styles/Start/start.scss"
import BackUI from "./components/ui/common/BackUI"

import ReactGA from "react-ga"

/**
 * This is the main component for the Start page
 *
 * It use the global object `window.logomaker.parentLink` as link for the `Back` button
 */

const Start: React.FunctionComponent<unknown> = () => {
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

    /**
     * Link the back button with the parent page provided by PHP & send data to Google Analytics
     */
    React.useEffect(() => {
        if (!window.logomaker?.parentLink) {
            console.log(
                "Parent link was not provided by WordPress. The back button from the start page will point to itself as default behaviour!"
            )
        }
        if (window.logomaker?.googleAnalyticsCode) {
            ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search)
        }
    }, [])

    return (
        <div className="logo-maker logo-maker-container">
            <div className="top-section">
                {window.logomaker?.parentLink && <BackUI url={window.logomaker?.parentLink} />}

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
                        id="input-logo-text"
                        value={UIStore.useState((s) => s.title.text)}
                        onChange={(e) => setTitleText(e.target.value)}
                    />
                    <label>Slogan text (Optional)</label>
                    <input
                        type="text"
                        id="input-logo-slogan"
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
