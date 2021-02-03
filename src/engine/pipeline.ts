/**
 * What is a pipeline? A pipeline is a process for rendering the final logo's SVG
 * The default pipeline is rendering the logo in the editor on the user interface.
 * Another pipeline might be rendering a favicon, which builds only the logo, without title or slogan.
 */
import { Svg, SVG } from "@svgdotjs/svg.js"
import { StoreProps } from "../stores/UIStore"
import {
    alignLogoLeft,
    alignLogoRight,
    alignLogoTop,
    autoscallingBaseShapes,
    alignShapesToCenter,
} from "./shapesAligner"
import { buildDefaultShapes } from "./shapesBuilder"

export type PipelineOptions = "editor" | "favicon"

export interface PipelinesOutput {
    createEditor: (parent: HTMLDivElement) => Svg
    createFavicon: (parent: HTMLDivElement) => Svg
}

export function buildPipelines(_props: StoreProps): PipelinesOutput {
    return {
        createEditor: (parent: HTMLDivElement): Svg => {
            /**
             * Create the SVG parent
             */
            const props = { ..._props }
            const container = props.container
            const vb = container.viewbox
            const draw = SVG()
                .addTo(parent)
                .size(container.width, container.height)
                .viewbox(vb.x, vb.y, vb.width, vb.height)
                .css("background-color", container.style.color)

            /**
             * Create the base shapes & align them
             */
            const shapes = buildDefaultShapes(draw, props)

            /**
             * TODO: refactor this switch, make it a separate function
             */
            let alignerProps
            switch (props.container.align) {
                case "align-top":
                    alignerProps = alignLogoTop(shapes)
                    break
                case "align-left":
                    alignerProps = alignLogoLeft(shapes)
                    break
                case "align-right":
                    alignerProps = alignLogoRight(shapes)
                    break
                default:
                    console.log("Invalid Type. The logo will be aligned top as a fallback option!")
                    alignerProps = alignLogoTop(shapes)
            }

            /**
             * Additional transformations
             */
            autoscallingBaseShapes(draw, alignerProps.containerWidth, alignerProps.containerHeight)
            alignShapesToCenter(draw, shapes, alignerProps)

            return draw
        },
        createFavicon: (parent: HTMLDivElement): Svg => {
            // Eliminate title and slogan
            const props: StoreProps = {
                ..._props,
                container: {
                    ..._props.container,
                    align: "align-top",
                    width: 345,
                    height: 281,
                    viewbox: {
                        x: 0,
                        y: 0,
                        width: 100,
                        height: 100,
                    },
                },
                title: {
                    ..._props.title,
                    text: "",
                },
                slogan: {
                    ..._props.slogan,
                    text: "",
                },
            }

            /**
             * Create the SVG parent
             */
            const container = props.container
            const vb = container.viewbox
            const draw = SVG()
                .addTo(parent)
                .size(container.width, container.height)
                .viewbox(vb.x, vb.y, vb.width, vb.height)
                .css("background-color", container.style.color)

            /**
             * Create the base shapes & align them
             */
            const shapes = buildDefaultShapes(draw, props)
            const alignerProps = alignLogoTop(shapes)

            /**
             * Additional transformations
             */
            autoscallingBaseShapes(draw, alignerProps.containerWidth, alignerProps.containerHeight)
            alignShapesToCenter(draw, shapes, alignerProps)

            return draw
        },
    }
}
