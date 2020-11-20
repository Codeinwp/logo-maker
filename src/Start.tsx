import * as React from "react"
import { Link } from "react-router-dom"
import BackUI from "./assets/ui/BackUI"
import ThemeisleUI from "./assets/ui/ThemeisleUI"
import UIStore from "./stores/UIStore"
import "../src/assets/styles/Start/start.scss"

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

    return (
        <div className="logo-maker logo-maker-container">
            <div className="top-section">
                <BackUI />
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
