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

    if (window.screen.width >= 1024) {
        store = {
            ...store,
            container: {
                ...store.container,
                width: 765,
                height: 625,
            },
        }
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
                <div className="container">
                    <div className="left-menu">
                        <div className="options">
                            <div className="option">
                                <LogoUIsvg isSelected={menuOption === "logo"} />
                                <button
                                    onClick={() => setMenuOption("logo")}
                                    className={classnames({ active: menuOption === "logo" })}
                                >
                                    Logo
                                </button>
                            </div>
                            <div className="option">
                                <TypographyUIsvg isSelected={menuOption === "typography"} />
                                <button
                                    onClick={() => setMenuOption("typography")}
                                    className={classnames({ active: menuOption === "typography" })}
                                >
                                    Typography
                                </button>
                            </div>
                            <div className="option">
                                <LayoutUIsvg isSelected={menuOption === "layout"} />
                                <button
                                    onClick={() => setMenuOption("layout")}
                                    className={classnames({ active: menuOption === "layout" })}
                                >
                                    Layout
                                </button>
                            </div>
                            <div className="option">
                                <ColorsUIsvg isSelected={menuOption === "colors"} />
                                <button
                                    onClick={() => setMenuOption("colors")}
                                    className={classnames({ active: menuOption === "colors" })}
                                >
                                    Colors
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <CreateLogo id="image-logo" logoProps={store} />
                    </div>
                    <div className="right-menu">{renderRightSidePanel()}</div>
                </div>
            </div>
        </div>
    )
}

export default Creator
