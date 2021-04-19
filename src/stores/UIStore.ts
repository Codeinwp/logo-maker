import { LogoSVGImport } from "../assets/logos/index"
import { Logo1 } from "../assets/logos/set1/index"

import { Store } from "pullstate"
import { LogoAlignOptions } from "../components/ui/SelectLayout"

/** The container props */
export type TLogoContainer = {
    /** The width of the container */
    width: number
    /** The height of the container */
    height: number
    /** The align option for generating the pattern */
    align: LogoAlignOptions
    /** The viewbox of the container. Used for scalling the image */
    viewbox: {
        x: number
        y: number
        width: number
        height: number
    }
    /** The CSS style */
    style: {
        color: string
    }
}

/** The log props */
export type TLogo = {
    /** The logo's Svg source */
    src: LogoSVGImport
    /** The width of the container */
    width: number
    /** The height of the container */
    height: number
    /** The CSS style */
    style: {
        fill: string
    }
    /** Scale */
    scale: number
}

/** The title props */
export type TTitle = {
    /** The name of the title */
    text: string
    /** The CSS style */
    style: {
        color: string
        fontSize: number
        fontFamily: string
    }
}

/** The slogan props */
export type TSlogan = {
    /** The name of  the slogan */
    text: string
    /** The CSS style */
    style: {
        color: string
        fontSize: number
        fontFamily: string
    }
}

/** The store props */
export type StoreProps = {
    container: TLogoContainer
    logo: TLogo
    title: TTitle
    slogan: TSlogan
}

/**
 * The store used for the user interface.
 *
 * It checks the session storage for preserving the options during the page refresh
 */
export const UIStore = new Store<StoreProps>(
    JSON.parse(sessionStorage.getItem("logo-maker-themeisle") || "null") || {
        container: {
            width: 765,
            height: 625,
            align: "align-top",
            viewbox: {
                x: 0,
                y: 0,
                width: 250,
                height: 250,
            },
            style: {
                color: "#ABABCB",
            },
        },

        logo: {
            src: Logo1,
            width: 100,
            height: 100,
            style: {
                fill: "#FFFFFF",
            },
            scale: 1,
        },

        title: {
            text: "Optimole",
            style: {
                color: "#FFFFFF",
                fontSize: 53,
                fontFamily: "Helvetica",
            },
        },

        slogan: {
            text: "An elegant choice",
            style: {
                color: "#FFFFFF",
                fontSize: 24,
                fontFamily: "Helvetica",
            },
        },
    }
)

export default UIStore
