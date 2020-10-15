import { SVG, Svg, Text } from "@svgdotjs/svg.js"

export type Elements = {
    logo: Svg
    title: Text
    slogan: Text
}

export type ContainerData = {
    containerPos: {
        x: number
        y: number
        cx: number
        cy: number
        width: number
        height: number
    }
    containerElems: Elements
}

export type AlignProps = {
    logoDim: {
        width: number
        height: number
    }
    logoSVGPath: string
    titleFontSize: number
    sloganFontSize: number
}

export const alignLogoTop = (props: AlignProps, draw: Svg) : ContainerData => {
    const { logoDim, logoSVGPath, titleFontSize, sloganFontSize } = props
    
    /*
          Add the logo's SVG
    */

    const logo = SVG().addTo(draw).svg(logoSVGPath)
    const svgRawDim = logo.bbox() // get the natural dimension to calculate the viewbox

    logo.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logoDim.width, logoDim.height)

    /*
           Add the title's SVG
       */
    const title = draw
        .text("Optimole")
        .font({ fill: "#f06", family: "Inconsolata", size: titleFontSize })
        .move(0, 0)
    const titleDim = title.rbox(draw)

    /*
           Add the slogan's SVG
       */
    const slogan = draw
        .text("The Best Image Optimizer")
        .font({ fill: "#f06", family: "Inconsolata", size: sloganFontSize })
        .move(0, 0)
    const sloganDim = slogan.rbox(draw)

    /*
           Align the elements
       */

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = Math.max(logoDim.width, titleDim.width, sloganDim.width)
    const heightContainer = logoDim.height + titleDim.height + sloganDim.height
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    logo.move(cx - logoDim.width / 2, 0)
    title.move(cx - titleDim.width / 2, logoDim.height)
    slogan.move(cx - sloganDim.width / 2, logoDim.height + titleDim.height)

    return {
        containerPos: {
            x: 0,
            y: 0,
            cx,
            cy,
            width: widthContainer,
            height: heightContainer,
        },
        containerElems: {
            logo,
            title,
            slogan,
        },
    }
}

export const alignLogoLeft = (props: AlignProps, draw: Svg) : ContainerData => {
    const { logoDim, logoSVGPath, titleFontSize, sloganFontSize } = props
    
    /*
          Add the logo's SVG
    */

    const logo = SVG().addTo(draw).svg(logoSVGPath)
    const svgRawDim = logo.bbox() // get the natural dimension to calculate the viewbox

    logo.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logoDim.width, logoDim.height)

    /*
           Add the title's SVG
       */
    const title = draw
        .text("Optimole")
        .font({ fill: "#f06", family: "Inconsolata", size: titleFontSize })
        .move(0, 0)
    const titleDim = title.rbox(draw)

    /*
           Add the slogan's SVG
       */
    const slogan = draw
        .text("The Best Image Optimizer")
        .font({ fill: "#f06", family: "Inconsolata", size: sloganFontSize })
        .move(0, 0)
    const sloganDim = slogan.rbox(draw)

    /*
           Align the elements
       */

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = logoDim.width + Math.max( titleDim.width, sloganDim.width)
    const heightContainer = logoDim.height + titleDim.height + sloganDim.height
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    const textContainerWidth = Math.max(titleDim.width, sloganDim.width)
    const textContainerHeight = titleDim.height + sloganDim.height
    const ctx = textContainerWidth / 2
    const cty = textContainerHeight / 2

    logo.move(0, cy - logoDim.height / 2)
    title.move(logoDim.width + ctx - titleDim.width / 2, cy - (cty - titleDim.height / 2) - titleDim.height / 2)
    slogan.move(logoDim.width + ctx - sloganDim.width / 2, cy - (cty - titleDim.height / 2) - sloganDim.height / 2 + titleDim.height)

    return {
        containerPos: {
            x: 0,
            y: 0,
            cx,
            cy,
            width: widthContainer,
            height: heightContainer,
        },
        containerElems: {
            logo,
            title,
            slogan,
        },
    }
}

export const alignLogoRight = (props: AlignProps, draw: Svg) : ContainerData => {
    const { logoDim, logoSVGPath, titleFontSize, sloganFontSize } = props
    
    /*
          Add the logo's SVG
    */

    const logo = SVG().addTo(draw).svg(logoSVGPath)
    const svgRawDim = logo.bbox() // get the natural dimension to calculate the viewbox

    logo.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logoDim.width, logoDim.height)

    /*
           Add the title's SVG
       */
    const title = draw
        .text("Optimole")
        .font({ fill: "#f06", family: "Inconsolata", size: titleFontSize })
        .move(0, 0)
    const titleDim = title.rbox(draw)

    /*
           Add the slogan's SVG
       */
    const slogan = draw
        .text("The Best Image Optimizer")
        .font({ fill: "#f06", family: "Inconsolata", size: sloganFontSize })
        .move(0, 0)
    const sloganDim = slogan.rbox(draw)

    /*
           Align the elements
       */

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = logoDim.width + Math.max( titleDim.width, sloganDim.width)
    const heightContainer = logoDim.height + titleDim.height + sloganDim.height
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    const textContainerWidth = Math.max(titleDim.width, sloganDim.width)
    const textContainerHeight = titleDim.height + sloganDim.height
    const ctx = textContainerWidth / 2
    const cty = textContainerHeight / 2

    logo.move(textContainerWidth, cy - logoDim.height / 2)
    title.move(ctx - titleDim.width / 2, cy - (cty - titleDim.height / 2) - titleDim.height / 2)
    slogan.move(ctx - sloganDim.width / 2, cy - (cty - titleDim.height / 2) - sloganDim.height / 2 + titleDim.height)

    return {
        containerPos: {
            x: 0,
            y: 0,
            cx,
            cy,
            width: widthContainer,
            height: heightContainer,
        },
        containerElems: {
            logo,
            title,
            slogan,
        },
    }
}

export const moveToCenter = (
    imageSize: {
        width: number
        height: number
    },
    container: ContainerData
) : Elements => {
	// Compute the center
	const { logo, title, slogan } = container.containerElems

    const xOffsetToCenter = imageSize.width / 2 - container.containerPos.cx
	const yOffsetToCenter = imageSize.height / 2 - container.containerPos.cy

	// Apply the trasnlation
	logo.center( logo.cx() + xOffsetToCenter, logo.cy() + yOffsetToCenter )
	title.center( title.cx() + xOffsetToCenter, title.cy() + yOffsetToCenter )
	slogan.center( slogan.cx() + xOffsetToCenter, slogan.cy() + yOffsetToCenter )


    return container.containerElems
}

