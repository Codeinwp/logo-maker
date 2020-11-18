import * as React from "react"
import logos, { LogoSVGImport } from "../../assets/logos"
import LogoItem from "./LogoItem"
import store from "../../stores/UIStore"

const SelectLogo: React.FunctionComponent<unknown> = () => {
    const selectedLogoID = store.useState((s) => s.logo.src.id)

    const setLogo = (logo: LogoSVGImport) => {
        store.update((s) => {
            s.logo.src = logo
        })
    }

    const renderLogos = () => {
        return logos.map((logo) => (
            <LogoItem
                onClick={() => setLogo(logo)}
                key={logo.id}
                logo={logo}
                isSelected={selectedLogoID === logo.id}
            />
        ))
    }

    return (
        <div className="select-logo">
            <h1>{`LOGO OPTIONS (${logos.length})`}</h1>
            <p>Select a symbol for the logo</p>
            <div
                className="logo-list"
                // style={{ maxHeight: 150 + "px", overflow: "auto" }}
            >
                {renderLogos()}
            </div>
        </div>
    )
}

export default SelectLogo
