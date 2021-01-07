import * as React from "react"
import { Link } from "react-router-dom"
import logos from "./assets/logos/index"
import CreateLogo from "./components/CreateLogo"
import UIStore from "./stores/UIStore"

import { presets } from "./assets/fonts/index"

import BackUI from "./assets/ui/BackUI"
import ThemeisleUI from "./assets/ui/ThemeisleUI"
import classnames from "classnames"
import presetColors from "./assets/colors"
import "../src/assets/styles/Showcase/showcase.scss"
import { LogoAlignOptions } from "./components/ui/SelectLayout"

import ReactGA from "react-ga"

function fillArrayWithRepeat<T>(
    array: T[],
    desiredLength: number,
    filter?: (x: T) => boolean
): T[] {
    const _array: T[] = []
    let index = 0

    if (filter === undefined) {
        // if the filter is not defined, assign a function that will pass anything
        filter = () => true
    }

    while (_array.length < desiredLength) {
        if (filter(array[index])) {
            _array.push(array[index])
        } else {
            console.log("Invalid")
        }

        if (index < array.length - 1) {
            index++
        } else {
            index = 0
        }
    }

    return _array
}

const Showcase: React.FunctionComponent<unknown> = () => {
    const store = UIStore.useState((s) => s)

    const [option, setOption] = React.useState<number>(0)
    const [colors, setColors] = React.useState<string[]>([])
    const [aligns, setAligns] = React.useState<LogoAlignOptions[]>([])
    const [fontsList, setFontsList] = React.useState<{ title: string; slogan: string }[]>([])

    React.useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search)

        setColors(fillArrayWithRepeat(presetColors, logos.length, (x) => x !== "#fff"))
        setFontsList(fillArrayWithRepeat(presets, logos.length))

        const generateAlignsOption = () => {
            const list: LogoAlignOptions[] = []
            for (let i = 0; i < logos.length; ++i) {
                const option = Math.floor(Math.random() * 3 + 1)
                switch (option) {
                    case 1:
                        list.push("align-left")
                        break
                    case 2:
                        list.push("align-right")
                        break
                    case 3:
                        list.push("align-top")
                        break
                }
            }

            return list
        }
        setAligns(generateAlignsOption())
    }, [])

    const setTemplate = (index: number) => {
        UIStore.update((s) => {
            s.logo.src = logos[index]
            s.container.style.color = colors[index]
            s.container.align = aligns[index]
            s.title.style.fontFamily = fontsList[index].title
            s.slogan.style.fontFamily = fontsList[index].slogan
        })
    }

    const renderLogoList = () => {
        if (!colors.length && !fontsList.length && !aligns.length) {
            return <div className="content-loader"></div>
        }

        const result = logos.map((logoSRC, index) => {
            return (
                <Link
                    to="/creator"
                    className={classnames("logo")} //, { active: index === option })}
                    key={logoSRC.id}
                    onClick={() => {
                        // e.preventDefault()
                        setOption(index)
                        setTemplate(index)
                    }}
                >
                    <CreateLogo
                        // className={classnames({ active: index === option })}
                        logoProps={{
                            ...store,
                            container: {
                                ...store.container,
                                width: 345,
                                height: 280,
                                align: aligns[index],
                                viewbox: {
                                    x: 0,
                                    y: 0,
                                    width: 100,
                                    height: 100,
                                },
                                style: {
                                    color: colors[index],
                                },
                            },
                            logo: {
                                ...store.logo,
                                src: logoSRC,
                            },
                            title: {
                                ...store.title,
                                style: {
                                    ...store.title.style,
                                    fontFamily: fontsList[index].title,
                                    fontSize: 24,
                                },
                            },
                            slogan: {
                                ...store.slogan,
                                style: {
                                    ...store.slogan.style,
                                    fontFamily: fontsList[index].slogan,
                                    fontSize: 12,
                                },
                            },
                        }}
                    />
                </Link>
            )
        })

        return result
    }

    return (
        <div className="logo-showcase logo-maker-container">
            <div className="top-section">
                <BackUI className="absolute" />
                <ThemeisleUI />
            </div>
            <div className="content-section">
                <div className="titles">
                    <h1>Choose from any of the logo templates</h1>
                    <p>You can change this information after your designs have been created</p>
                </div>
                <div className="content">
                    <div className="logos-container">{renderLogoList()}</div>
                </div>
            </div>
            <div className="next">
                <Link
                    className="block"
                    to="/creator"
                    onClick={() => {
                        if (option) {
                            setTemplate(option)
                        }
                    }}
                >
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Showcase
