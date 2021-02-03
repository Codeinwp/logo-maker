import * as React from "react"
import logos, { LogoSVGImport } from "../../assets/logos/index"
import LogoItem from "./LogoItem"
import store from "../../stores/UIStore"

/**
 * This function will generate the `Select Logo Meniu` from design
 */
const SelectLogo: React.FunctionComponent<unknown> = () => {
    const selectedLogoID = store.useState((s) => s.logo.src.id)

    /**
     * Updated logo source of the user interface store
     *
     * @param logo The logo's Svg source
     */
    const setLogo = (logo: LogoSVGImport) => {
        store.update((s) => {
            s.logo.src = logo
        })
    }

    /**
     * Render the logos for the menu
     */
    const renderLogos = () => {
        return logos.map((logo) => (
            <LogoItem onClick={() => setLogo(logo)} key={logo.id} logo={logo} isSelected={selectedLogoID === logo.id} />
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
