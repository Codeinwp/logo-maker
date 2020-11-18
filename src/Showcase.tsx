import * as React from "react"
import { Link } from "react-router-dom"
import logos from "./assets/logos"
import CreateLogo from "./components/CreateLogo"
import UIStore from "./stores/UIStore"
import ColorScheme from "color-scheme"
import { presets } from "./assets/fonts/fonts"
import { AssetsStore } from "./stores/AssetsStore"
import BackUI from "./assets/ui/BackUI"
import ThemeisleUI from "./assets/ui/ThemeisleUI"
import classnames from "classnames"
import "../src/assets/styles/Showcase/showcase.scss"

const defaultFontsList = new Array(logos.length).fill("Arial")

const Showcase: React.FunctionComponent<unknown> = () => {
    const store = UIStore.useState((s) => s)
    const fontsStore = AssetsStore.useState((s) => s)

    const [option, setOption] = React.useState<number>(0)
    const [colors, setColors] = React.useState<string[]>([])
    const [fontsList, setFontsList] = React.useState<{ title: string; slogan: string }[]>(
        defaultFontsList
    )

    React.useEffect(() => {
        // Generate the colors
        const generateColors = () => {
            const scm = new ColorScheme()
            const colorsNum = new Set()

            const step = 360 / logos.length
            for (let i = 0; i < logos.length; ++i) {
                colorsNum.add(step * i)
            }

            const colors: string[] = []
            colorsNum.forEach((x) => {
                scm.from_hue(x).scheme("triade").distance(0.8).variation("hard").web_safe(true)

                colors.push("#" + scm.colors()[1])
            })

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
    }, [fontsStore])

    const setTemplate = (index: number) => {
        UIStore.update((s) => {
            s.logo.src = logos[index]
            s.container.style.color = colors[index]
            s.title.style.fontFamily = fontsList[index].title
            s.slogan.style.fontFamily = fontsList[index].slogan
        })
    }

    const renderLogoList = () => {
        if (!colors.length) {
            return
        }
        console.time("render-logos")
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
                                },
                            },
                            slogan: {
                                ...store.slogan,
                                style: {
                                    ...store.slogan.style,
                                    fontFamily: fontsList[index].slogan,
                                },
                            },
                        }}
                    />
                </button>
            )
        })
        console.timeEnd("render-logos")
        return result
    }

    return (
        <div className="logo-showcase">
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
                    <div className="logos-container">
                        <div className="logos">{renderLogoList()}</div>
                    </div>
                </div>
            </div>
            <div className="next">
                <Link className="block" to="/" onClick={() => setTemplate(option)}>
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Showcase
