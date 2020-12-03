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

const defaultFontsList = new Array(logos.length).fill("sans-serif")

const Showcase: React.FunctionComponent<unknown> = () => {
    const store = UIStore.useState((s) => s)

    const [option, setOption] = React.useState<number>(0)
    const [colors, setColors] = React.useState<string[]>([])
    const [aligns, setAligns] = React.useState<LogoAlignOptions[]>([])
    const [fontsList, setFontsList] = React.useState<{ title: string; slogan: string }[]>(
        defaultFontsList
    )

    React.useEffect(() => {
        // Generate the colors
        const generateColors = () => {
            // const scm = new ColorScheme()
            // const colorsNum = new Set()

            // const step = 360 / logos.length
            // for (let i = 0; i < logos.length; ++i) {
            //     colorsNum.add(step * i)
            // }

            // const colors: string[] = []
            // colorsNum.forEach((x) => {
            //     scm.from_hue(x).scheme("triade").distance(0.8).variation("hard").web_safe(true)

            //     colors.push("#" + scm.colors()[1])
            // })
            const colors: string[] = []
            let index = 0
            while (colors.length < logos.length) {
                if (presetColors[index] !== "#fff") {
                    colors.push(presetColors[index])
                }
                index++
                if (index >= presetColors.length) {
                    index = 0
                }
            }
            console.log(presetColors, colors)
            return colors
        }
        setColors(generateColors())

        const generateFonts = () => {
            const list = []

            let index = 0
            while (list.length < logos.length) {
                list.push(presets[index])
                index++
                if (index >= presets.length) {
                    index = 0
                }
            }

            return list
        }

        setFontsList(generateFonts())

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
        setAligns(generateAlignsOption)
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
        if (!colors.length) {
            return
        }

        const result = logos.map((logoSRC, index) => {
            return (
                <button
                    className={classnames("logo", { active: index === option })}
                    key={logoSRC.id}
                    onClick={() => {
                        // e.preventDefault()
                        setOption(index)
                    }}
                >
                    <CreateLogo
                        className={classnames({ active: index === option })}
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
                </button>
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
                <Link className="block" to="/creator" onClick={() => setTemplate(option)}>
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Showcase
