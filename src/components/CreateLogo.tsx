import * as React from "react"
import { v4 as uuidv4 } from "uuid"
import { StoreProps, TLogo, TLogoContainer, TSlogan, TTitle } from "../stores/UIStore"
import { buildPipelines } from "../engine/pipeline"
import { Svg } from "@svgdotjs/svg.js"
import { AssetsStore } from "../stores/AssetsStore"

export type CreateLogoPropsComponent = {
    /** The id of the parent element */
    id?: string
    /** The CSS class */
    className?: string
    /** The props necessary for creating the logo */
    logoProps: {
        /** The props of the container */
        container: TLogoContainer
        /** The props of the logo */
        logo: TLogo
        /** The props of the title */
        title: TTitle
        /** The props of the slogan */
        slogan: TSlogan
    }
}

/**
 * This function will generate the logo as a `react` component
 *
 * @param props The properties necessary for rendering the the logo
 */
const CreateLogo: React.FunctionComponent<CreateLogoPropsComponent> = (props: CreateLogoPropsComponent) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const ID = props.id || `image-logo-${uuidv4()}`
    const [, setResult] = React.useState<Svg>()
    const fontRenderers = AssetsStore.useState((s) => s.fonts.fontRenderers)

    React.useEffect(() => {
        // console.log(props.logoProps)
        if (divRef.current && props.logoProps) {
            /**
             * Create the final logo
             */
            divRef.current.textContent = "" // clear the old logo
            const svg = buildPipelines(props.logoProps as StoreProps, fontRenderers)
                .createEditor(divRef.current)
                .addClass(props?.className || "")
            setResult(svg)
        }
    }, [props?.className, props.logoProps, fontRenderers])

    return <div id={ID} ref={divRef}></div>
}

export default CreateLogo

// Legacy & For reference

// const getAlignedLogo = () => {
//     switch (props.logoProps.container.align) {
//         case "align-top":
//             return alignLogoTop(props.logoProps, draw)
//         case "align-left":
//             return alignLogoLeft(props.logoProps, draw)
//         case "align-right":
//             return alignLogoRight(props.logoProps, draw)
//         default:
//             console.log(
//                 "Invalid Type. The logo will be aligned top as a fallback option!"
//             )
//             return alignLogoTop(props.logoProps, draw)
//     }
// }

// moveToCenter(draw, container.viewbox, getAlignedLogo())
// addEmbeddedFont(draw, props.logoProps.title.style.fontFamily)
