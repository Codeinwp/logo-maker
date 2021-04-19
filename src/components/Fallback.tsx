import * as React from "react"
import "../assets/styles/fallback.scss"

const Fallback: React.FunctionComponent<unknown> = () => {
    return (
        <div className="fallback-container">
            <div className="info">
                <h1>LogoMaker</h1>
            </div>
        </div>
    )
}

export default Fallback
