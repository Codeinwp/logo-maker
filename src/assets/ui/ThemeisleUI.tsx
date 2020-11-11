import * as React from "react"
import themeisleImg from "./themeisle.png"

const ThemeisleUI: React.FunctionComponent<unknown> = () => {
    return (
        <div className="flex flex-row items-center">
            <img src={themeisleImg} />
            <p className="block m-1 logo-maker-logo">LogoMaker</p>
        </div>
    )
}

export default ThemeisleUI
