import * as React from "react"
import { Link } from "react-router-dom"
import CreateLogo from "./components/CreateLogo"
import DownloadButton from "./components/ui/DownloadButton"
import SelectColor from "./components/ui/SelectColors"
import SelectLayout from "./components/ui/SelectLayout"
import SelectLogo from "./components/ui/SelectLogo"
import SelectTypography from "./components/ui/SelectTypography"

import UIStore from "./stores/LogoModel"

type MenuOptions = "logo" | "typography" | "layout" | "colors"

const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")
    const store = UIStore.useState((s) => s)

    const renderRightSidePanel = () => {
        switch (menuOption) {
            case "logo":
                return <SelectLogo />
            case "layout":
                return <SelectLayout />
            case "typography":
                return <SelectTypography />
            case "colors":
                return <SelectColor />
        }
    }

    return (
        <div className="flex flex-col-reverse lg:flex-col">
            <div className="flex flex-row">
                <div className="container flex lg:px-32 lg:w-3/4 mx-8 my-4">
                    <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 max-content rounded"
                        to="/showcase"
                    >
                        Back
                    </Link>
                </div>
                <DownloadButton />
            </div>
            <div className="flex w-auto justify-center">
                <div className="flex flex-initial flex-col lg:flex-row lg:w-full lg:justify-evenly">
                    <div className="box-border flex w-auto justify-center lg:max-content  lg:justify-end  lg:m-16 lg:w-1/4 lg:m-1">
                        <div className="grid h-20 grid-cols-2 lg:h-40 lg:grid-cols-1 lg:gap-2">
                            <button
                                onClick={() => setMenuOption("logo")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Logo
                            </button>
                            <button
                                onClick={() => setMenuOption("typography")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Typography
                            </button>
                            <button
                                onClick={() => setMenuOption("layout")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Layout
                            </button>
                            <button
                                onClick={() => setMenuOption("colors")}
                                className="box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
                            >
                                Colors
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:py-16 lg:w-1/3">
                        <CreateLogo logoProps={store} />
                    </div>
                    <div className="m-2 lg:m-16 lg:w-1/4">{renderRightSidePanel()}</div>
                </div>
            </div>
        </div>
    )
}

export default Creator
