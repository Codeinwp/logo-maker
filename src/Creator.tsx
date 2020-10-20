import * as React from "react"
import { Logo1, LogoSVGImport } from "./assets/logos"
import CreateLogo from "./components/CreateLogo"
import SelectLayout, { LogoAlignOptions } from "./components/ui/SelectLayout"
import SelectLogo from "./components/ui/SelectLogo"
import SelectTypography, {
    defaultValues as typographyDefaultValues,
    TypographyData,
} from "./components/ui/SelectTypography"

type MenuOptions = "logo" | "typography" | "layout" | "colors"

const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")
    const [logo, setLogo] = React.useState<LogoSVGImport>(Logo1)
    const [typography, setTypography] = React.useState<TypographyData>(typographyDefaultValues)
    const [logoAlign, setLogoAlign] = React.useState<LogoAlignOptions>("align-top")

    const renderRightSidePanel = () => {
        switch (menuOption) {
            case "logo":
                return <SelectLogo setLogo={setLogo} />
            case "layout":
                return <SelectLayout logoAlign={logoAlign} setLogoAlign={setLogoAlign} />
            case "typography":
                return <SelectTypography typography={typography} setTypography={setTypography} />
            case "colors":
                return <div>colors</div>
        }
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-initial flex-col lg:flex-row">
                <div className="flex justify-center m-1 lg:m-16">
                    <div className="grid gap-2 grid-cols-2 lg:grid-cols-1">
                        <button
                            onClick={() => setMenuOption("logo")}
                            className="box-content h-auto w-18 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Logo
                        </button>
                        <button
                            onClick={() => setMenuOption("typography")}
                            className="box-content h-auto w-18 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Typography
                        </button>
                        <button
                            onClick={() => setMenuOption("layout")}
                            className="box-content h-auto w-18 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Layout
                        </button>
                        <button
                            onClick={() => setMenuOption("colors")}
                            className="box-content h-auto w-18 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Colors
                        </button>
                    </div>
                </div>
                <div className="flex flex-auto m-1 lg:m-8 content-center">
                    <CreateLogo
                        containerSize={{ width: 300, height: 280 }}
                        imageSize={{ width: 200, height: 200 }}
                        logoSVG={logo.svg}
                        logoAlign={logoAlign}
                        title={typography.title.text}
                        slogan={typography.slogan.text}
                        style={{
                            title: {
                                fontFamily: typography.title.fontFamily,
                                fontSize: typography.title.fontSize,
                            },
                            slogan: {
                                fontFamily: typography.slogan.fontFamily,
                                fontSize: typography.slogan.fontSize,
                            },
                        }}
                    />
                </div>
                <div className="m-2 lg:m-16">{renderRightSidePanel()}</div>
            </div>
        </div>
    )
}

export default Creator
