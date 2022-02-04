/**
 * This file should contains only the function that create/build the shapes and their helpers.
 *
 * There two kins of shapes: essential and extra.
 *
 * The essential shapes form the base - which is a foundation of the final logo, so almost every generated logo will contains the shapes from the base
 * The extras form the extended - those shapes appaer only in some pattters
 *
 */

import { SVG, Svg, Text } from "@svgdotjs/svg.js"
import { FontRenderers } from "../../stores/AssetsStore"
import { TLogo, TLogoContainer, TSlogan, TTitle } from "../../stores/UIStore"
import { buildText } from "./textBuilder"

export type LogoProps = {
    container: TLogoContainer
    logo: TLogo
    title: TTitle
    slogan: TSlogan
}

/**
 * Base interface for creating/building shapes
 *
 * Extend this inferface when adding essential shapes. Essential shapes are the shapes that appears on every logo.
 * If you want to make a customizer for the logo to add shapes like stars, circles, and they appaers only on some patters;
 * use `extendBaseShapes` function to add an extra property where you can store them, like 'extras'.
 */
export interface BaseShapheBuilder {
    /**
     * The logo SVG object
     */
    logo: Svg

    /**
     * The title Text-SVG object
     */
    title: Text | Svg

    /**
     * The slogan Text-SVG object
     */
    slogan: Text | Svg
}

/**
 * Additional shapes used in the exteneded version of the base
 */
export type ExtraShape = {
    /** It is used for identification */
    kind: string
    /** The svg that is going to be added to the final logo */
    svg: Svg
}

/**
 * The interface for the extend version of a base where you can store additional shapes that are used in some patters
 */
export interface ExtendedShapeBuilder extends BaseShapheBuilder {
    extras: ExtraShape[]
}

/**
 * Create/Build the default shapes (logo, title, slogan) using the data/properties provided by the user interface
 *
 * @param parent The svg that will serve as a parent for the shapes
 * @param componentsProps The propierties provided by the store of the user interface
 */
export function buildDefaultShapes(
    parent: Svg,
    componentsProps: LogoProps,
    fontRenderers?: FontRenderers
): BaseShapheBuilder {
    const { logo: pLogo, title: pTitle, slogan: pSlogan } = componentsProps

    // Create SVGs
    const logo = SVG().addTo(parent).svg(pLogo.src.svg)
    const title = buildText(parent, pTitle, "auto", fontRenderers)
    const slogan = buildText(parent, pSlogan, "auto", fontRenderers)

    // Apply other properties
    logo.viewbox(0, 0, logo.bbox().width, logo.bbox().height + 5)
        .size(pLogo.width * pLogo.scale, pLogo.height * pLogo.scale)
        .attr("fill", pLogo.style.fill)
    title.move(0, 0)
    slogan.move(0, 0)

    // Move to an arbitrary position (Optional)

    return {
        logo,
        title,
        slogan,
    }
}
/**
 * Use this function to extend a base for adding additional Svgs on the logo.
 *
 * @param base An object that containts the esentials Svgs, like: logo, title, slogan. Also suport derivate from it.
 */
export function extendBaseShapes<S extends BaseShapheBuilder>(base: S): ExtendedShapeBuilder {
    return {
        ...base,
        extras: [],
    }
}
