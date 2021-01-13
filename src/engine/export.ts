import JSZip from "jszip"

/**
 * This function creates and URL for the `Blob` builded from the provided Svg 
 * 
 * @param svg The svg that is going to be exported
 * @returns And URL to the Svg
 */
export function exportAsSVGfromDOMviaLink(svg: SVGElement): string {
    const blob = new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" })
    return window.URL.createObjectURL(blob)
}

/**
 * This function will generate and image of the provided Svg using `canvas`
 * 
 * @param svg The svg that is going to be exported
 */
export function generateCanvasFromSVG(svg: SVGElement): Promise<HTMLCanvasElement> {
    return new Promise((resolve) => {
        const img = new Image()
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        const width = Number(svg.getAttribute("width")) || 765
        const height = Number(svg.getAttribute("height")) || 625

        // const {width, height} = svg.getBoundingClientRect() - not working

        img.onload = () => {
            canvas.width = width
            canvas.height = height

            context?.drawImage(img, 0, 0, width, height)

            // clean up the URL of the img's src
            window.URL.revokeObjectURL(img.src)
            resolve(canvas)
        }

        img.onerror = (ev) => {
            console.log("Image not found", ev)

            // This will work even in Safari for Mac & iOS
            img.src = "data:image/svg+xml," + svg.outerHTML
        }

        img.src = exportAsSVGfromDOMviaLink(svg)
    })

    // return canvas
}

function getBase64String(dataURL: string): string {
    const idx = dataURL.indexOf("base64,") + "base64,".length
    return dataURL.substring(idx)
}

/**
 * This function will add to an `zip` object the images generated from Svg based on the extensions provided
 * 
 * @param svg The svg that is going to be exported
 * @param zip The zip element that will containe the generated images 
 * @param extensions The extensions that will be used to generate the images
 * @param includeSVG Add the svg element to the zip file
 */
export async function addToZipFromSVG(
    svg: SVGElement,
    zip: JSZip,
    extensions: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<JSZip> {
    // Create images
    const canvas = await generateCanvasFromSVG(svg)
    const imgs = extensions.map((f) => ({
        ext: f,
        dataURL: canvas.toDataURL(`image/${f}`),
    }))

    imgs.forEach((img) => {
        zip?.file(
            `${svg.getAttribute("name") || "logo"}.${img.ext}`,
            getBase64String(img.dataURL),
            { base64: true }
        )
    })

    if (includeSVG) {
        zip?.file(
            `${svg.getAttribute("name") || "logo"}.svg`,
            new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" })
        )
    }

    return zip
}

const presetsFormat: { name: string; width: number; height: number; isTransparent?: boolean }[] = [
    {
        name: "default_765x625",
        width: 765,
        height: 625,
    },
    {
        name: "default_transparent_765x625",
        width: 765,
        height: 625,
        isTransparent: true,
    },
    {
        name: "default_transparent_1000x1000",
        width: 1000,
        height: 1000,
        isTransparent: true,
    },
    {
        name: "wordpress_logo_512x512",
        width: 512,
        height: 512,
    },
    {
        name: "wordpress_logo_transparent_512x512",
        width: 512,
        height: 512,
        isTransparent: true,
    },
    {
        name: "facebook_profile_1000x1000",
        width: 1000,
        height: 1000,
    },
    {
        name: "facebook_cover_1640x624",
        width: 1640,
        height: 624,
    },
    {
        name: "twitter_profile_1000x1000",
        width: 1000,
        height: 1000,
    },
    {
        name: "twitter_header_1500x500",
        width: 1500,
        height: 500,
    },
    {
        name: "favicon_32x32",
        width: 32,
        height: 32,
    },
    {
        name: "instagram_portrait_1080x1350",
        width: 1080,
        height: 1350,
    },
    {
        name: "instagram_photo_1080x1080",
        width: 1080,
        height: 1080,
    },
    {
        name: "instagram_landscape_1080x608",
        width: 1080,
        height: 608,
    },
    {
        name: "instagram_stories_1080x1920",
        width: 1080,
        height: 1920,
    },
    {
        name: "linkedin_profile_1000x1000",
        width: 1000,
        height: 1000,
    },
    {
        name: "linkedin_banner_1536x768",
        width: 1536,
        height: 768,
    },
    {
        name: "youtube_profile_800x800",
        width: 800,
        height: 800,
    },
    {
        name: "pinterest_profile_330x330",
        width: 330,
        height: 330,
    },
    {
        name: "pinterest_board_800x800",
        width: 800,
        height: 800,
    },
    {
        name: "wallpaper_1920x1080",
        width: 1920,
        height: 1080,
    },
]

/**
 * This functions will create variants of proviede Svg based on the internal presets.
 * 
 * @param svg The svg that is going to be exported
 */
export function createSVGsWithPreset(svg: SVGElement): SVGElement[] {
    return presetsFormat.map((preset) => {
        const _svg = svg.cloneNode(true) as SVGElement
        _svg.removeAttribute("width")
        _svg.removeAttribute("height")

        _svg.setAttribute("height", preset.height.toString())
        _svg.setAttribute("width", preset.width.toString())
        _svg.setAttribute("name", preset.name)

        if (preset.isTransparent) {
            _svg.style.backgroundColor = "transparent"
        }

        return _svg
    })
}

/**
 * This function will create a `zip` file that will include all the images generated from pressets with the provided Svg and extensions
 * 
 * @param svg The svg that is going to be exported
 * @param extensions The extensions that will be used to generate the images
 * @param includeSVG Add the svg element to the zip file
 */
export async function createZipWithPresets(
    svg: SVGElement,
    extensions: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<JSZip> {
    let zip = new JSZip()

    for (const _svg of createSVGsWithPreset(svg)) {
        zip = await addToZipFromSVG(_svg, zip, extensions, false)
    }

    if (includeSVG) {
        zip?.file(
            `${"logo-svg"}.svg`,
            new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" })
        )
    }

    return zip
}

/**
 * This function will generate an `URL` to the zip that containts the generated images from the provided Svg and extensions
 * 
 * @param svg The svg that is going to be exported
 * @param extensions The extensions that will be used to generate the images
 * @param includeSVG Add the svg element to the zip file
 */
export async function downloadAsZipFromSVGviaLinkBlob(
    svg: SVGElement,
    extensions: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<string> {
    const zip = await createZipWithPresets(svg, extensions, includeSVG)

    const blob = await zip.generateAsync({ type: "blob", mimeType: "application/zip" })

    return URL.createObjectURL(blob)
}

// Legacy & For reference

// export async function exportAsZipFromSVGviaLink(
//     svg: SVGElement,
//     formats: ("png" | "jpg" | "webp")[],
//     includeSVG?: boolean
// ): Promise<string> {
//     const zip = await addToZipFromSVG(svg, new JSZip(), formats, includeSVG)

//     const link = await zip.generateAsync({ type: "blob" }).then((content) => {
//         return URL.createObjectURL(content)
//     })

//     return link
// }

// export async function downloadAsZipFromSVGviaLink(
//     svg: SVGElement,
//     formats: ("png" | "jpg" | "webp")[],
//     includeSVG?: boolean
// ): Promise<string> {
//     const zip = await createZipWithPresets(svg, formats, includeSVG)

//     const content = await zip.generateAsync({ type: "base64", mimeType: "application/zip" })

//     return "data:application/zip; Content-disposition: attachment; base64," + content
// }

// export async function downloadAsZipFromSVGviaClick(
//     svg: SVGElement,
//     formats: ("png" | "jpg" | "webp")[],
//     includeSVG?: boolean
// ): Promise<void> {

//     const zip = await createZipWithPresets(svg, formats, includeSVG)
//     zip.generateAsync({ type: "blob", mimeType: "application/zip" }).then((content) => {
//         FileSaver.saveAs(content, "LogoMakerExport")
//     })
// }
