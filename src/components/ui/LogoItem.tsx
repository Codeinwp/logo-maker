import { Svg, SVG } from "@svgdotjs/svg.js"
import * as React from "react"
import { LogoSVGImport } from "../../assets/logos/index"
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

            const logoSVG = svgItem.first().node as SVGElement
            logoSVG.removeAttribute("viewBox")
            logoSVG.setAttribute(
                "viewBox",
                `-7 -7 0${svgItem.bbox().width + 10} ${svgItem.bbox().height + 10}`
            )
            svgItem
                .viewbox(0, 0, svgItem.bbox().width + 13, svgItem.bbox().height + 13)
                .size(77, 77)
                .addClass(classnames({ active: props?.isSelected }))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
    }, [logo.svg, props?.isSelected])

    return <button name={logo.id} onClick={onClick} ref={itemRef}></button>
}

export default LogoItem
