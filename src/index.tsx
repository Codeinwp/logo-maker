import React from "react"
import { render } from "react-dom"
import "./assets/styles/index.scss"
import "./assets/styles/tailwind.css"
import CreateLogo from "./components/CreateLogo"
import logos from "./assets/logos"

const Application: React.FunctionComponent<unknown> = () => {
    const renderLogoList = () => {
        return logos.map((logo, index) => <CreateLogo key={index} logoSVG={logo.svg} />)
    }

    return (
        <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
            <div className="grid gap-4 grid-cols-3">{renderLogoList()}</div>
        </div>
    )
}

render(<Application />, document.getElementById("root"))
