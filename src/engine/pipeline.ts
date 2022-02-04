/**
 * What is a pipeline? A pipeline is a process for rendering the final logo's SVG
 * The default pipeline is rendering the logo in the editor on the user interface.
 * Another pipeline might be rendering a favicon, which builds only the logo, without title or slogan.
 */
import { Svg, SVG } from "@svgdotjs/svg.js"
import { FontRenderers } from "../stores/AssetsStore"
import { StoreProps } from "../stores/UIStore"
import { autoscallingBaseShapes, alignShapesToCenter, alignShapesWithOption } from "./render/shapesAligner"
import { buildDefaultShapes } from "./render/shapesBuilder"

export type PipelineOptions = "editor" | "favicon"

export interface PipelinesOutput {
    createEditor: (parent: HTMLDivElement) => Svg
    createFavicon: (parent: HTMLDivElement) => Svg
}

export function buildPipelines(_props: StoreProps, _fontRenderers?: FontRenderers): PipelinesOutput {
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
                .css('background', container.style.color )
                .addClass("svg-animations")

            /**
             * Create the base shapes & align them
             */
            const shapes = buildDefaultShapes(draw, props, _fontRenderers)

            // /**
            //  * For fonts that are not native to the browser
            //  * we need to redo the alingment,
            //  * because the browser it might a fallback font before it loads the actual font
            //  * and cause an eror in the positions since we do not use the actual font
            //  */
            // setTimeout( () => {
            //     /**
            //      * Align the shapes
            //      */
            //     const alignerProps = alignShapesWithOption(props.container.align, shapes)

            //     /**
            //      * Additional transformations
            //      */
            //     // autoscallingBaseShapes(draw, alignerProps.containerWidth, alignerProps.containerHeight)
            //     alignShapesToCenter(draw, shapes, alignerProps)
            //     draw.css("opacity", 1)
            // }, 100)

            /**
             * Align the shapes
             */
            const alignerProps = alignShapesWithOption(props.container.align, shapes)

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
                .css('background', container.style.color )

            /**
             * Create the base shapes & align them
             */
            const shapes = buildDefaultShapes(draw, props, _fontRenderers)
            const alignerProps = alignShapesWithOption("align-top", shapes)

            /**
             * Additional transformations
             */
            autoscallingBaseShapes(draw, alignerProps.containerWidth, alignerProps.containerHeight)
            alignShapesToCenter(draw, shapes, alignerProps)

            return draw
        },
    }
}
