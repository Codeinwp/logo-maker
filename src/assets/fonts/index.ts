import serif, { serifFonts } from "./serif"
import sans, { sansFonts } from "./sans"
import { monospaceFonts } from "./monospaced"
import { cursiveFonts } from "./cursive"

export type Font = {
    family: string
    fallback: string
}

export const fontsList = [...serifFonts, ...sansFonts, ...monospaceFonts, ...cursiveFonts].sort()

const fonts = [...serif, ...sans].sort((a: Font, b: Font) => {
    if (a.family < b.family) {
        return -1
    }
    if (a.family > b.family) {
        return 1
    }

    return 0
})

export const fontsForSvg = fonts.map<string>((f) => `'${f.family}', '${f.fallback}'`)

// export const presets = [
// 	{
// 		title: "Roboto",
// 		slogan: "Open Sans"
// 	},
// 	{
// 		title: "Open Sans",
// 		slogan: "Roboto"
// 	},
// 	{
// 		title: "Zilla Slab",
// 		slogan: "Open Sans"
// 	},
// 	{
// 		title: "Roboto Slab",
// 		slogan: "Roboto"
// 	},
// 	{
// 		title: "Roboto Slab",
// 		slogan: "Lato"
// 	},
// 	{
// 		title: "Bitter",
// 		slogan: "Lato"
// 	},
// 	{
// 		title: "Zilla Slab",
// 		slogan: "Roboto"
// 	},
// 	{
// 		title: "Roboto",
// 		slogan: "Noto Sans JP"
// 	},
// ]

export const presets = [
    {
        title: "Times New Roman",
        slogan: "Helvetica",
    },
    {
        title: "Helvetica",
        slogan: "Times New Roman",
    },
    {
        title: "Georgia",
        slogan: "sans-serif",
    },
    {
        title: "Impact",
        slogan: "Verdana",
    },
    {
        title: "Verdana",
        slogan: "Arial",
    },
    {
        title: "Courier New",
        slogan: "Arial",
    },
    {
        title: "Verdana",
        slogan: "sans-serif",
    },
    {
        title: "Tohoma",
        slogan: "Verdana",
    },
    {
        title: "Garamond",
        slogan: "Verdana",
    },
    {
        title: "Courier New",
        slogan: "Georgia",
    },
    {
        title: "Arial",
        slogan: "Georgia",
    },
]

export default fonts
