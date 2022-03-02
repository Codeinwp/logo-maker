import { Store } from "pullstate"
import opentype from "opentype.js"

export type FontRenderers = Record<string, opentype.Font>

export type AssetsStoreProps = {
    fonts: {
        fontsStatus: "active" | "loading" | "inactive"
        activeFonts: string[]
        fontRenderers: FontRenderers
    }
}

export const AssetsStore = new Store<AssetsStoreProps>({
    fonts: {
        fontsStatus: "inactive",
        activeFonts: [],
        fontRenderers: {},
    },
})
