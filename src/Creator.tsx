import * as React from "react"
import BackUI from "./components/ui/common/BackUI"
import ColorsUIsvg from "./components/ui/common/ColorsUIsvg"
import LayoutUIsvg from "./components/ui/common/LayoutUIsvg"
import LogoUIsvg from "./components/ui/common/LogoUIsvg"
import ThemeisleUI from "./components/ui/common/ThemeisleUI"
import TypographyUIsvg from "./components/ui/common/TypographyUIsvg"
import CreateLogo from "./components/CreateLogo"
import DownloadButton from "./components/ui/DownloadButton"
import SelectColor from "./components/ui/SelectColors"
import SelectLayout from "./components/ui/SelectLayout"
import SelectLogo from "./components/ui/SelectLogo"
import SelectTypography from "./components/ui/SelectTypography"
import classnames from "classnames"
import "../src/assets/styles/Creator/creator.scss"

import UIStore from "./stores/UIStore"
import ReactGA from "react-ga"
import { download, createDownloadLinkPipeline } from "./engine/export"
import { buildPipelines } from "./engine/pipeline"

export type MenuOptions = "logo" | "typography" | "layout" | "colors"

export type DownLoadLinkState = {
    status: "loading" | "ready" | "idle"
    url: string
    downloadType?: "zip" | "png" | "svg"
}

export type DownLoadLinkAction = { type: "create"; value: "zip" | "png" | "svg" } | { type: "delete" } | { type: "publish"; value: string }

function downloadLinkReducer(prevState: DownLoadLinkState, action: DownLoadLinkAction): DownLoadLinkState {
    // console.log("Download Link")
    switch (action.type) {
        case "create":
            URL.revokeObjectURL(prevState.url)
            console.time("build-time")
            return {
                status: "loading",
                url: "",
                downloadType: action.value
            }
        case "delete":
            URL.revokeObjectURL(prevState.url)
            return {
                status: "idle",
                url: "",
            }
        case "publish":
            console.timeEnd("build-time")
            download(action.value, prevState.downloadType)
            return {
                ...prevState,
                status: "ready",
                url: action.value,
            }
        default:
            return {
                ...prevState,
                status: "idle",
                url: "",
            }
    }
}

/**
 * This function will crate the main component for the Creator page
 */
const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")
    const [downloadLink, dispatchDownloadLink] = React.useReducer<React.Reducer<DownLoadLinkState, DownLoadLinkAction>>(
        downloadLinkReducer,
        {
            status: "idle",
            url: "",
        }
    )
    const store = UIStore.useState()

    /**
     * Render the right panel based on the option choosed by the user
     */
    const renderRightSidePanel = () => {
        switch (menuOption) {
            case "logo":
                return <SelectLogo />
            case "typography":
                return <SelectTypography />
            case "layout":
                return <SelectLayout />
            case "colors":
                return <SelectColor />
        }
    }

    /**
     * Send deta to Google Analytics
     */
    React.useEffect(() => {
        if (window.logomaker?.googleAnalyticsCode) {
            ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search)
        }
    }, [])

    /**
     * Generate the download link
     */
    React.useEffect(() => {
        async function createLink(): Promise<void> {
            const logoSVG = document.querySelector("#image-logo svg")?.cloneNode(true) as SVGElement
            const favIconRef = document.querySelector("#rendering") as HTMLDivElement

            buildPipelines(store).createFavicon(favIconRef)
            const favIconSVG = document.querySelector("#rendering svg")?.cloneNode(true) as SVGElement
            favIconRef.innerHTML = ""

            if (logoSVG) {
                // const link = await downloadAsZipFromSVGviaLinkBlob(
                //     [
                //         { pipeline: "editor", svg: logoSVG },
                //         { pipeline: "favicon", svg: favIconSVG },
                //     ],
                //     ["png"],
                //     true
                // )
                ReactGA.event({
                    category: "Logo Maker Creator",
                    action: "Logo Choosed Final",
                    label: `Logo ID: ${store.logo.src.id}`,
                    value: 1,
                })
                // dispatchDownloadLink({ type: "publish", value: link })
                createDownloadLinkPipeline(dispatchDownloadLink, [
                    { pipeline: "editor", svg: logoSVG },
                    { pipeline: "favicon", svg: favIconSVG },
                ], downloadLink.downloadType || 'zip')
            }
        }

        switch (downloadLink.status) {
            case "loading":
                createLink()
                break
            default:
                break
        }
    }, [downloadLink.downloadType, downloadLink.status, store])

    /**
     * Store the current options in the seesions manager to be keeped during the page refresh.
     */
    React.useEffect(() => {
        sessionStorage.setItem("logo-maker-themeisle", JSON.stringify(store))
    }, [store])

    return (
        <div className="logo-creator logo-maker-container">
            <div className="top-section">
                <BackUI to="/showcase" />
                <ThemeisleUI />
                <div className="download-section">
                    <DownloadButton downloadLink={downloadLink} dispatch={dispatchDownloadLink} />
                </div>
            </div>
            <div className="main-section">
                <div className="main-container">
                    <div className="left-menu">
                        <div className="options">
                            <div className="option">
                                <a
                                    id="btn-select-logo"
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            console.log(window.innerHeight)
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>("#right-menu")?.offsetTop || 0
                                            )
                                        }
                                        setMenuOption("logo")
                                    }}
                                    className={classnames({ active: menuOption === "logo" })}
                                >
                                    <LogoUIsvg isSelected={menuOption === "logo"} />
                                    Logo
                                </a>
                            </div>
                            <div className="option">
                                <a
                                    id="btn-select-typography"
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>("#right-menu")?.offsetTop || 0
                                            )
                                        }
                                        setMenuOption("typography")
                                    }}
                                    className={classnames({ active: menuOption === "typography" })}
                                >
                                    <TypographyUIsvg isSelected={menuOption === "typography"} />
                                    Typography
                                </a>
                            </div>
                            <div className="option">
                                <a
                                    id="btn-select-layout"
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>("#right-menu")?.offsetTop || 0
                                            )
                                        }
                                        setMenuOption("layout")
                                    }}
                                    className={classnames({ active: menuOption === "layout" })}
                                >
                                    <LayoutUIsvg isSelected={menuOption === "layout"} />
                                    Layout
                                </a>
                            </div>
                            <div className="option">
                                <a
                                    id="btn-select-colors"
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>("#right-menu")?.offsetTop || 0
                                            )
                                        }
                                        setMenuOption("colors")
                                    }}
                                    className={classnames({ active: menuOption === "colors" })}
                                >
                                    <ColorsUIsvg isSelected={menuOption === "colors"} />
                                    Colors
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <CreateLogo id="image-logo" logoProps={store} />
                    </div>
                    <div id="right-menu" className="right-menu">
                        {renderRightSidePanel()}
                    </div>
                </div>
            </div>
            <div id="rendering" className="rendering-section"></div>
        </div>
    )
}

export default Creator
