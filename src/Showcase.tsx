import * as React from "react"
import { Link } from "react-router-dom"
import logos, { LogoSVGImport } from "./assets/logos"
import CreateLogo from "./components/CreateLogo"
import UIStore from "./stores/LogoModel"

const Showcase: React.FunctionComponent<unknown> = () => {
    const store = UIStore.useState((s) => s)

    const setLogo = (logo: LogoSVGImport) => {
        UIStore.update((s) => {
            s.logo.src = logo
        })
    }

    const renderLogoList = () => {
        return logos.map((logoSRC) => (
            <button
                className="hover:border-2 hover:border-blue-600"
                key={logoSRC.id}
                onClick={() => setLogo(logoSRC)}
            >
                <CreateLogo
                    logoProps={{
                        ...store,
                        container: {
                            ...store.container,
                            width: 300,
                            height: 250,
                            viewbox: {
                                x: 0,
                                y: 0,
                                width: 300,
                                height: 250,
                            },
                        },
                        logo: {
                            ...store.logo,
                            src: logoSRC,
                        },
                    }}
                />
            </button>
        ))
    }

    return (
        <div className="static flex flex-col items-center">
            <div>
                <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded"
                    to="/start"
                >
                    Back
                </Link>
            </div>
            <div className="m-4 lg:w-4/5">
                <div className="flex flex-col bg-orange-200 my-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-center">
                        Choose from any of the logo templates
                    </h1>
                    <p className="text-sm md:text-xl font-bold text-center">
                        You can change this information after your designs have been created
                    </p>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
                        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                            {renderLogoList()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center absolute sticky bottom-0 bg-white">
                <Link
                    className=" block w-4/5 lg:w-1/5 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                    to="/"
                >
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Showcase
