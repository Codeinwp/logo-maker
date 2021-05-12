import * as React from "react"
import logos, { LogoSVGImport } from "../../assets/logos/index"
import LogoItem from "./LogoItem"
import store from "../../stores/UIStore"
import ReactGA from "react-ga"

/**
 * This function will generate the `Select Logo Meniu` from design
 */
const SelectLogo: React.FunctionComponent<unknown> = () => {
    const selectedLogoID = store.useState((s) => s.logo.src.id)
    const scaleLogo = store.useState((s) => s.logo.scale) || 1.0

    /**
     * Updated logo source of the user interface store
     *
     * @param logo The logo's Svg source
     */
    const setLogo = (logo: LogoSVGImport) => {
        ReactGA.event({
            category: "Logo Maker Creator",
            action: "Logo Choosed",
            label: `Logo ID: ${logo.id}`,
            value: 1,
        })
        store.update((s) => {
            s.logo.src = logo
        })
    }

    const setScale = (value: number) => {
        store.update((s) => {
            s.logo.scale = value
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
            <p>Select the scale</p>

            <div className="size-range">
                <input
                    className="slider"
                    type="range"
                    id="size"
                    name="size"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={scaleLogo}
                    onChange={(e) => {
                        setScale(parseFloat(e.target.value))
                    }}
                />
                <label htmlFor="size">{scaleLogo.toFixed(1)}x</label>
            </div>

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
