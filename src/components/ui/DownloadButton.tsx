import * as React from "react"

const DownloadButton: React.FunctionComponent<unknown> = () => {
    const downloadSVGasPNG = () => {
        const svg = document.querySelector("#logo-image")?.childNodes[0]

        if (!svg) {
            return
        }
        const xml = new XMLSerializer().serializeToString(svg)
        const svg64 = btoa(xml)
        const image = "data:image/svg+xml;base64," + svg64
        const element = document.createElement("a")

        const sourceImage = new Image()

        sourceImage.onload = () => {
            console.log("Load")
            const canvas = document.createElement("canvas")
            canvas.height = 280
            canvas.width = 300

            const ctx = canvas.getContext("2d")

            ctx?.drawImage(sourceImage, 0, 0, 280, 300)

            element.download = "logo.png"
            element.href = canvas.toDataURL("image/png")
            element.click()
            element.remove()
        }

        sourceImage.src = image
    }

    const downloadSVG = () => {
        const svg = document.querySelector("#logo-image")?.innerHTML

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
        <div className="container flex justify-center">
            <button
                className="m-2 box-content  w-18 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => downloadSVG()}
            >
                Download as SVG
            </button>
            <button
                className="m-2 box-content  w-18 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => downloadSVGasPNG()}
            >
                Download as PNG
            </button>
        </div>
    )
}

export default DownloadButton
