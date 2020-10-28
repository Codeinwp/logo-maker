import { Svg, Text } from "@svgdotjs/svg.js"
import { ContainerData } from "./alignFunctions"

export type Elements = {
    logoSVG: Svg
    titleSVG: Text
    sloganSVG: Text
}



export const moveToCenter = (
    draw: Svg,
    viewbox: {
        width: number
        height: number
    },
    container: ContainerData
) : Elements => {
	// Compute the center
    const { logoSVG, titleSVG, sloganSVG } = container.containerElems
    
    // check if the svg has scaled
    const currentViewBox = draw.viewbox()
    if (currentViewBox.width > viewbox.width) {
        viewbox.width = currentViewBox.width 
    }

    if (currentViewBox.height > viewbox.height) {
        viewbox.height = currentViewBox.height
    }

    const xOffsetToCenter = viewbox.width / 2 - container.containerPos.cx
	const yOffsetToCenter = viewbox.height / 2 - container.containerPos.cy

	// Apply the relocation
	logoSVG.center( logoSVG.cx() + xOffsetToCenter, logoSVG.cy() + yOffsetToCenter )
	titleSVG.center( titleSVG.cx() + xOffsetToCenter, titleSVG.cy() + yOffsetToCenter )
	sloganSVG.center( sloganSVG.cx() + xOffsetToCenter, sloganSVG.cy() + yOffsetToCenter )


    return container.containerElems
}

