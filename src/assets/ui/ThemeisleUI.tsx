import * as React from "react"
import themeisleImg from "./themeisle.png"

const ThemeisleUI: React.FunctionComponent<unknown> = () => {
    return (
        <div className="flex flex-row items-center">
            <img src={themeisleImg} />
            <p className="block logo-maker-logo mx-1">LogoMaker</p>
        </div>
    )
}

export default ThemeisleUI
