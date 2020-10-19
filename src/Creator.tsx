import * as React from "react"
import CreateLogo from "./components/CreateLogo"
import SelectLogo from "./components/SelectLogo"

type MenuOptions = "logo" | "typography" | "layout" | "colors"

const Creator: React.FunctionComponent<unknown> = () => {
    const [menuOption, setMenuOption] = React.useState<MenuOptions>("logo")

    const renderRightSidePanel = () => {
        switch (menuOption) {
            case "logo":
                return <SelectLogo />
            case "layout":
                return <div>layout</div>
            case "typography":
                return <div>typography</div>
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
                    <CreateLogo containerSize={{ width: 300, height: 280 }} />
                </div>
                <div className="m-2 lg:m-16">{renderRightSidePanel()}</div>
            </div>
        </div>
    )
}

export default Creator
