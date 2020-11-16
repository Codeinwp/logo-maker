import * as React from "react"
import { Link } from "react-router-dom"
import BackUI from "./assets/ui/BackUI"
import ThemeisleUI from "./assets/ui/ThemeisleUI"
import UIStore from "./stores/UIStore"

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
        <div className="flex flex-col items-center justify-center">
            <div className="relative flex flex-row mt-4 mb-2 lg:mb-16 w-full items-center justify-center">
                <BackUI className="absolute left-0 top-0 ml-24 invisible lg:visible" />
                <ThemeisleUI />
            </div>
            <div className="flex flex-col content-center justify-center lg:w-3/5 m-4 p-4 ">
                <div className="flex flex-col my-2">
                    <h1 className="title">
                        Add your business name
                    </h1>
                    <p className="text-sm md:text-xl font-light text-center font-nato-sans text-tigray">
                        You can change this information after you designs have been created
                    </p>
                </div>
                <div className=" my-2 lg:py-2 lg:px-8">
                    <div className="flex flex-col lg:mx-16 my-4 p-1">
                        <label
                            className="block text-sm mb-2 font-medium text-tigrayalt"
                            htmlFor="logo-text-input text-md"
                        >
                            Logo Text
                        </label>
                        <input
                            type="text"
                            id="logo-text-input"
                            value={UIStore.useState((s) => s.title.text)}
                            onChange={(e) => setTitleText(e.target.value)}
                            className="appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex flex-col lg:mx-16 my-2 p-1">
                        <label
                            className="block text-sm mb-2 font-medium text-tigrayalt"
                            htmlFor="slogan-text-input"
                        >
                            Slogan text (Optional)
                        </label>
                        <input
                            type="text"
                            id="slogan-text-input"
                            value={UIStore.useState((s) => s.slogan.text)}
                            onChange={(e) => setSloganText(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center text-white">
                    <Link
                        className="bg-blue-500 m-1 lg:w-1/5 hover:bg-blue-700 uppercase font-bold text-center py-2 px-4 rounded"
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
