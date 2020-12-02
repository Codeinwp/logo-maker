import * as React from "react"
import { SVG } from "@svgdotjs/svg.js"
import { moveToCenter } from "../engine/utility"
import { alignLogoLeft, alignLogoRight, alignLogoTop } from "../engine/alignFunctions"
import { v4 as uuidv4 } from "uuid"
import { TLogo, TLogoContainer, TSlogan, TTitle } from "~/src/stores/UIStore"

type CreateLogoPropsComponent = {
    id?: string
    className?: string
    logoProps: {
        container: TLogoContainer
        logo: TLogo
        title: TTitle
        slogan: TSlogan
    }
}

const CreateLogo: React.FunctionComponent<CreateLogoPropsComponent> = (
    props: CreateLogoPropsComponent
) => {
    const divRef = React.useRef<HTMLDivElement>(null)
    const ID = props.id || `image-logo-${uuidv4()}`

    React.useEffect(() => {
        // console.log(props.logoProps)
        if (divRef.current && props.logoProps) {
            /*
                Create the SVG parent
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

            const getAlignedLogo = () => {
                switch (props.logoProps.container.align) {
                    case "align-top":
                        return alignLogoTop(props.logoProps, draw)
                    case "align-left":
                        return alignLogoLeft(props.logoProps, draw)
                    case "align-right":
                        return alignLogoRight(props.logoProps, draw)
                    default:
                        console.log(
                            "Invalid Type. The logo will be aligned top as a fallback option!"
                        )
                        return alignLogoTop(props.logoProps, draw)
                }
            }

            moveToCenter(draw, container.viewbox, getAlignedLogo())

            // addEmbeddedFont(draw, props.logoProps.title.style.fontFamily)
        }
    }, [props.logoProps])

    return <div id={ID} ref={divRef}></div>
}

export default CreateLogo
