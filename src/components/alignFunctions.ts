import { SVG, Svg } from "@svgdotjs/svg.js"
import { TLogo, TLogoContainer, TSlogan, TTitle } from "~/stores/LogoModel"
import { Elements } from "./utility"

const autoScallingOffsetMargin = 100

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

export type LogoProps = {
    container: TLogoContainer
    logo: TLogo
    title: TTitle
    slogan: TSlogan
}

export const alignLogoTop = (props: LogoProps, draw: Svg) : ContainerData => {
    const { logo, title, slogan } = props
    
    /*
          Add the logo's SVG
    */

    const logoSVG = SVG().addTo(draw).svg(logo.src.svg)
    const svgRawDim = logoSVG.bbox() // get the natural dimension to calculate the viewbox

    logoSVG.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logo.width, logo.height).css('fill', logo.style.fill)

    /*
           Add the title's SVG
       */
    const titleSVG = draw
        .text(title.text)
        .font({ fill: title.style.color, family: title.style.fontFamily, size: title.style.fontSize })
        .move(0, 0)
    const titleDim = titleSVG.rbox(draw)

    /*
           Add the slogan's SVG
       */
    const sloganSVG = draw
        .text(slogan.text)
        .font({ fill: slogan.style.color, family: slogan.style.fontFamily, size: slogan.style.fontSize })
        .move(0, 0)
    const sloganDim = sloganSVG.rbox(draw)

    /*
           Align the elements
       */

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = Math.max(logo.width, titleDim.width, sloganDim.width)
    const heightContainer = logo.height + titleDim.height + sloganDim.height
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    logoSVG.move(cx - logo.width / 2, 0)
    titleSVG.move(cx - titleDim.width / 2, logo.height)
    sloganSVG.move(cx - sloganDim.width / 2, logo.height + titleDim.height)

    const currentViewBox = draw.viewbox()
    
    // AUTOSCAllING
    // check if the current element occupy more than the initial size of the viewbox 
    draw.viewbox(0, 0, currentViewBox.width < widthContainer ? widthContainer + autoScallingOffsetMargin : currentViewBox.width, currentViewBox.height < heightContainer ? heightContainer + autoScallingOffsetMargin : currentViewBox.height)


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
            logoSVG,
            titleSVG,
            sloganSVG,
        },
    }
}

export const alignLogoLeft = (props: LogoProps, draw: Svg) : ContainerData => {
    const { logo, title, slogan } = props
    
     /*
          Add the logo's SVG
    */

   const logoSVG = SVG().addTo(draw).svg(logo.src.svg)
   const svgRawDim = logoSVG.bbox() // get the natural dimension to calculate the viewbox

   logoSVG.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logo.width, logo.height).css('fill', logo.style.fill)

   /*
          Add the title's SVG
      */
   const titleSVG = draw
       .text(title.text)
       .font({ fill: title.style.color, family: title.style.fontFamily, size: title.style.fontSize })
       .move(0, 0)
   const titleDim = titleSVG.rbox(draw)

   /*
          Add the slogan's SVG
      */
   const sloganSVG = draw
       .text(slogan.text)
       .font({ fill: slogan.style.color, family: slogan.style.fontFamily, size: slogan.style.fontSize })
       .move(0, 0)
   const sloganDim = sloganSVG.rbox(draw)

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = logo.width + Math.max( titleDim.width, sloganDim.width)
    const heightContainer = Math.max(logo.height, titleDim.height + sloganDim.height)
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    const textContainerWidth = Math.max(titleDim.width, sloganDim.width)
    const textContainerHeight = titleDim.height + sloganDim.height
    const ctx = textContainerWidth / 2
    const cty = textContainerHeight / 2

    logoSVG.move(0, cy - logo.height / 2)
    titleSVG.move(logo.width + ctx - titleDim.width / 2, cy - (cty - titleDim.height / 2) - titleDim.height / 2)
    sloganSVG.move(logo.width + ctx - sloganDim.width / 2, cy + (cty - sloganDim.height / 2) - sloganDim.height / 2 )

    const currentViewBox = draw.viewbox()
    
    // AUTOSCAllING
    // check if the current element occupy more than the initial size of the viewbox 
    draw.viewbox(0, 0, currentViewBox.width < widthContainer ? widthContainer + autoScallingOffsetMargin : currentViewBox.width, currentViewBox.height < heightContainer ? heightContainer + autoScallingOffsetMargin : currentViewBox.height)

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
            logoSVG,
            titleSVG,
            sloganSVG,
        },
    }
}

export const alignLogoRight = (props: LogoProps, draw: Svg) : ContainerData => {
    const { logo, title, slogan } = props
    
     /*
          Add the logo's SVG
    */

   const logoSVG = SVG().addTo(draw).svg(logo.src.svg)
   const svgRawDim = logoSVG.bbox() // get the natural dimension to calculate the viewbox

   logoSVG.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logo.width, logo.height).css('fill', logo.style.fill)

   /*
          Add the title's SVG
      */
   const titleSVG = draw
       .text(title.text)
       .font({ fill: title.style.color, family: title.style.fontFamily, size: title.style.fontSize })
       .move(0, 0)
   const titleDim = titleSVG.rbox(draw)

   /*
          Add the slogan's SVG
      */
   const sloganSVG = draw
       .text(slogan.text)
       .font({ fill: slogan.style.color, family: slogan.style.fontFamily, size: slogan.style.fontSize })
       .move(0, 0)
   const sloganDim = sloganSVG.rbox(draw)

    // the elements are vertically stacked,
    // so the width of the container is equal with the width of the largest element
    // and the height is the sum of all the element's height
    const widthContainer = logo.width + Math.max( titleDim.width, sloganDim.width)
    const heightContainer = Math.max(logo.height, titleDim.height + sloganDim.height)
    const cx = widthContainer / 2
    const cy = heightContainer / 2

    const textContainerWidth = Math.max(titleDim.width, sloganDim.width)
    const textContainerHeight = titleDim.height + sloganDim.height
    const ctx = textContainerWidth / 2
    const cty = textContainerHeight / 2

    logoSVG.move(textContainerWidth, cy - logo.height / 2)
    titleSVG.move(ctx - titleDim.width / 2, cy - (cty - titleDim.height / 2) - titleDim.height / 2)
    sloganSVG.move(ctx - sloganDim.width / 2, cy + (cty - sloganDim.height / 2) - sloganDim.height / 2)

    const currentViewBox = draw.viewbox()
    
    // AUTOSCAllING
    // check if the current element occupy more than the initial size of the viewbox 
    draw.viewbox(0, 0, currentViewBox.width < widthContainer ? widthContainer + autoScallingOffsetMargin : currentViewBox.width, currentViewBox.height < heightContainer ? heightContainer + autoScallingOffsetMargin : currentViewBox.height)

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
            logoSVG,
            titleSVG,
            sloganSVG,
        },
    }
}