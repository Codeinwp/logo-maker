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
            <div className="flex flex-col content-center justify-center bg-green-200 w-2/3 lg:w-2/5 m-8 p-4 ">
                <div className="flex flex-col bg-orange-200 my-4">
                    <h1 className="text-4xl text-center">Add your business name</h1>
                    <p className="text-xl text-center">
                        You can change this information after you designs have been created
                    </p>
                </div>
                <div className="bg-blue-200 my-4">
                    <div className="flex flex-col mx-16 my-4">
                        <label htmlFor="logo-text-input">Logo Text</label>
                        <input
                            type="text"
                            id="logo-text-input"
                            value={UIStore.useState((s) => s.title.text)}
                            onChange={(e) => setTitleText(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mx-16 my-4">
                        <label htmlFor="slogan-text-input">Slogan text(Optional)</label>
                        <input
                            type="text"
                            id="slogan-text-input"
                            value={UIStore.useState((s) => s.slogan.text)}
                            onChange={(e) => setSloganText(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        to="/"
                    >
                        Creator
                    </Link>
                    <Link
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
