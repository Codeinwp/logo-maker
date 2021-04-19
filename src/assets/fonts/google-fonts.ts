import fonts from "./fonts.json"
// const fonts = [
//     "Helvetica",
//     "Open Sans",
//     "Bangers",
//     "Roboto",
//     "Dancing Script",
//     "Henny Penny",
//     "Amatic SC",
//     "Alfa Slab One",
//     "Oswald",
//     "Anton",
//     "Permanent Marker",
//     "Cinzel Decorative",
//     "Lato",
//     "Karla",
//     "Montserrat",
//     "Libre Baskerville",
//     "Bebas Neue",
//     "IBM Plex Serif",
//     "Fira Sans",
//     "Caveat",
//     "Tinos",
//     "Play",
//     "Crete Round",
//     "Rajdhani",
//     "Satisfy",
//     "Arial",
//     "Georgia",
//     "Lobster Two",
//     "Orbitron",
//     "Parisienne",
//     "Playball",
//     "Noto Serif",
//     "Noto Sans",
//     "Lora",
//     "Source Serif Pro",
//     "Ubuntu",
//     "Lemonada",
//     "UnifrakturMaguntia",
//     "Oleo Script Swash Caps",
//     "Creepster"
// ]

type WebpackFont = {
    family: string
    variants?: string[]
    subsets?: string[]
    formats?: string[]
    display?: string
}

export const webpackFonts: WebpackFont[] = [
    {
        family: "Open Sans",
    },
    {
        family: "Roboto",
    },
    {
        family: "Dancing Script",
    },
    {
        family: "Oswald",
    },
    {
        family: "Montserrat",
    },
    {
        family: "Permanent Marker",
    },
]

export const googleFontsPresets = [
    {
        title: "Open Sans",
        slogan: "Roboto",
    },
    {
        title: "Alfa Slab One",
        slogan: "Roboto",
    },
    {
        title: "Dancing Script",
        slogan: "Roboto",
    },
    {
        title: "Henny Penny",
        slogan: "Open Sans",
    },
    {
        title: "Pacifico",
        slogan: "Open Sans",
    },
    {
        title: "Amatic SC",
        slogan: "Open Sans",
    },
    {
        title: "Oswald",
        slogan: "Open Sans",
    },
    {
        title: "Anton",
        slogan: "Roboto",
    },
    {
        title: "Permanent Marker",
        slogan: "Roboto",
    },
    {
        title: "Cinzel Decorative",
        slogan: "Lato",
    },
    {
        title: "Karla",
        slogan: "Montserrat",
    },
    {
        title: "Libre Baskerville",
        slogan: "Open Sans",
    },
    {
        title: "Lobster Two",
        slogan: "Open Sans",
    },
    {
        title: "Orbitron",
        slogan: "Open Sans",
    },
    {
        title: "Parisienne",
        slogan: "Open Sans",
    },
]

fonts.sort()

export const isFontFromGoogle = (font: string): boolean => {
    return fonts.includes(font)
}

export default fonts
