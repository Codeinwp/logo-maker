import { Svg, Text } from "@svgdotjs/svg.js"
import { ContainerData } from "./alignFunctions"

export type Elements = {
    logo: Svg
    title: Text
    slogan: Text
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

	// Apply the relocation
	logo.center( logo.cx() + xOffsetToCenter, logo.cy() + yOffsetToCenter )
	title.center( title.cx() + xOffsetToCenter, title.cy() + yOffsetToCenter )
	slogan.center( slogan.cx() + xOffsetToCenter, slogan.cy() + yOffsetToCenter )


    return container.containerElems
}

