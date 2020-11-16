import * as React from "react"
import themeisleImg from "./themeisle.png"

const ThemeisleUI: React.FunctionComponent<unknown> = () => {
    return (
        <div className="logo-holder">
            <img src={themeisleImg} />
            <span className="">LogoMaker</span>
        </div>
    )
}

export default ThemeisleUI
