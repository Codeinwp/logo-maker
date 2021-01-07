import { SVG, Svg, Text } from "@svgdotjs/svg.js"
import { LogoProps } from "./alignFunctions"

export interface BaseShapheBuilder {
    logo: Svg
    title: Text
    slogan: Text
}

export function buildDefaultShapes(parent: Svg, componentsProps: LogoProps): BaseShapheBuilder {
    const { logo: pLogo, title: pTitle, slogan: pSlogan } = componentsProps

    // Create SVGs
    const logo = SVG().addTo(parent).svg(pLogo.src.svg)
    const title = parent.text(pTitle.text)
    const slogan = parent.text(pSlogan.text)

    // Apply other properties
    logo.viewbox(0, 0, logo.bbox().width, logo.bbox().height + 5)
        .size(pLogo.width, pLogo.height)
        .css("fill", pLogo.style.fill)

    title
        .font({
            fill: pTitle.style.color,
            family: pTitle.style.fontFamily,
            size: pTitle.style.fontSize + "px",
            weight: "400",
        })
        .leading(0)

    slogan
        .font({
            fill: pSlogan.style.color,
            family: pSlogan.style.fontFamily,
            size: pSlogan.style.fontSize + "px",
            weight: "400",
        })
        .leading(0)

    // Move to an arbitrary position (Optional)
    title.move(0, 0)
    slogan.move(0, 0)

    return {
        logo,
        title,
        slogan,
    }
}
