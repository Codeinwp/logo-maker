import JSZip from "jszip"
import { DownLoadLinkAction } from "../Creator"
import { PipelineOptions } from "./pipeline"
import React from "react"

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
        let safariWasUsed = false

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
            // This will work even in Safari for Mac & iOS
            if (!safariWasUsed) {
                img.src = "data:image/svg+xml," + svg.outerHTML
                safariWasUsed = true
                console.info("One day Apple will solve this.")
            } else {
                console.warn("Image not found", ev)
            }
        }

        img.src = exportAsSVGfromDOMviaLink(svg)
    })

    // return canvas
}

/**
 * This function will extract the `base64` from the provided URL
 *
 * @param dataURL The URL of the image
 */
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

    // Add images to the zip file
    imgs.forEach((img) => {
        zip?.file(`${svg.getAttribute("name") || "logo"}.${img.ext}`, getBase64String(img.dataURL), { base64: true })
    })

    if (includeSVG) {
        zip?.file(
            `${svg.getAttribute("name") || "logo"}.svg`,
            new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" })
        )
    }

    return zip
}

/**
 * Definition of a file structure from the zip file
 */
type FileFormat = { name: string; width: number; height: number; isTransparent?: boolean; pipeline?: PipelineOptions }
/**
 * Definition of the folder strucure from the zip file
 */
type Folder = {
    name: string
    children: (Folder | FileFormat)[]
}

const folderStructure: Folder = {
    name: "LogoMakerByThemeisle",
    children: [
        {
            name: "WordPress",
            children: [
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
            ],
        },
        {
            name: "Facebook",
            children: [
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
                    name: "facebook_image_post_1200x630",
                    width: 1200,
                    height: 630,
                },
                {
                    name: "facebook_ad_1200x628",
                    width: 1200,
                    height: 624,
                },
                {
                    name: "facebook_story_1080x1920",
                    width: 1080,
                    height: 1920,
                },
            ],
        },
        {
            name: "Instagram",
            children: [
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
            ],
        },
        {
            name: "Linkedin",
            children: [
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
            ],
        },
        {
            name: "GoogleApps",
            children: [
                {
                    name: "youtube_profile_800x800",
                    width: 800,
                    height: 800,
                },
                {
                    name: "gmail_profile_400x400",
                    width: 400,
                    height: 400,
                },
            ],
        },
        {
            name: "Twitter",
            children: [
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
            ],
        },
        {
            name: "Pinterest",
            children: [
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
            ],
        },
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
            name: "favicon_32x32",
            width: 32,
            height: 32,
            pipeline: "favicon",
        },
        {
            name: "favicon_transparent_32x32",
            width: 32,
            height: 32,
            isTransparent: true,
            pipeline: "favicon",
        },
        {
            name: "wallpaper_1920x1080",
            width: 1920,
            height: 1080,
        },
    ],
}

export type InputSVG = {
    svg: SVGElement
    pipeline: PipelineOptions
}

/**
 * This function will create a `zip` file that will include all the images generated from the folder structure with the provided Svg and extensions
 *
 * @param svg The svg that is going to be exported
 * @param extensions The extensions that will be used to generate the images
 * @param includeSVG Add the svg element to the zip file
 */
export async function createZipWithPresets(
    input: InputSVG[],
    extensions: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<JSZip> {
    const zipRoot = new JSZip()

    /**
     * This function generate an image and add it to the zip file which might be a subfolder
     *
     * @param zip The zip object with folder in which the file will be added
     * @param file The data necessary for generating the image
     */
    const createFile = async (zip: JSZip, file: FileFormat): Promise<JSZip> => {
        const svg = (
            input.find(({ pipeline }) => pipeline === file.pipeline) ||
            input.find(({ pipeline }) => pipeline === "editor")
        )?.svg

        if (!svg) {
            return zip
        }

        const _svg = svg.cloneNode(true) as SVGElement
        _svg.removeAttribute("width")
        _svg.removeAttribute("height")

        _svg.setAttribute("height", file.height.toString())
        _svg.setAttribute("width", file.width.toString())
        _svg.setAttribute("name", file.name)

        if (file.isTransparent) {
            _svg.style.backgroundColor = "transparent"
        }

        zip = await addToZipFromSVG(_svg, zip, extensions, false)

        return zip
    }

    /**
     * This function will create a folder in the zip object.
     * If the children is a folder, then it calls itself with that folder
     * If the children is a file, then it calls the `createFile` function and it wait to generate the image
     *
     * @param zip The zip object with folder in which the file or a folder will be added
     * @param folder The data necessary for generating the folder
     */
    const createFolder = async (zip: JSZip, folder: Folder): Promise<void> => {
        const zipWithFolder = zip.folder(folder.name)

        if (!zipWithFolder) {
            console.warn("Cannot create folder with name: " + folder.name + " because the zip object is null!")
            return
        }

        // Build in sequence
        // for( const fileOrFolder of folder.children) {
        //     if ('width' in fileOrFolder && 'height' in fileOrFolder) {
        //         await createFile(zipWithFolder, fileOrFolder)
        //     } else {
        //         await createFolder(zipWithFolder, fileOrFolder)
        //     }
        // }

        // Build in parallel
        await Promise.all(
            folder.children.map(async (fileOrFolder) => {
                if ("width" in fileOrFolder && "height" in fileOrFolder) {
                    await createFile(zipWithFolder, fileOrFolder)
                } else {
                    createFolder(zipWithFolder, fileOrFolder)
                }
            })
        )
    }

    await createFolder(zipRoot, folderStructure)

    if (includeSVG) {
        input.forEach(({ svg, pipeline }) => {
            zipRoot?.file(`logo-${pipeline}.svg`, new Blob([svg.outerHTML], { type: "image/svg+xml;charset=utf-8" }))
        })
    }

    return zipRoot
}

/**
 * This function will generate an `URL` to the zip that containts the generated images from the provided Svg and extensions
 *
 * @param svg The svg that is going to be exported
 * @param extensions The extensions that will be used to generate the images
 * @param includeSVG Add the svg element to the zip file
 */
export async function downloadAsZipFromSVGviaLinkBlob(
    input: InputSVG[],
    extensions: ("png" | "jpg" | "webp")[],
    includeSVG?: boolean
): Promise<string> {
    const zip = await createZipWithPresets(input, extensions, includeSVG)

    const blob = await zip.generateAsync({ type: "blob", mimeType: "application/zip" })

    return URL.createObjectURL(blob)
}

export async function createDownloadLinkPipeline(
    dispatch: React.Dispatch<DownLoadLinkAction>,
    input: InputSVG[],
    type: "svg" | "png" | "zip"
): Promise<void> {
    let link = ""

    switch (type) {
        case "zip":
            link = await downloadAsZipFromSVGviaLinkBlob(input, ["png"], true)
            break
        case "png":
            link = (await generateCanvasFromSVG(input[0].svg)).toDataURL("image/png")
            break
        case "svg":
            link = exportAsSVGfromDOMviaLink(input[0].svg)
            break
    }
    dispatch({ type: "publish", value: link })
}

export function download(downloadLink: string, extensions?: string): void {
    if (downloadLink.length === 0) {
        return
    }
    console.log("Download", downloadLink)
    const a = document.createElement("a")

    a.style.display = "none"
    a.href = downloadLink
    a.download = `logo.${extensions || "zip"}`

    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    // fetch(props.downloadLink.url)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err))
}

// Legacy & For reference

/**
 * This functions will create variants of proviede Svg based on the internal presets.
 *
 * @param svg The svg that is going to be exported
 */
// export function createSVGsWithPreset(svg: SVGElement): SVGElement[] {
//     return presetsFormat.map((preset) => {
//         const _svg = svg.cloneNode(true) as SVGElement
//         _svg.removeAttribute("width")
//         _svg.removeAttribute("height")

//         _svg.setAttribute("height", preset.height.toString())
//         _svg.setAttribute("width", preset.width.toString())
//         _svg.setAttribute("name", preset.name)

//         if (preset.isTransparent) {
//             _svg.style.backgroundColor = "transparent"
//         }

//         return _svg
//     })
// }
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
