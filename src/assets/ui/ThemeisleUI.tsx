import * as React from "react"
// import themeisleImg from "./themeisle.png"

const ThemeisleUI: React.FunctionComponent<unknown> = () => {
    return (
        <div className="logo-holder">
            <a href="https://themeisle.com/">
                {/* <img src={themeisleImg} /> */}
                <img
                    width="134px"
                    height="44px"
                    src="https://mllj2j8xvfl0.i.optimole.com/d0cOXWA.d0eL~37102/w:auto/h:auto/q:90/https://s30246.pcdn.co/wp-content/uploads/2019/03/logo.png"
                    alt="Themeisle Logo"
                ></img>
            </a>
            <a className="logo-maker-name">LogoMaker</a>
        </div>
    )
}

export default ThemeisleUI
