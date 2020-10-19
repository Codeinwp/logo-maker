import { SVG } from "@svgdotjs/svg.js"
import * as React from "react"
import { LogoSVGImport } from "../assets/logos"

type SelectLogoProps = {
    logo: LogoSVGImport
}

const LogoItem: React.FunctionComponent<SelectLogoProps> = (props: SelectLogoProps) => {
    const itemRef = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
        if (itemRef.current) {
            itemRef.current.textContent = ""
            const svgItem = SVG().addTo(itemRef.current).svg(props.logo.svg)
            svgItem
                .viewbox(0, 0, svgItem.bbox().width, svgItem.bbox().height)
                .size(50, 50)
                .addClass("border-2 hover:border-blue-500 p-1 rounded")
        }
    }, [props.logo.svg])

    return <button style={{ width: "max-content", height: "max-content" }} ref={itemRef}></button>
}

export default LogoItem
