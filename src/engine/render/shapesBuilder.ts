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
import { isFontFromGoogle } from "../../assets/fonts/google-fonts"
import { FontRenderers } from "../../stores/AssetsStore"
import { LogoProps } from "./alignFunctions"
import { buildTextToSVG } from "./textToSVG"

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
export function buildDefaultShapes(parent: Svg, componentsProps: LogoProps, fontRenderers?: FontRenderers): BaseShapheBuilder {
    const { logo: pLogo, title: pTitle, slogan: pSlogan } = componentsProps

    // Create SVGs
    const logo = SVG().addTo(parent).svg(pLogo.src.svg)
    const title = isFontFromGoogle(pTitle.style.fontFamily) && fontRenderers ? buildTextToSVG(parent, pTitle, fontRenderers) || parent.text(pTitle.text)  : parent.text(pTitle.text)
    const slogan = isFontFromGoogle(pSlogan.style.fontFamily) && fontRenderers ? buildTextToSVG(parent, pSlogan, fontRenderers) || parent.text(pSlogan.text)  : parent.text(pSlogan.text)

    console.log(isFontFromGoogle(pSlogan.style.fontFamily))
    // Apply other properties
    logo.viewbox(0, 0, logo.bbox().width, logo.bbox().height + 5)
        .size(pLogo.width, pLogo.height)
        .css("fill", pLogo.style.fill);

    if( (title as Text).font !== undefined ) {
        (title as Text)
            ?.font({
                fill: pTitle.style.color,
                family: pTitle.style.fontFamily,
                size: pTitle.style.fontSize + "px",
            });
            // ?.leading(0);
        (title as Text)?.move(0, 0);
    }
   
    if( (slogan as Text).font !== undefined ) {
        (slogan as Text)
        ?.font({
            fill: pSlogan.style.color,
            family: pSlogan.style.fontFamily,
            size: pSlogan.style.fontSize + "px",

        });
        // ?.leading(0);
        (slogan as Text).move(0, 0);
    }

   

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
