import { Logo1, LogoSVGImport } from "../assets/logos"

import { Store } from "pullstate"
import { LogoAlignOptions } from "../components/ui/SelectLayout"

export type TLogoContainer = {
    width: number
    height: number
    align: LogoAlignOptions
    viewbox: {
        x: number
        y: number
        width: number
        height: number
    }
    style: {
        color: string
    }
}

export type TLogo = {
    src: LogoSVGImport
    width: number
    height: number
    style: {
        fill: string
    }
}

export type TTitle = {
    text: string
    style: {
        color: string
        fontSize: number
        fontFamily: string
    }
}

export type TSlogan = {
    text: string
    style: {
        color: string
        fontSize: number
        fontFamily: string
    }
}

export type StoreProps = {
    container: TLogoContainer
    logo: TLogo
    title: TTitle
    slogan: TSlogan
}

export const UIStore = new Store<StoreProps>({
    container: {
        width: 300,
        height: 250,
        align: "align-top",
        viewbox: {
            x: 0,
            y: 0,
            width: 300,
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
    },

    title: {
        text: "Optimole",
        style: {
            color: "#FFFFFF",
            fontSize: 40,
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
})

export default UIStore
