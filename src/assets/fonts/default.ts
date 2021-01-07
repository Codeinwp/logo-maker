import { Font } from "./index"

export const defaultFonts: string[] = [
    // "Lato",
    // "Noto Sans JP",
    // "Noto Sans",
    // "Open Sans",
    // "PT Sans",
    // "Raleway",
    // "Robota",
    // "Ubuntu",
]

export default defaultFonts.sort().map<Font>((f) => {
    return { family: f, fallback: "sans-serif" }
})
