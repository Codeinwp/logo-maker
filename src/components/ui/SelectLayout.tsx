import * as React from "react"
import classnames from "classnames"
import HorizontalLineUIsvg from "../../assets/ui/HorizontalLineUIsvg"
import LogoUIsvg from "../../assets/ui/LogoUIsvg"
import UIStore from "../../stores/UIStore"

export type LogoAlignOptions = "align-top" | "align-left" | "align-right"

const SelectLayout: React.FunctionComponent<unknown> = () => {
    const alignOption = UIStore.useState((s) => s.container.align)

    return (
        <div className="select-layout flex flex-col">
            <h1 className="text-xl text-gray-500 my-1">LOGO OPTIONS</h1>
            <p className="my-1">Select a symbol for the logo</p>
            <div className="options flex flex-col items-center items lg:items-start">
                <button
                    className={classnames(
                        "box-border flex flex-col items-center justify-center  h-32 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 rounded-lg",
                        { "color-ui-blue-inactive": alignOption !== "align-top" },
                        { "color-ui-blue-active": alignOption === "align-top" }
                    )}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-top"
                        })
                    }
                >
                    <div className="flex flex-col items-center justify-center m-1">
                        <LogoUIsvg clasName="m-1" isSelected={alignOption === "align-top"} />
                        <HorizontalLineUIsvg
                            clasName="m-1"
                            isSelected={alignOption === "align-top"}
                        />
                    </div>
                    Logo TOP
                </button>
                <button
                    className={classnames(
                        "box-border flex flex-col items-center justify-center  h-32 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 rounded-lg",
                        { "color-ui-blue-inactive": alignOption !== "align-left" },
                        { "color-ui-blue-active": alignOption === "align-left" }
                    )}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-left"
                        })
                    }
                >
                    <div className="flex flex-row items-center justify-center m-1">
                        <LogoUIsvg clasName="m-1" isSelected={alignOption === "align-left"} />
                        <HorizontalLineUIsvg
                            clasName="m-1"
                            isSelected={alignOption === "align-left"}
                        />
                    </div>
                    Logo LEFT
                </button>
                <button
                    className={classnames(
                        "box-border flex flex-col items-center justify-center  h-32 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 rounded-lg",
                        { "color-ui-blue-inactive": alignOption !== "align-right" },
                        { "color-ui-blue-active": alignOption === "align-right" }
                    )}
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-right"
                        })
                    }
                >
                    <div className="flex flex-row-reverse items-center justify-center m-1">
                        <LogoUIsvg clasName="m-1" isSelected={alignOption === "align-right"} />
                        <HorizontalLineUIsvg
                            clasName="m-1"
                            isSelected={alignOption === "align-right"}
                        />
                    </div>
                    Logo RIGHT
                </button>
            </div>
        </div>
    )
}

export default SelectLayout
