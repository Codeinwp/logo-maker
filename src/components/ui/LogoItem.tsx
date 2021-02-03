import { SVG } from "@svgdotjs/svg.js"
import * as React from "react"
import { LogoSVGImport } from "../../assets/logos/index"
import classnames from "classnames"

export type SelectLogoProps = {
    /** The logo's SVG source */
    logo: LogoSVGImport
    /** The flag that indicates if the component is selected in the user interface */
    isSelected?: boolean
    /** The function that will trigger when the component is preset */
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

/**
 * This function will generate the logo representation for the `Select Logo` component
 *
 * @param props The properties necessary for rendering the logo in the menu
 */
const LogoItem: React.FunctionComponent<SelectLogoProps> = (props: SelectLogoProps) => {
    const { onClick, logo } = props
    const itemRef = React.useRef<HTMLButtonElement>(null)

    React.useEffect(() => {
        if (itemRef.current) {
            itemRef.current.textContent = ""
            const svgItem = SVG().addTo(itemRef.current).svg(logo.svg)

            const logoSVG = svgItem.first().node as SVGElement
            logoSVG.removeAttribute("viewBox")
            logoSVG.setAttribute("viewBox", `-7 -7 0${svgItem.bbox().width + 13} ${svgItem.bbox().height + 13}`)
            svgItem
                .viewbox(0, 0, svgItem.bbox().width + 16, svgItem.bbox().height + 16)
                .size(77, 77)
                .addClass(classnames({ active: props?.isSelected }))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
    }, [logo.svg, props?.isSelected])

    return <button onClick={onClick} ref={itemRef}></button>
}

export default LogoItem
