import { Svg } from "@svgdotjs/svg.js"
import opentype from "opentype.js"
import { AssetsStore, FontRenderers } from "../stores/AssetsStore"
import googleFontList from "./../assets/fonts/fonts.json"

export type Elements = {
    logoSVG: Svg
    titleSVG: Text & Svg
    sloganSVG: Text & Svg
}

/**
 * Build the url for downlading the source file of a given font
 * @param font Fonst name
 * @returns Return the url from which the font source file can be downloaded
 */
export function buildFontSourceFileURL(font: string): string | null {
    if (window.logomaker.pluginURL) {
        const fileName = font.split(" ").join("") + "-Regular.ttf"
        return window.logomaker.pluginURL + "fonts/" + fileName
    }

    return null
}

type Optional<T> =
    | {
          ok: T
          error?: never
      }
    | {
          ok?: never
          error: string
      }
/**
 * Download the source file of the font as binary data
 * @param url The location of the font source file
 * @returns An optional result which can be the binary data (ok) OR an error (error)
 */
async function makeFontRequest(url: string): Promise<Optional<ArrayBuffer>> {
    const resp = await fetch(url)

    if (resp.ok) {
        return {
            ok: await resp.arrayBuffer(),
        }
    }

    return {
        error: "Font could not be loaded: " + resp.statusText,
    }
}

/**
 * Download all the font from the config file and then upload them to the page and parser
 */
export function getFontsFromServer(): void {
    const fontPaths = googleFontList.map((fontName) => {
        return {
            font: fontName,
            path: buildFontSourceFileURL(fontName),
        }
    })

    const fontRequets = fontPaths
        .filter((fontPath) => fontPath.path)
        .map(async (font) => {
            const result = await makeFontRequest(font.path || "")
            if (result.ok) {
                const renderer = opentype.parse(result.ok)

                // Also add the font to the page
                const externalFont = new FontFace(font.font, result.ok)
                await externalFont.load()
                document.fonts.add(externalFont)

                return {
                    font: font.font,
                    renderer: renderer,
                }
            } else {
                console.log(result.error)
            }
        })

    Promise.all(fontRequets).then((fontRenderers) => {
        AssetsStore.update((s) => {
            s.fonts.fontRenderers = fontRenderers.reduce((fontRenderers: FontRenderers, font): FontRenderers => {
                if (font) {
                    fontRenderers[font.font] = font.renderer
                }
                return fontRenderers
            }, {})
            s.fonts.activeFonts = fontRenderers.filter((font) => font !== undefined).map((font) => font?.font || "")
        })
    })
}

// export const addEmbeddedFont = (draw: Svg, font: string): void => {
//     draw.font(font,`url("${generateUrlForFonts([font])}")`)
// }

// LEGACY

// import { Svg, Text } from "@svgdotjs/svg.js"
// import { ContainerData } from "./render/alignFunctions"

// export type Elements = {
//     logoSVG: Svg
//     titleSVG: Text
//     sloganSVG: Text
// }

// export const moveToCenter = (
//     draw: Svg,
//     viewbox: {
//         width: number
//         height: number
//     },
//     container: ContainerData
// ): Elements => {
//     // Compute the center
//     const { logoSVG, titleSVG, sloganSVG } = container.containerElems

//     // check if the svg has scaled
//     const currentViewBox = draw.viewbox()

//     const viewboxWidth = currentViewBox.width // Math.max(viewbox.width, currentViewBox.width)
//     const viewboxHeight = currentViewBox.height // Math.max(viewbox.height, currentViewBox.height)

//     const xOffsetToCenter = viewboxWidth / 2 - container.containerPos.cx
//     const yOffsetToCenter = viewboxHeight / 2 - container.containerPos.cy

//     // Apply the relocation
//     logoSVG.center(logoSVG.cx() + xOffsetToCenter, logoSVG.cy() + yOffsetToCenter)
//     titleSVG.center(titleSVG.cx() + xOffsetToCenter, titleSVG.cy() + yOffsetToCenter)
//     sloganSVG.center(sloganSVG.cx() + xOffsetToCenter, sloganSVG.cy() + yOffsetToCenter)

//     return container.containerElems
// }
