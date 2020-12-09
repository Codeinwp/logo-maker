import JSZip from "jszip"
import FileSaver from "file-saver"

export function exportAsSVGfromDOMviaLink(svg: SVGElement): string {
    const blob = new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" })
    return window.URL.createObjectURL(blob)
}

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

        img.onerror = () => {
            console.log("Image no found")
        }

        img.src = exportAsSVGfromDOMviaLink(svg)
    })

    // return canvas
}

export function exportImagesfromCANVAS(
    canvas: HTMLCanvasElement,
    format: "png" | "jpg" | "webp"
): string {
    return canvas.toDataURL(`image/${format}`)
}

function getBase64String(dataURL: string): string {
    const idx = dataURL.indexOf("base64,") + "base64,".length
    return dataURL.substring(idx)
}

export async function addToZipFromSVG(
    svg: SVGElement,
    zip: JSZip,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<JSZip> {
    // Create images
    const canvas = await generateCanvasFromSVG(svg)
    const imgs = formats.map((f) => ({
        ext: f,
        dataURL: exportImagesfromCANVAS(canvas, f),
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

export async function exportAsZipFromSVGviaLink(
    svg: SVGElement,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<string> {
    const zip = await addToZipFromSVG(svg, new JSZip(), formats, includeSVG)

    const link = await zip.generateAsync({ type: "blob" }).then((content) => {
        return URL.createObjectURL(content)
    })

    return link
}

const presetsFormat = [
    {
        name: "default_765_625",
        width: 765,
        height: 625,
    },
    {
        name: "facebook_profile_1000x1000",
        width: 1000,
        height: 1000,
    },
    {
        name: "twitter_profile_1000x1000",
        width: 1000,
        height: 1000,
    },
]

function createSVGsWithPreset(svg: SVGElement): SVGElement[] {
    return presetsFormat.map((preset) => {
        const _svg = svg.cloneNode(true) as SVGElement
        _svg.removeAttribute("width")
        _svg.removeAttribute("height")

        _svg.setAttribute("height", preset.height.toString())
        _svg.setAttribute("width", preset.width.toString())
        _svg.setAttribute("name", preset.name)

        return _svg
    })
}

export async function createZipWithPresets(
    svg: SVGElement,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<JSZip> {
    let zip = new JSZip()

    for (const _svg of createSVGsWithPreset(svg)) {
        zip = await addToZipFromSVG(_svg, zip, formats, includeSVG)
    }

    return zip
}

export async function downloadAsZipFromSVGviaClick(
    svg: SVGElement,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<void> {
    // addToZipFromSVG(svg, new JSZip(), formats, includeSVG).then((zip) =>
    //     zip.generateAsync({ type: "blob" }).then((content) => {
    //         FileSaver.saveAs(content, "logos")
    //     })
    // )

    const zip = await createZipWithPresets(svg, formats, includeSVG)
    zip.generateAsync({ type: "blob" }).then((content) => {
        FileSaver.saveAs(content, "logos")
    })
}
