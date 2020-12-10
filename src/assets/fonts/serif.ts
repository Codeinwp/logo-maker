import { Font } from "./index"

export const serifFonts: string[] = [
    // "Antic Slab",
    // "Bitter",
    // "Castro",
    // "Crimson Text",
    "Georgia",
    "Times New Roman",
    "Garamond",
    // "Lora",
    // "Marriweather",
    // "Noto Serif",
    // "PT Serif",
    // "Roboto Slab",
    // "Zilla Slab",
]

export default serifFonts.sort().map<Font>((f) => {
    return { family: f, fallback: "serif" }
})
