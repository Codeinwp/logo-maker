import { BaseShapheBuilder } from "./shapesBuilder"
import { settings } from "./settings"

interface BaseShapeDimensions {
    logoDim: {
        height: number
        width: number
    }
    titleDim: {
        height: number
        width: number
    }
    sloganDim: {
        height: number
        width: number
    }
}

function calculateDimesionsForBaseShape(shapes: BaseShapheBuilder): BaseShapeDimensions {
    const { logo, title, slogan } = shapes

    // Calculate the dimensions for the shapes, including the settings 
    const logoDim = {
        height: settings.logo.margins.top + logo.bbox().height + settings.logo.margins.bottom,
        width: settings.logo.margins.left + logo.bbox().width + settings.logo.margins.bottom,
    }

    let titleDim
    if (title.length() > 0) {
        titleDim = {
            height:
                settings.title.margins.top + title.bbox().height + settings.title.margins.bottom,
            width:
                settings.title.margins.left + title.bbox().width + settings.title.margins.bottom,
        }
    } else {
        titleDim = {
            width: 0,
            height: 0,
        }
    }

    let sloganDim
    if (slogan.length() > 0) {
        sloganDim = {
            height:
                settings.slogan.margins.top + slogan.bbox().height + settings.slogan.margins.bottom,
            width:
                settings.slogan.margins.left + slogan.bbox().width + settings.slogan.margins.bottom,
        }
    } else {
        sloganDim = {
            width: 0,
            height: 0,
        }
    }

    return {
        logoDim,
        titleDim,
        sloganDim
    }
}

export function alignLogoTop<S extends BaseShapheBuilder>(shapes: S) {
    const { logo, title, slogan } = shapes
    const { logoDim, titleDim, sloganDim } = calculateDimesionsForBaseShape(shapes)

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = Math.max(logoDim.width, titleDim.width, sloganDim.width)
    const heightContainer = logoDim.height + titleDim.height + sloganDim.height // logo.height + titleDim.height + sloganDim.height
    const cx = widthContainer / 2
    // const cy = heightContainer / 2

    logo.move(cx - logoDim.width / 2, 0)
    title.move(cx - titleDim.width / 2, logoDim.height)
    slogan.move(cx - sloganDim.width / 2, logoDim.height + titleDim.height)
}

export function alignLogoLeft<S extends BaseShapheBuilder>(shapes: S) {
    const { logo, title, slogan } = shapes
    const { logoDim, titleDim, sloganDim } = calculateDimesionsForBaseShape(shapes)

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = logoDim.width + Math.max(titleDim.width, sloganDim.width)
    const heightContainer = Math.max(logoDim.height, titleDim.height + sloganDim.height)
    // const cx = widthContainer / 2
    const cy = heightContainer / 2

    // Calculate the dimension for the box that contains the title and the slogan
    const textContainerWidth =
        Math.max(titleDim.width, sloganDim.width) +
        settings.textContainer.margins.left +
        settings.textContainer.margins.right
    // const textContainerHeight =
    //     titleDim.height +
    //     sloganDim.height +
    //     settings.textContainer.margins.top +
    //     settings.textContainer.margins.bottom
    const ctx = textContainerWidth / 2
    // const cty = textContainerHeight / 2

    // Move elements to their position
    logo.move(0, cy - logoDim.height / 2)
    title.move(logoDim.width + ctx - titleDim.width / 2, cy - titleDim.height / 2)

    slogan.move(
        logoDim.width + ctx - sloganDim.width / 2,
        cy + titleDim.height / 2 // + sloganDim.height / 2
    )
}

export function alignLogoRight<S extends BaseShapheBuilder>(shapes: S) {
    const { logo, title, slogan } = shapes
    const { logoDim, titleDim, sloganDim } = calculateDimesionsForBaseShape(shapes)

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = logoDim.width + Math.max(titleDim.width, sloganDim.width)
    const heightContainer = Math.max(logoDim.height, titleDim.height + sloganDim.height)
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    const textContainerWidth =
        Math.max(titleDim.width, sloganDim.width) +
        settings.textContainer.margins.left +
        settings.textContainer.margins.right
    // const textContainerHeight =
    //     titleDim.height +
    //     sloganDim.height +
    //     settings.textContainer.margins.top +
    //     settings.textContainer.margins.bottom
    const ctx = textContainerWidth / 2
    // const cty = textContainerHeight / 2

    logo.move(textContainerWidth, cy - logoDim.height / 2)
    title.move(ctx - titleDim.width / 2, cy - titleDim.height / 2)
    slogan.move(ctx - sloganDim.width / 2, cy + titleDim.height / 2) // + sloganDim.height / 2)
}