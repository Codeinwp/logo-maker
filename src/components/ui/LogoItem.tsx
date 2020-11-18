import { SVG } from "@svgdotjs/svg.js"
import * as React from "react"
import { LogoSVGImport } from "../../assets/logos"
import classnames from "classnames"

type SelectLogoProps = {
    logo: LogoSVGImport
    isSelected?: boolean
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
                .addClass(classnames({ active: props?.isSelected }))
        }
    }, [logo.svg, props?.isSelected])

    return <button onClick={onClick} ref={itemRef}></button>
}

export default LogoItem
