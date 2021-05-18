import * as React from "react"
import classnames from "classnames"
import ReactGA from "react-ga"

import { DownLoadLinkAction, DownLoadLinkState } from "./../../Creator"

/**
 * This function will the render the `Download Button` from design.
 *
 * @param props The CSS class and the download link of the `zip` file
 */
const DownloadButton: React.FunctionComponent<{
    className?: string
    downloadLink?: DownLoadLinkState
    dispatch: React.Dispatch<DownLoadLinkAction>
}> = (props: {
    className?: string
    downloadLink?: DownLoadLinkState
    dispatch?: React.Dispatch<DownLoadLinkAction>
}) => {
        const [status, setStatus] = React.useState<'normal' | 'expanded'>('normal')
        const download = (type: "zip" | "png" | "svg") => {
            if (props.downloadLink?.status !== "loading") {
                if (window.logomaker?.googleAnalyticsCode) {
                    ReactGA.event({
                        category: "Logo Maker Creator",
                        action: "Click to download",
                        label: "Download",
                        value: 1,
                    })
                }

                props.dispatch?.({ type: "create", value: type })
            }
        }

        return (
            (<div className={classnames("download-button", props?.className, status)}>
                {
                    status === 'normal' ? (
                        <button
                            onClick={() => {
                                setStatus('expanded')
                            }}
                        >
                            {props.downloadLink?.status === "loading" ? (
                                <div className="content-loader"></div>
                            ) : (
                                <span>Download</span>
                            )}
                        </button>
                    ) : (
                        <React.Fragment>
                            <div className="btn-group">
                                <button onClick={
                                    () => {
                                        download('png')
                                        setStatus('normal')
                                    }
                                }>
                                    <span>PNG</span>
                                </button>
                                <button onClick={
                                    () => {
                                        download('zip')
                                        setStatus('normal')
                                    }
                                }>
                                    <span>BUNDLE</span>
                                </button>
                                <button onClick={
                                    () => {
                                        download('svg')
                                        setStatus('normal')
                                    }
                                }>
                                    <span>SVG</span>
                                </button>
                            </div>

                        </React.Fragment>
                    )
                }

            </div>)

        )
    }

export default DownloadButton

// const fonts = [
//     UIStore.useState((s) => s.title.style.fontFamily),
//     UIStore.useState((s) => s.slogan.style.fontFamily),
// ]

// const downloadSVGasPNG = () => {
//     const svg = document.querySelector("#image-logo")?.childNodes[0]

//     if (!svg) {
//         return
//     }
//     const xml = new XMLSerializer().serializeToString(svg)
//     const svg64 = btoa(xml)
//     const image = "data:image/svg+xml;base64," + svg64
//     const element = document.createElement("a")

//     const sourceImage = new Image()

//     sourceImage.onload = () => {
//         console.log("Load")
//         const canvas = document.createElement("canvas")
//         canvas.height = 280
//         canvas.width = 300

//         const ctx = canvas.getContext("2d")

//         ctx?.drawImage(sourceImage, 0, 0, 280, 300)

//         element.download = "logo.png"
//         element.href = canvas.toDataURL("image/png")
//         element.click()
//         element.remove()
//     }

//     sourceImage.src = image
// }

// const downloadSVG = () => {
//     const node = document.querySelector("#image-logo")?.cloneNode(true)

//     if (!node) {
//         return
//     }
//     // const defs = document.createElement("defs")
//     // const style = document.createElement("style")
//     // style.innerHTML = `
//     //         @import url("${generateUrlForFont(fonts[0])}");
//     //         @import url("${generateUrlForFont(fonts[1])}");
//     // `
//     // node.firstChild?.appendChild(style)

//     const svg = (node as Element).innerHTML

//     const blob = new Blob([svg.toString()])
//     const element = document.createElement("a")
//     element.download = "logo.svg"
//     element.href = window.URL.createObjectURL(blob)
//     element.click()
//     element.remove()
// }

/* <a
                target="_blank"
                rel="noreferrer"
                download="LogoMakerExport.zip"
                href={props.downloadLink || " "}
                onClick={() => {
                    const logoSVG = document
                        .querySelector("#image-logo svg")
                        ?.cloneNode(true) as SVGElement
                    if (logoSVG) {
                        // downloadAsZipFromSVGviaClick(logoSVG, ["png"], true)
                        ReactGA.event({
                            category: "Logo Maker Creator",
                            action: "Click to download",
                            label: "Download",
                            value: 1,
                        })
                    }
                }}
            >
                <span>Download</span>
            </a> */
