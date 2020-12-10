import { Font } from "./index"

export const monospaceFonts: string[] = ["Courier New"]

export default monospaceFonts.sort().map<Font>((f) => {
    return { family: f, fallback: "monospace" }
})
