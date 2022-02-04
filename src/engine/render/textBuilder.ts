import { Svg, Text } from "@svgdotjs/svg.js"
import { isFontFromGoogle } from "../../assets/fonts/google-fonts"
import { FontRenderers } from "../../stores/AssetsStore"
import { TSlogan, TTitle } from "../../stores/UIStore"
import { buildTextToSVG } from "./textToSVG"

export function buildText(
    parent: Svg,
    props: TTitle | TSlogan,
    type: "svg" | "text" | "auto",
    fontRenderes?: FontRenderers
): Svg | Text {
    switch (type) {
        case "svg":
            return (fontRenderes && buildTextToSVG(parent, props, fontRenderes)) || buildText(parent, props, "text")
        case "text":
            return parent.text(props.text).font({
                fill: props.style.color,
                family: props.style.fontFamily,
                size: props.style.fontSize + "px",
            }).attr('fill', props.style.color)
        case "auto":
            return isFontFromGoogle(props.style.fontFamily) && fontRenderes
                ? buildText(parent, props, "svg", fontRenderes)
                : buildText(parent, props, "text")
    }
}
