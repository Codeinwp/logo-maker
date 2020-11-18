import * as React from "react"
import classnames from "classnames"

const DownloadButton: React.FunctionComponent<{ className?: string }> = (props: {
    className?: string
}) => {
    // const downloadSVGasPNG = () => {
    //     const svg = document.querySelector("#logo-image")?.childNodes[0]

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

    const downloadSVG = () => {
        const svg = document.querySelector("#image-logo")?.innerHTML

        if (!svg) {
            return
        }

        const blob = new Blob([svg.toString()])
        const element = document.createElement("a")
        element.download = "logo.svg"
        element.href = window.URL.createObjectURL(blob)
        element.click()
        element.remove()
    }

    return (
        <div className={classnames("download-button", props?.className)}>
            <button onClick={() => downloadSVG()}>
                <span>Download</span>
            </button>
            {/* <button
                className="m-2 box-content max-content bg-transparent bg-orange-600 font-semibold text-white py-2 px-4 rounded"
                onClick={() => downloadSVGasPNG()}
            >
                Download as PNG
            </button> */}
        </div>
    )
}

export default DownloadButton
