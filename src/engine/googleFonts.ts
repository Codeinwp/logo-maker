// used for importing the fonts with a HTML link
export function generateUrlForFonts(fonts: string[]): string {
    fonts.sort()
    const formatFont = fonts.map((f) => `family=${f.split(" ").join("+")}`)
    return `https://fonts.googleapis.com/css2?${formatFont.join("&")}&display=swap`
}

// used for generating a link for embedding CSS fonts in the SVG
export function generateUrlForFont(font: string): string {
    const formatFont = `family=${font.split(" ").join("+")}`
    return `https://fonts.googleapis.com/css2?${formatFont}`
}
