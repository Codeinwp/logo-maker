import * as React from "react"
import logos, { LogoSVGImport } from "../../assets/logos/index"
import LogoItem from "./LogoItem"
import store from "../../stores/UIStore"
import { Range } from "react-range"

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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    height: "75px",
                }}
            >
                <Range
                    step={0.1}
                    min={0.5}
                    max={2.0}
                    values={[scaleLogo]}
                    onChange={(values) => setScale(values.pop() || 1)}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "6px",
                                width: "90%",
                                backgroundColor: "#ccc",
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "42px",
                                width: "42px",
                                borderRadius: "4px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "-28px",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                                    padding: "4px",
                                    borderRadius: "4px",
                                    backgroundColor: "#548BF4",
                                }}
                            >
                                {`${scaleLogo.toFixed(1)}x`}
                            </div>
                            <div
                                style={{
                                    height: "16px",
                                    width: "5px",
                                    backgroundColor: isDragged ? "#548BF4" : "#CCC",
                                }}
                            />
                        </div>
                    )}
                />
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
