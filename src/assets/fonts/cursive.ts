import { Font } from "./index"

export const cursiveFonts: string[] = ["Brush Script MT"]

export default cursiveFonts.sort().map<Font>((f) => {
    return { family: f, fallback: "cursive" }
})
