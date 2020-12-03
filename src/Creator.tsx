import * as React from "react"
import BackUI from "./assets/ui/BackUI"
import ColorsUIsvg from "./assets/ui/ColorsUIsvg"
import LayoutUIsvg from "./assets/ui/LayoutUIsvg"
import LogoUIsvg from "./assets/ui/LogoUIsvg"
import ThemeisleUI from "./assets/ui/ThemeisleUI"
import TypographyUIsvg from "./assets/ui/TypographyUIsvg"
import CreateLogo from "./components/CreateLogo"
import DownloadButton from "./components/ui/DownloadButton"
import SelectColor from "./components/ui/SelectColors"
import SelectLayout from "./components/ui/SelectLayout"
import SelectLogo from "./components/ui/SelectLogo"
import SelectTypography from "./components/ui/SelectTypography"
import classnames from "classnames"
import "../src/assets/styles/Creator/creator.scss"
import { fontsForSvg, fontsList as fL } from "./assets/fonts/index"
import UIStore from "./stores/UIStore"

type MenuOptions = "logo" | "typography" | "layout" | "colors"

const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")
    let store = { ...UIStore.useState((s) => s) }

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

    store = {
        ...store,
        container: {
            ...store.container,
            width: 765,
            height: 625,
        },
        title: {
            ...store.title,
            style: {
                ...store.title.style,
                fontFamily: fontsForSvg[fL.findIndex((f) => f === store.title.style.fontFamily)],
            },
        },
        slogan: {
            ...store.slogan,
            style: {
                ...store.slogan.style,
                fontFamily: fontsForSvg[fL.findIndex((f) => f === store.slogan.style.fontFamily)],
            },
        },
    }

    return (
        <div className="logo-creator logo-maker-container">
            <div className="top-section">
                <BackUI to="/showcase" />
                <ThemeisleUI />
                <div className="download-section">
                    <DownloadButton />
                </div>
            </div>
            <div className="main-section">
                <div className="main-container">
                    <div className="left-menu">
                        <div className="options">
                            <div className="option">
                                <a
                                    onClick={() => {
                                        // document
                                        //     .querySelector<HTMLDivElement>("#right-menu")
                                        //     ?.scrollTo()
                                        if (window.innerHeight <= 812) {
                                            console.log(window.innerHeight)
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>(
                                                    "#right-menu"
                                                )?.offsetTop || 0
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
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>(
                                                    "#right-menu"
                                                )?.offsetTop || 0
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
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>(
                                                    "#right-menu"
                                                )?.offsetTop || 0
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
                                    onClick={() => {
                                        if (window.innerHeight <= 812) {
                                            window.scrollTo(
                                                0,
                                                document.querySelector<HTMLDivElement>(
                                                    "#right-menu"
                                                )?.offsetTop || 0
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
        </div>
    )
}

export default Creator
