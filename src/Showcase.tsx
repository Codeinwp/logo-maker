import * as React from "react"
import { Link } from "react-router-dom"
import logos from "./assets/logos/index"
import CreateLogo from "./components/CreateLogo"
import UIStore from "./stores/UIStore"

import { presets } from "./assets/fonts/index"

import BackUI from "./components/ui/common/BackUI"
import ThemeisleUI from "./components/ui/common/ThemeisleUI"
import classnames from "classnames"
import presetColors from "./assets/colors"
import "../src/assets/styles/Showcase/showcase.scss"
import { LogoAlignOptions } from "./components/ui/SelectLayout"

import ReactGA from "react-ga"

/**
 * This function will create another array based on the given length. If the lenght is greater that the lenght of the input array, it will repeats its values until reach the desired length. It also applis a filter function when generating the values. If the filter is not provided, the indentity function will be used as a provider.
 *
 * @param array The reference array
 * @param desiredLength The length of the returned array
 * @param filter A function for filtering unwanted elements from the given array
 * @returns An array with repeteated ( & filtered) values from the given array
 */
function fillArrayWithRepeat<T>(array: T[], desiredLength: number, filter?: (x: T) => boolean): T[] {
    const _array: T[] = []
    let index = 0

    if (filter === undefined) {
        // if the filter is not defined, assign a function that will pass anything
        filter = () => true
    }

    while (_array.length < desiredLength) {
        if (filter(array[index])) {
            _array.push(array[index])
        }

        if (index < array.length - 1) {
            index++
        } else {
            index = 0
        }
    }

    return _array
}

/**
 * This function will crate the main component for the Showcase page
 */
const Showcase: React.FunctionComponent<unknown> = () => {
    const store = UIStore.useState((s) => s)

    const [option, setOption] = React.useState<number>(0)
    const [colors, setColors] = React.useState<string[]>([])
    const [aligns, setAligns] = React.useState<LogoAlignOptions[]>([])
    const [fontsList, setFontsList] = React.useState<{ title: string; slogan: string }[]>([])

    /**
     * Create the templates
     */
    React.useEffect(() => {
        if (window.logomaker?.googleAnalyticsCode) {
            ReactGA.pageview(window.location.pathname + window.location.hash + window.location.search)
        }

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

    /**
     * Set the current values of the templet to the user interface store
     *
     * @param index The index of templet
     */
    const setTemplate = (index: number) => {
        if (window.logomaker?.googleAnalyticsCode) {
            ReactGA.event({
                category: "Logo Maker Showcase",
                action: "Logo Choosed",
                label: `Logo ID: ${logos[index].id}`,
                value: 1,
            })
        }
        UIStore.update((s) => {
            s.logo.src = logos[index]

            s.container.style.color = colors[index]
            s.container.align = aligns[index]

            s.title.style.fontFamily = fontsList[index].title
            s.title.style.fontSize = 32

            s.slogan.style.fontFamily = fontsList[index].slogan
            s.slogan.style.fontSize = 16
        })
    }

    /**
     * Render the template. Render a spiner, if the templates are not initialize
     */
    const renderLogoList = () => {
        if (!colors.length && !fontsList.length && !aligns.length) {
            return <div className="content-loader"></div>
        }

        return logos.map((logoSRC, index) => {
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
                        className="logo-svg"
                        logoProps={{
                            ...store,
                            container: {
                                ...store.container,
                                width: 345,
                                height: 281,
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
                                    fontSize: 32,
                                },
                            },
                            slogan: {
                                ...store.slogan,
                                style: {
                                    ...store.slogan.style,
                                    fontFamily: fontsList[index].slogan,
                                    fontSize: 16,
                                },
                            },
                        }}
                    />
                </Link>
            )
        })
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
