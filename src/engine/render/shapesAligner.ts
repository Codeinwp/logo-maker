/**
 * This file should contains only the function that allign the shapes and their helpers
 */

import { Svg } from "@svgdotjs/svg.js"

import { BaseShapheBuilder } from "./shapesBuilder"
import { settings } from "./settings"
import { LogoAlignOptions } from "../../components/ui/SelectLayout"

/**
 * The base interface for the output of the function that calculate the dimensions
 *
 * Extend this inferface when adding functions to build more shapes
 */
export interface BaseShapeDimensions {
    /** The dimension (height x width) of the logo */
    logoDim: {
        height: number
        width: number
    }
    /** The dimension (height x width) of the title */
    titleDim: {
        height: number
        width: number
    }
    /** The dimension (height x width) of the slogan */
    sloganDim: {
        height: number
        width: number
    }
}

/**
 * This function will calculate the dimensions (width & height) based on their computed size (from `bbox()`) and settings for the shapes provided.
 *
 * @param shapes The default shapes: logo, title, slogan
 */
export function calculateDimesionsForBaseShape(shapes: BaseShapheBuilder): BaseShapeDimensions {
    const { logo, title, slogan } = shapes

    // Calculate the dimensions for the shapes, including the settings
    const logoDim = {
        height: settings.logo.margins.top + (logo.height() as number) + settings.logo.margins.bottom,
        width: settings.logo.margins.left + (logo.width() as number) + settings.logo.margins.bottom,
    }

    const titleDim = {
        height:
            title.bbox().height +
            (title.bbox().height > 0 ? settings.title.margins.top + settings.title.margins.bottom : 0),
        width:
            title.bbox().width +
            (title.bbox().width > 0 ? settings.title.margins.left + settings.title.margins.bottom : 0),
    }

    const sloganDim = {
        height:
            slogan.bbox().height +
            (slogan.bbox().height > 0 ? settings.slogan.margins.top + settings.slogan.margins.bottom : 0),
        width:
            slogan.bbox().width +
            (slogan.bbox().width > 0 ? settings.slogan.margins.left + settings.slogan.margins.bottom : 0),
    }

    // console.log('DIM',titleDim, sloganDim)

    return {
        logoDim,
        titleDim,
        sloganDim,
    }
}

/**
 * This function will compare the size of the current viewbox of the parent to the provided width and height of the container.
 *
 * The function contains an internal parameter for calculating the size of container's margins.
 *
 * @param parent The Svg element that serves as parent
 * @param containerWidth The width of the container, usually calculated by the allignment fuction
 * @param containerHeight The height of the container, usually calculated by the allignment fuction
 */
export function autoscallingBaseShapes(parent: Svg, containerWidth: number, containerHeight: number): void {
    const marginSize = 0.2 // percentage

    const currentViewBox = parent.viewbox()

    parent.viewbox(
        0,
        0,
        Math.max(currentViewBox.width * (1 + marginSize), containerWidth * (1 + marginSize)),
        Math.max(currentViewBox.height * (1 + marginSize), containerHeight * (1 + marginSize))
    )
}

/**
 * The base interface for the output of the function that calculate the dimensions
 *
 * Extend this inferface when adding functions to align more shapes
 */
export interface BaseAlignerOutput {
    /** The width of the container, usually calculated by the allignment fuction */
    containerWidth: number
    /** The height of the container, usually calculated by the allignment fuction */
    containerHeight: number
}

/**
 * This function will allgin the shapes based on Top Logo pattern from design
 *
 * @param shapes The shapes to be alligned
 */
export function alignLogoTop<S extends BaseShapheBuilder>(shapes: S): BaseAlignerOutput {
    const { logo, title, slogan } = shapes
    const { logoDim, titleDim, sloganDim } = calculateDimesionsForBaseShape(shapes)

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const containerWidth = Math.max(logoDim.width, titleDim.width, sloganDim.width)
    const containerHeight = logoDim.height + titleDim.height + sloganDim.height // logo.height + titleDim.height + sloganDim.height
    const cx = containerWidth / 2
    // const cy = containerHeight / 2

    logo.move(cx - logoDim.width / 2, 0)
    title.move(cx - titleDim.width / 2, logoDim.height)
    slogan.move(cx - sloganDim.width / 2, logoDim.height + titleDim.height)

    // console.log(cx - titleDim.width / 2, logoDim.height, cx)

    return {
        containerHeight,
        containerWidth,
    }
}

/**
 * This function will allgin the shapes based on Left Logo pattern from design
 *
 * @param shapes The shapes to be alligned
 */
export function alignLogoLeft<S extends BaseShapheBuilder>(shapes: S): BaseAlignerOutput {
    const { logo, title, slogan } = shapes
    const { logoDim, titleDim, sloganDim } = calculateDimesionsForBaseShape(shapes)

    // Calculate the dimension for the box that contains the title and the slogan
    const textContainerWidth =
        Math.max(titleDim.width, sloganDim.width) +
        settings.textContainer.margins.left +
        settings.textContainer.margins.right
    const textContainerHeight =
        titleDim.height + sloganDim.height + settings.textContainer.margins.top + settings.textContainer.margins.bottom

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height

    const containerHeight = Math.max(logoDim.height, textContainerHeight)
    const containerWidth = logoDim.width + textContainerWidth
    // const cx = containerWidth / 2
    const cy = containerHeight / 2

    const ctx = textContainerWidth / 2
    // const cty = textContainerHeight / 2

    // Move elements to their position
    logo.move(0, cy - logoDim.height / 2)
    title.move(logoDim.width + ctx - titleDim.width / 2, cy - titleDim.height / 2)

    slogan.move(
        logoDim.width + ctx - sloganDim.width / 2,
        cy + titleDim.height / 2 // + sloganDim.height / 2
    )

    return {
        containerHeight,
        containerWidth,
    }
}

/**
 * This function will allgin the shapes based on Right Logo pattern from design
 *
 * @param shapes The shapes to be alligned
 */
export function alignLogoRight<S extends BaseShapheBuilder>(shapes: S): BaseAlignerOutput {
    const { logo, title, slogan } = shapes
    const { logoDim, titleDim, sloganDim } = calculateDimesionsForBaseShape(shapes)

    // Calculate the dimension for the box that contains the title and the slogan
    const textContainerWidth =
        Math.max(titleDim.width, sloganDim.width) +
        settings.textContainer.margins.left +
        settings.textContainer.margins.right
    const textContainerHeight =
        titleDim.height + sloganDim.height + settings.textContainer.margins.top + settings.textContainer.margins.bottom

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height

    const containerHeight = Math.max(logoDim.height, textContainerHeight)
    const containerWidth = logoDim.width + textContainerWidth

    // const cx = containerWidth / 2
    const cy = containerHeight / 2

    const ctx = textContainerWidth / 2
    // const cty = textContainerHeight / 2

    logo.move(textContainerWidth, cy - logoDim.height / 2)
    title.move(ctx - titleDim.width / 2, cy - titleDim.height / 2)
    slogan.move(ctx - sloganDim.width / 2, cy + titleDim.height / 2) // + sloganDim.height / 2)

    return {
        containerHeight,
        containerWidth,
    }
}

/**
 * This function will allign the shapes to the center of the Svg parent.
 *
 * Use this after using an allign function.
 *
 * @param parent The Svg element that serves as parent
 * @param shapes The saphes to be moved to the center of the container
 * @param properties The output of the function that alligned the shapes
 */
export function alignShapesToCenter<S extends BaseShapheBuilder>(
    parent: Svg,
    shapes: S,
    properties: BaseAlignerOutput
): void {
    const { logo, title, slogan } = shapes
    const currentViewBox = parent.viewbox()

    const xOffsetToCenter = currentViewBox.width / 2 - properties.containerWidth / 2
    const yOffsetToCenter = currentViewBox.height / 2 - properties.containerHeight / 2

    logo.center(logo.cx() + xOffsetToCenter, logo.cy() + yOffsetToCenter)
    title.center(title.cx() + xOffsetToCenter, title.cy() + yOffsetToCenter)
    slogan.center(slogan.cx() + xOffsetToCenter, slogan.cy() + yOffsetToCenter)
}

export function alignShapesWithOption<S extends BaseShapheBuilder>(
    option: LogoAlignOptions,
    shapes: S
): BaseAlignerOutput {
    switch (option) {
        case "align-top":
            return alignLogoTop(shapes)
        case "align-left":
            return alignLogoLeft(shapes)
        case "align-right":
            return alignLogoRight(shapes)
        default:
            console.warn("Invalid Type. The logo will be aligned top as a fallback option!")
            return alignLogoTop(shapes)
    }
}
