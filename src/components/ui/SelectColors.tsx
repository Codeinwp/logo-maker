import * as React from "react"
import UIStore from "../../stores/UIStore"
// import presetColors from "../../assets/colors/index"
import classnames from "classnames"
import ColorPicker from "./common/ColorPicker"

/**
 * This function will generate the `Select Coloros Meniu` from design
 */
const SelectColor: React.FunctionComponent<unknown> = () => {
    const [isColorEditorOpen, toggleColorEditor] = React.useState({
        background: false,
        logo: false,
        title: false,
        slogan: false,
    })

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

    /**
     * This function will handle inputs by updating the internal & user interface store values.
     *
     * @param option The owner of the color
     * @param value The value of the color
     */
    const onInputChangeFor = (option: "background" | "logo" | "title" | "slogan", value: string) => {
        // send the values to the user interface
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

        // before send it to the store, check if the value is a valid hex color
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

    /**
     * This will show/hide the color picker of the element
     *
     * @param option The element bound to the toggle
     */
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
            <span>
                Press on the square to toggle the color picker.
            </span>
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
                        id="input-color-background"
                        value={inputValues.background}
                        onChange={(e) => onInputChangeFor("background", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.background && (
                    // <SliderPicker
                    //     color={colors.background}
                    //     // presetColors={presetColors}
                    //     onChange={(c, event) => {
                    //         event.stopPropagation()
                    //         onInputChangeFor("background", c.hex)
                    //         disableBodyScroll(document.body)
                    //     }}
                    //     onChangeComplete={(c, event) => {
                    //         event.stopPropagation()
                    //         enableBodyScroll(document.body)
                    //     }}

                    // // disableAlpha={true}
                    // />
                    <ColorPicker
                        color={colors.background}
                        onChange={(c) => {
                            onInputChangeFor("background", c.hex)
                        }}
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
                        id="input-color-logo"
                        value={inputValues.logo}
                        onChange={(e) => onInputChangeFor("logo", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.logo && (
                    // <SliderPicker
                    //     color={colors.logo}
                    //     // presetColors={presetColors}
                    //     onChange={(c, event) => {
                    //         event.stopPropagation()
                    //         onInputChangeFor("logo", c.hex)
                    //         disableBodyScroll(document.body)
                    //     }}
                    //     onChangeComplete={(c, event) => {
                    //         event.stopPropagation()
                    //         enableBodyScroll(document.body)
                    //     }}
                    // // disableAlpha={true}
                    // />
                    <ColorPicker
                        color={colors.logo}
                        onChange={(c) => {
                            onInputChangeFor("logo", c.hex)
                        }}
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
                        id="input-color-title"
                        value={inputValues.title}
                        placeholder="Add a color in HEX format."
                        onChange={(e) => onInputChangeFor("title", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.title && (
                    // <SliderPicker
                    //     color={colors.title}
                    //     // presetColors={presetColors}
                    //     onChange={(c, event) => {
                    //         event.stopPropagation()
                    //         onInputChangeFor("title", c.hex)
                    //         disableBodyScroll(document.body)
                    //     }}
                    //     onChangeComplete={(c, event) => {
                    //         event.stopPropagation()
                    //         enableBodyScroll(document.body)
                    //     }}
                    // // disableAlpha={true}
                    // />
                    <ColorPicker
                        color={colors.title}
                        onChange={(c) => {
                            onInputChangeFor("title", c.hex)
                        }}
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
                        id="input-color-slogan"
                        value={inputValues.slogan}
                        onChange={(e) => onInputChangeFor("slogan", e.target.value)}
                    />
                </div>
                {isColorEditorOpen.slogan && (
                    // <SliderPicker
                    //     // onSwatchHover={(c, event) => {
                    //     //     event.stopPropagation()
                    //     // }}
                    //     color={colors.slogan}
                    //     // presetColors={presetColors}
                    //     onChange={(c, event) => {
                    //         event.stopPropagation()
                    //         onInputChangeFor("slogan", c.hex)
                    //         disableBodyScroll(document.body)
                    //     }}
                    //     onChangeComplete={(c, event) => {
                    //         event.stopPropagation()
                    //         enableBodyScroll(document.body)
                    //     }}
                    // // disableAlpha={true}
                    // />
                    <ColorPicker
                        color={colors.slogan}
                        onChange={(c) => {
                            onInputChangeFor("slogan", c.hex)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default SelectColor
