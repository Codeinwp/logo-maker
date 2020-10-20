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
            <button className="m-4" onClick={() => setLogoAlign("align-top")}>
                Logo TOP
            </button>
            <button className="m-4" onClick={() => setLogoAlign("align-left")}>
                Logo LEFT
            </button>
            <button className="m-4" onClick={() => setLogoAlign("align-right")}>
                Logo RIGHT
            </button>
        </div>
    )
}

export default SelectLayout
