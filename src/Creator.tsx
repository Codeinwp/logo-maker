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
                width: 500,
                height: 500,
            },
        }
    }
    return (
        <div className="static lg:relative flex flex-col lg:flex-col">
            <div className="order-last z-10 p-2 h-16 sticky bottom-0 bg-white flex w-auto justify-center lg:order-1 lg:absolute lg:right-0 lg:top-0 lg:mr-24 lg:mt-4 lg:bg-transparent">
                <DownloadButton className="w-4/5 lg:w-24" />
            </div>
            <div className="relative flex flex-row mt-4 mb-2 lg:mb-16 w-full items-center justify-center">
                <BackUI
                    className="absolute left-0 top-0 ml-24 invisible lg:visible"
                    to="/showcase"
                />
                <ThemeisleUI />
            </div>
            <div className="flex w-auto justify-center">
                <div className="flex flex-initial flex-col lg:flex-row lg:w-full lg:justify-evenly">
                    <div className="box-border flex w-auto justify-center m-2 lg:max-content  lg:justify-end  lg:m-16 lg:w-1/4 lg:m-1">
                        <div className="grid h-20 grid-cols-2 lg:h-40 lg:grid-cols-1 lg:gap-2">
                            <div className="flex flex-row">
                                <LogoUIsvg isSelected={menuOption === "logo"} />
                                <button
                                    onClick={() => setMenuOption("logo")}
                                    className={`box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${
                                        menuOption === "logo" ? "text-black" : "text-gray-500"
                                    }`}
                                >
                                    Logo
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <TypographyUIsvg isSelected={menuOption === "typography"} />
                                <button
                                    onClick={() => setMenuOption("typography")}
                                    className={`box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${
                                        menuOption === "typography" ? "text-black" : "text-gray-500"
                                    }`}
                                >
                                    Typography
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <LayoutUIsvg isSelected={menuOption === "layout"} />
                                <button
                                    onClick={() => setMenuOption("layout")}
                                    className={`box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${
                                        menuOption === "layout" ? "text-black" : "text-gray-500"
                                    }`}
                                >
                                    Layout
                                </button>
                            </div>
                            <div className="flex flex-row">
                                <ColorsUIsvg isSelected={menuOption === "colors"} />
                                <button
                                    onClick={() => setMenuOption("colors")}
                                    className={`box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${
                                        menuOption === "colors" ? "text-black" : "text-gray-500"
                                    }`}
                                >
                                    Colors
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:py-16 lg:w-1/3">
                        <CreateLogo id="image-logo" logoProps={store} />
                    </div>
                    <div className="m-2 lg:m-16 lg:w-1/4">{renderRightSidePanel()}</div>
                </div>
            </div>
        </div>
    )
}

export default Creator
