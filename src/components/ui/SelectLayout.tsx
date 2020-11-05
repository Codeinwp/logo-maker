import * as React from "react"
import UIStore from "~/stores/UIStore"

export type LogoAlignOptions = "align-top" | "align-left" | "align-right"

const SelectLayout: React.FunctionComponent<unknown> = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl text-gray-500 my-1">LOGO OPTIONS</h1>
            <p className="my-1">Select a symbol for the logo</p>
            <div className="flex flex-col items-center items lg:items-start">
                <button
                    className="box-border h-24 w-4/5 p-2 my-4 border-2 border-blue-600 lg:border-gray-300 hover:border-blue-600 rounded-lg"
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-top"
                        })
                    }
                >
                    Logo TOP
                </button>
                <button
                    className="box-border h-24 w-4/5 p-2 my-4 border-2 hover:border-blue-600  rounded-lg"
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-left"
                        })
                    }
                >
                    Logo LEFT
                </button>
                <button
                    className="box-border h-24 w-4/5 p-2 my-4 border-2 hover:border-blue-600 rounded-lg"
                    onClick={() =>
                        UIStore.update((s) => {
                            s.container.align = "align-right"
                        })
                    }
                >
                    Logo RIGHT
                </button>
            </div>
        </div>
    )
}

export default SelectLayout
