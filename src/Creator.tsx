import * as React from "react"
import CreateLogo from "./components/CreateLogo"
import DownloadButton from "./components/ui/DownloadButton"
import SelectColor, {
    ColorData,
    defaultValues as colorsDefaultValues,
} from "./components/ui/SelectColors"
import SelectLayout, { LogoAlignOptions } from "./components/ui/SelectLayout"
import SelectLogo from "./components/ui/SelectLogo"
import SelectTypography from "./components/ui/SelectTypography"

import UIStore from "./stores/LogoModel"

type MenuOptions = "logo" | "typography" | "layout" | "colors"

const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")
    const logo = UIStore.useState((s) => s.logo.src)

    const [logoAlign, setLogoAlign] = React.useState<LogoAlignOptions>("align-top")
    const [colors, setColors] = React.useState<ColorData>(colorsDefaultValues)

    const renderRightSidePanel = () => {
        switch (menuOption) {
            case "logo":
                return <SelectLogo />
            case "layout":
                return <SelectLayout logoAlign={logoAlign} setLogoAlign={setLogoAlign} />
            case "typography":
                return <SelectTypography />
            case "colors":
                return <SelectColor colors={colors} setColors={setColors} />
        }
    }

    return (
        <div className="flex flex-col-reverse lg:flex-col">
            <div className="grid justify-items-end">
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
                        <CreateLogo
                            containerSize={{ width: 300, height: 280 }}
                            imageSize={{ width: 200, height: 200 }}
                            logoSVG={logo.svg}
                            logoAlign={logoAlign}
                            title={UIStore.useState((s) => s.title.text)}
                            slogan={UIStore.useState((s) => s.slogan.text)}
                            style={{
                                backgroundColor: colors.backgroundColor,
                                title: {
                                    color: colors.titleColor,
                                    fontFamily: UIStore.useState((s) => s.title.style.fontFamily),
                                    fontSize: UIStore.useState((s) => s.title.style.fontSize),
                                },
                                slogan: {
                                    color: colors.sloganColor,
                                    fontFamily: UIStore.useState((s) => s.slogan.style.fontFamily),
                                    fontSize: UIStore.useState((s) => s.slogan.style.fontSize),
                                },
                                logo: {
                                    fill: colors.logoColor,
                                },
                            }}
                        />
                    </div>
                    <div className="m-2 lg:m-16 lg:w-1/4">{renderRightSidePanel()}</div>
                </div>
            </div>
        </div>
    )
}

export default Creator
