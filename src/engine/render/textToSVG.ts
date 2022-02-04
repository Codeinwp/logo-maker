import { Svg, SVG } from "@svgdotjs/svg.js"
import opentype from "opentype.js"
import { FontRenderers } from "../../stores/AssetsStore"
import { TSlogan, TTitle } from "../../stores/UIStore"

export function transformTextToSVG(parent: Svg, font: opentype.Font, text: string, fontSize: number): Svg {
    const path = font.getPath(text, 0, Math.round(fontSize * 0.8), fontSize)
    // console.log(SVG().svg(path.toSVG(2)))

    return SVG().addTo(parent).svg(path.toSVG(2))
}

export function buildTextToSVG(parent: Svg, props: TTitle | TSlogan, fontRenderes: FontRenderers): Svg | undefined {
    if (fontRenderes[props.style.fontFamily]) {
        return transformTextToSVG(parent, fontRenderes[props.style.fontFamily], props.text, props.style.fontSize).attr(
            "fill",
            props.style.color
        )
    }
}
