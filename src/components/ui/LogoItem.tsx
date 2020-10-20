import { SVG } from "@svgdotjs/svg.js"
import * as React from "react"
import { LogoSVGImport } from "../../assets/logos"

type SelectLogoProps = {
    logo: LogoSVGImport
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const LogoItem: React.FunctionComponent<SelectLogoProps> = (props: SelectLogoProps) => {
    const { onClick, logo } = props
    const itemRef = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
        if (itemRef.current) {
            itemRef.current.textContent = ""
            const svgItem = SVG().addTo(itemRef.current).svg(logo.svg)
            svgItem
                .viewbox(0, 0, svgItem.bbox().width, svgItem.bbox().height)
                .size(50, 50)
                .addClass("border-2 hover:border-blue-500 p-1 rounded")
        }
    }, [logo.svg])

    return (
        <button
            onClick={onClick}
            style={{ width: "max-content", height: "max-content" }}
            ref={itemRef}
        ></button>
    )
}

export default LogoItem
