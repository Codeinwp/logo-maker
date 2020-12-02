import * as React from "react"
import { SketchPicker } from "react-color"
import UIStore from "../../stores/UIStore"
import presetColors from "../../assets/colors/index"
import classnames from "classnames"

const SelectColor: React.FunctionComponent<unknown> = () => {
    const [isColorEditorOpen, toggleColorEditor] = React.useState({
        background: false,
        logo: false,
        title: false,
        slogan: false,
    })

    // used to keep track to the valid hex color
    const [colors, setColors] = React.useState(
        UIStore.useState((s) => {
            return {
                background: s.container.style.color,
                logo: s.logo.style.fill,
                title: s.title.style.color,
                slogan: s.slogan.style.color,
            }
        })
    )

    const [inputValues, setInput] = React.useState({
        ...colors,
    })

    const onInputChangeFor = (
        option: "background" | "logo" | "title" | "slogan",
        value: string
    ) => {
        switch (option) {
            case "background":
                setInput({
                    ...inputValues,
                    background: value,
                })
                break
            case "logo":
                setInput({
                    ...inputValues,
                    logo: value,
                })
                break
            case "title":
                setInput({
                    ...inputValues,
                    title: value,
                })
                break
            case "slogan":
                setInput({
                    ...inputValues,
                    slogan: value,
                })
                break
        }

        // before send it to store, check if the value is a valid hex color
        // reference: https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444
        // check it on: https://regexr.com/
        if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i.test(value)) {
            switch (option) {
                case "background":
                    setColors({
                        ...colors,
                        background: value,
                    })
                    UIStore.update((s) => {
                        s.container.style.color = value
                    })
                    break
                case "logo":
                    setColors({
                        ...colors,
                        logo: value,
                    })
                    UIStore.update((s) => {
                        s.logo.style.fill = value
                    })
                    break
                case "title":
                    setColors({
                        ...colors,
                        title: value,
                    })
                    UIStore.update((s) => {
                        s.title.style.color = value
                    })
                    break
                case "slogan":
                    setColors({
                        ...colors,
                        slogan: value,
                    })
                    UIStore.update((s) => {
                        s.slogan.style.color = value
                    })
                    break
            }
        }
    }

    const toggleColorEditorFor = (option: "background" | "logo" | "title" | "slogan") => {
        switch (option) {
            case "background":
                toggleColorEditor({
                    ...isColorEditorOpen,
                    background: !isColorEditorOpen.background,
                })
                break
            case "logo":
                toggleColorEditor({
                    ...isColorEditorOpen,
                    logo: !isColorEditorOpen.logo,
                })
                break
            case "title":
                toggleColorEditor({
                    ...isColorEditorOpen,
                    title: !isColorEditorOpen.title,
                })
                break
            case "slogan":
                toggleColorEditor({
                    ...isColorEditorOpen,
                    slogan: !isColorEditorOpen.slogan,
                })
                break
        }
    }

    return (
        <div className="select-colors">
            <h1>COLOR PALETTE</h1>
            <p>Background Color</p>
            <div className="container">
                <div className="input-field">
                    <button
                        className={classnames({ active: isColorEditorOpen.background })}
                        style={{
                            backgroundColor: colors.background,
                        }}
                        onClick={() => toggleColorEditorFor("background")}
                    />
                    <input
                        value={inputValues.background}
                        onChange={(e) => onInputChangeFor("background", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.background && (
                    <SketchPicker
                        color={colors.background}
                        presetColors={presetColors}
                        onChange={(c) => onInputChangeFor("background", c.hex)}
                        disableAlpha={true}
                    />
                )}
            </div>

            <p>Logo Color</p>
            <div className="container">
                <div className="input-field">
                    <button
                        className={classnames({ active: isColorEditorOpen.logo })}
                        style={{
                            backgroundColor: colors.logo,
                        }}
                        onClick={() => toggleColorEditorFor("logo")}
                    />
                    <input
                        value={inputValues.logo}
                        onChange={(e) => onInputChangeFor("logo", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.logo && (
                    <SketchPicker
                        color={colors.logo}
                        presetColors={presetColors}
                        onChange={(c) => onInputChangeFor("logo", c.hex)}
                        disableAlpha={true}
                    />
                )}
            </div>

            <p>Title Color</p>

            <div className="container">
                <div className="input-field">
                    <button
                        className={classnames({ active: isColorEditorOpen.title })}
                        style={{
                            backgroundColor: colors.title,
                        }}
                        onClick={() => toggleColorEditorFor("title")}
                    />
                    <input
                        value={inputValues.title}
                        placeholder="Add a color in HEX format."
                        onChange={(e) => onInputChangeFor("title", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.title && (
                    <SketchPicker
                        color={colors.title}
                        presetColors={presetColors}
                        onChange={(c) => onInputChangeFor("title", c.hex)}
                        disableAlpha={true}
                    />
                )}
            </div>

            <p>Slogan Color</p>
            <div className="container">
                <div className="input-field">
                    <button
                        className={classnames({ active: isColorEditorOpen.slogan })}
                        style={{
                            backgroundColor: colors.slogan,
                        }}
                        onClick={() => toggleColorEditorFor("slogan")}
                    />
                    <input
                        value={inputValues.slogan}
                        onChange={(e) => onInputChangeFor("slogan", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.slogan && (
                    <SketchPicker
                        color={colors.slogan}
                        presetColors={presetColors}
                        onChange={(c) => onInputChangeFor("slogan", c.hex)}
                        disableAlpha={true}
                    />
                )}
            </div>
        </div>
    )
}

export default SelectColor
