import * as React from "react"
import { Link } from "react-router-dom"
import UIStore from "./stores/LogoModel"

const Start: React.FunctionComponent<unknown> = () => {
    const setTitleText = (value: string) => {
        UIStore.update((s) => {
            s.title.text = value
        })
    }

    const setSloganText = (value: string) => {
        UIStore.update((s) => {
            s.slogan.text = value
        })
    }

    return (
        <div className="flex content-center justify-center">
            <div className="flex flex-col content-center justify-center bg-green-200 lg:w-2/5 m-4 lg:p-4 ">
                <div className="flex flex-col bg-orange-200 my-2">
                    <h1 className="text-2xl md:text-4xl font-bold text-center">
                        Add your business name
                    </h1>
                    <p className="text-sm md:text-xl font-bold text-center">
                        You can change this information after you designs have been created
                    </p>
                </div>
                <div className="bg-blue-200 my-2">
                    <div className="flex flex-col lg:mx-16 my-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="logo-text-input text-md"
                        >
                            Logo Text
                        </label>
                        <input
                            type="text"
                            id="logo-text-input"
                            value={UIStore.useState((s) => s.title.text)}
                            onChange={(e) => setTitleText(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex flex-col lg:mx-16 my-2 ">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="slogan-text-input"
                        >
                            Slogan text(Optional)
                        </label>
                        <input
                            type="text"
                            id="slogan-text-input"
                            value={UIStore.useState((s) => s.slogan.text)}
                            onChange={(e) => setSloganText(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center">
                    <Link
                        className="bg-blue-500 m-1 lg:w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                        to="/"
                    >
                        Go to Creator
                    </Link>
                    <Link
                        className="bg-blue-500 m-1 lg:w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
                        to="/showcase"
                    >
                        Next
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start
