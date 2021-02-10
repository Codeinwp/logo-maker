import * as React from "react"
import classnames from "classnames"
import HorizontalLineUIsvg from "./common/HorizontalLineUIsvg"
import LogoUIsvg from "./common/LogoUIsvg"
import UIStore from "../../stores/UIStore"

export type LogoAlignOptions = "align-top" | "align-left" | "align-right"

/**
 * This function will generate the `Select Layout Meniu` from design
 */
const SelectLayout: React.FunctionComponent<unknown> = () => {
    const alignOption = UIStore.useState((s) => s.container.align)

    return (
        <div className="select-layout">
            <h1>LOGO OPTIONS</h1>
            <p>Select a symbol for the logo</p>
            <div className="options">
                <button
                    className={classnames({ active: alignOption === "align-top" })}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-top"
                        })
                    }
                >
                    <div className="align-top">
                        <LogoUIsvg isSelected={alignOption === "align-top"} />
                        <HorizontalLineUIsvg isSelected={alignOption === "align-top"} />
                    </div>
                    <span>Logo TOP</span>
                </button>
                <button
                    className={classnames({ active: alignOption === "align-left" })}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-left"
                        })
                    }
                >
                    <div className="align-left">
                        <LogoUIsvg isSelected={alignOption === "align-left"} />
                        <HorizontalLineUIsvg isSelected={alignOption === "align-left"} />
                    </div>
                    <span>Logo LEFT</span>
                </button>
                <button
                    className={classnames({ active: alignOption === "align-right" })}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-right"
                        })
                    }
                >
                    <div className="align-right">
                        <LogoUIsvg isSelected={alignOption === "align-right"} />
                        <HorizontalLineUIsvg isSelected={alignOption === "align-right"} />
                    </div>
                    <span>Logo RIGHT</span>
                </button>
            </div>
        </div>
    )
}

export default SelectLayout
