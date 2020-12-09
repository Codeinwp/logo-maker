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

        // const {width, height} = svg.getBoundingClientRect() - not working

        img.onload = () => {
            canvas.width = 765
            canvas.height = 625

            context?.drawImage(img, 0, 0, 765, 625)

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

export async function createZipFromSVG(
    svg: SVGElement,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<JSZip> {
    // Create images
    const canvas = await generateCanvasFromSVG(svg)
    const imgs = formats.map((f) => ({
        ext: f,
        dataURL: exportImagesfromCANVAS(canvas, f),
    }))

    // Create ZIP file
    const zip = new JSZip()
    const folder = zip.folder("logos-by-logomaker")

    imgs.forEach((img) => {
        folder?.file(`logo.${img.ext}`, getBase64String(img.dataURL), { base64: true })
    })

    if (includeSVG) {
        folder?.file("logo.svg", new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" }))
    }

    return zip
}

export async function exportAsZipFromSVGviaLink(
    svg: SVGElement,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<string> {
    const zip = await createZipFromSVG(svg, formats, includeSVG)

    const link = await zip.generateAsync({ type: "blob" }).then((content) => {
        return URL.createObjectURL(content)
    })

    return link
}

export function downloadAsZipFromSVGviaClick(
    svg: SVGElement,
    formats: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): void {
    createZipFromSVG(svg, formats, includeSVG).then((zip) =>
        zip.generateAsync({ type: "blob" }).then((content) => {
            FileSaver.saveAs(content, "logos")
        })
    )
}
