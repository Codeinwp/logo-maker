import * as React from "react"
import { SVG } from "@svgdotjs/svg.js"
import {
    alignLogoLeft,
    alignLogoRight,
    alignLogoTop,
    autoscallingBaseShapes,
    alignShapesToCenter,
} from "../engine/shapesAligner"
import { buildDefaultShapes } from "../engine/shapesBuilder"
import { v4 as uuidv4 } from "uuid"
import { TLogo, TLogoContainer, TSlogan, TTitle } from "~/src/stores/UIStore"

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
const CreateLogo: React.FunctionComponent<CreateLogoPropsComponent> = (
    props: CreateLogoPropsComponent
) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const ID = props.id || `image-logo-${uuidv4()}`

    React.useEffect(() => {
        // console.log(props.logoProps)
        if (divRef.current && props.logoProps) {

            /**
             * Create the SVG parent
             */
            const container = props.logoProps.container
            divRef.current.textContent = ""

            const vb = container.viewbox
            const draw = SVG()
                .addTo(divRef.current)
                .size(container.width, container.height)
                .viewbox(vb.x, vb.y, vb.width, vb.height)
                .css("background-color", container.style.color)
                .addClass(props?.className || "")

            

            /**
             * Create the base shapes & align them
             */    
            let shapes
            let alignerProps

            switch (props.logoProps.container.align) {
                case "align-top":
                    shapes = buildDefaultShapes(draw, props.logoProps)
                    alignerProps = alignLogoTop(shapes)
                    break
                case "align-left":
                    shapes = buildDefaultShapes(draw, props.logoProps)
                    alignerProps = alignLogoLeft(shapes)
                    break
                case "align-right":
                    shapes = buildDefaultShapes(draw, props.logoProps)
                    alignerProps = alignLogoRight(shapes)
                    break
                default:
                    console.log("Invalid Type. The logo will be aligned top as a fallback option!")
                    shapes = buildDefaultShapes(draw, props.logoProps)
                    alignerProps = alignLogoTop(shapes)
            }

            /**
             * Additional transformations
             */
            autoscallingBaseShapes(draw, alignerProps.containerWidth, alignerProps.containerHeight)
            alignShapesToCenter(draw, shapes, alignerProps)

            
        }
    }, [props?.className, props.logoProps])

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