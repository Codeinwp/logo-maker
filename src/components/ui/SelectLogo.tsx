import * as React from "react"
import logos, { LogoSVGImport } from "../../assets/logos"
import LogoItem from "./LogoItem"
import store from "../../stores/LogoModel"

const SelectLogo: React.FunctionComponent<unknown> = () => {
    const setLogo = (logo: LogoSVGImport) => {
        store.update((s) => {
            s.logo.src = logo
        })
    }

    const renderLogos = () => {
        return logos.map((logo, index) => (
            <LogoItem onClick={() => setLogo(logo)} key={index} logo={logo} />
        ))
    }

    return (
        <div>
            <h1 className="text-xl text-gray-500">Logo Options</h1>
            <p className="my-2">Select a symbol for the logo</p>
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
