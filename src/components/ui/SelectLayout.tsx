import * as React from "react"
import classnames from "classnames"
import HorizontalLineUIsvg from "../../assets/ui/HorizontalLineUIsvg"
import LogoUIsvg from "../../assets/ui/LogoUIsvg"
import UIStore from "../../stores/UIStore"

export type LogoAlignOptions = "align-top" | "align-left" | "align-right"

const SelectLayout: React.FunctionComponent<unknown> = () => {
    const alignOption = UIStore.useState((s) => s.container.align)

    return (
        <div className="select-layout">
            <h1>LOGO OPTIONS</h1>
            <p>Select a symbol for the logo</p>
            <div className="options">
                <button
                    className={classnames("box-border", { active: alignOption === "align-top" })}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-top"
                        })
                    }
                >
                    <div className="align-top">
                        <LogoUIsvg clasName="m-1" isSelected={alignOption === "align-top"} />
                        <HorizontalLineUIsvg
                            clasName="m-1"
                            isSelected={alignOption === "align-top"}
                        />
                    </div>
                    <span>Logo TOP</span>
                </button>
                <button
                    className={classnames("box-border", { active: alignOption === "align-left" })}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-left"
                        })
                    }
                >
                    <div className="align-left">
                        <LogoUIsvg clasName="m-1" isSelected={alignOption === "align-left"} />
                        <HorizontalLineUIsvg
                            clasName="m-1"
                            isSelected={alignOption === "align-left"}
                        />
                    </div>
                    <span>Logo LEFT</span>
                </button>
                <button
                    className={classnames("align-right", { active: alignOption === "align-right" })}
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
