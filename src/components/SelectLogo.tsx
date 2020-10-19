import * as React from "react"
import logos from "../assets/logos"
import LogoItem from "./LogoItem"

const SelectLogo: React.FunctionComponent<unknown> = () => {
    const renderLogos = () => {
        return logos.map((logo, index) => <LogoItem key={index} logo={logo} />)
    }

    return (
        <div>
            <h1 className="font-bold">Logo Options</h1>
            <p>Select a symbol for the logo</p>
            <div
                className="h-32 lg:h-auto overflow-auto overscroll-auto md:overscroll-contain lg:overscroll-none grid grid-cols-3 gap-4"
                // style={{ maxHeight: 150 + "px", overflow: "auto" }}
            >
                {renderLogos()}
            </div>
        </div>
    )
}

export default SelectLogo
