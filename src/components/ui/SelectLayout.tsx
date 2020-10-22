import * as React from "react"

export type LogoAlignOptions = "align-top" | "align-left" | "align-right"

type SelectLayoutProps = {
    logoAlign: LogoAlignOptions
    setLogoAlign: React.Dispatch<React.SetStateAction<LogoAlignOptions>>
}

const SelectLayout: React.FunctionComponent<SelectLayoutProps> = (props: SelectLayoutProps) => {
    const { setLogoAlign } = props
    return (
        <div className="flex flex-col">
            <h1 className="text-xl text-gray-500 my-1">LOGO OPTIONS</h1>
            <p className="my-1">Select a symbol for the logo</p>
            <div className="flex flex-col items-center items lg:items-start">
                <button
                    className="box-border w-auto p-2 my-4 border-2 border-blue-600 lg:border-gray-300 hover:border-blue-600 max-content rounded-lg"
                    onClick={() => setLogoAlign("align-top")}
                >
                    Logo TOP
                </button>
                <button
                    className="box-border w-auto p-2 my-4 border-2 hover:border-blue-600 max-content rounded-lg"
                    onClick={() => setLogoAlign("align-left")}
                >
                    Logo LEFT
                </button>
                <button
                    className="box-border w-auto p-2 my-4 border-2 hover:border-blue-600 max-content rounded-lg"
                    onClick={() => setLogoAlign("align-right")}
                >
                    Logo RIGHT
                </button>
            </div>
        </div>
    )
}

export default SelectLayout
