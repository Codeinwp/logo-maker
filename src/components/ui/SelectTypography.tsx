import * as React from "react"
import Select from "react-select"
import fonts from "../../assets/fonts/fonts"
import UIStore from "../../stores/UIStore"

const SelectTypography: React.FunctionComponent<unknown> = () => {
    const fontOptions = fonts.map((font) => ({
        value: font,
        label: font,
    }))

    const titleSizeOptions = [...Array(25).keys()]
        .map((size) => size + 38)
        .map((size) => ({
            value: size,
            label: size.toString(),
        }))

    const sloganSizeOptions = [...Array(25).keys()]
        .map((size) => size + 18)
        .map((size) => ({
            value: size,
            label: size.toString(),
        }))

    const onTitleTextChange = (value: string) => {
        UIStore.update((s) => {
            s.title.text = value
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTitleFontFamilyChange = ({ value }: any) => {
        console.log(value)
        UIStore.update((s) => {
            s.title.style.fontFamily = value
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTitleFontSizeChange = ({ value }: any) => {
        UIStore.update((s) => {
            s.title.style.fontSize = value
        })
    }

    const onSloganTextChange = (value: string) => {
        UIStore.update((s) => {
            s.slogan.text = value
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSloganFontFamilyChange = ({ value }: any) => {
        UIStore.update((s) => {
            s.slogan.style.fontFamily = value
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSloganFontSizeChange = ({ value }: any) => {
        UIStore.update((s) => {
            s.slogan.style.fontSize = value
        })
    }

    const disableBoxShadow = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control: (base: any) => ({
            ...base,
            boxShadow: "none",
        }),
    }

    const defaultTitleFontFamily = UIStore.useState((s) => s.title.style.fontFamily)
    const defaultTitleFontSize = UIStore.useState((s) => s.title.style.fontSize)

    const defaultSloganFontFamily = UIStore.useState((s) => s.slogan.style.fontFamily)
    const defaultSloganFontSize = UIStore.useState((s) => s.slogan.style.fontSize)

    return (
        <div className="select-typography">
            <div className="title-options">
                <h1>LOGO</h1>
                <label htmlFor="select-title-text">Text</label>
                <input
                    value={UIStore.useState((s) => s.title.text)}
                    onChange={(e) => onTitleTextChange(e.target.value)}
                />
                <label htmlFor="select-title-font-family">Font Family</label>
                <Select
                    id="select-title-font-family"
                    className="font-select"
                    isSearchable={false}
                    defaultValue={fontOptions.filter(
                        ({ value }) => value === defaultTitleFontFamily
                    )}
                    onChange={onTitleFontFamilyChange}
                    options={fontOptions}
                    styles={disableBoxShadow}
                />
                <label htmlFor="select-title-font-size">Font Size</label>
                <Select
                    id="select-title-font-size"
                    className="font-select"
                    isSearchable={false}
                    defaultValue={titleSizeOptions.filter(
                        ({ value }) => value === defaultTitleFontSize
                    )}
                    options={titleSizeOptions}
                    onChange={onTitleFontSizeChange}
                    styles={disableBoxShadow}
                />
            </div>
            <div className="slogan-options">
                <h1>SLOGAN (Optional)</h1>
                <label htmlFor="select-slogan-text">Text</label>
                <input
                    value={UIStore.useState((s) => s.slogan.text)}
                    onChange={(e) => onSloganTextChange(e.target.value)}
                />
                <label htmlFor="select-slogan-font-family">Font Family</label>
                <Select
                    id="select-slogan-font-family"
                    className="font-select"
                    isSearchable={false}
                    defaultValue={fontOptions.filter(
                        ({ value }) => value === defaultSloganFontFamily
                    )}
                    onChange={onSloganFontFamilyChange}
                    options={fontOptions}
                    styles={disableBoxShadow}
                />
                <label htmlFor="select-slogan-font-size">Font Size</label>
                <Select
                    id="select-slogan-font-size"
                    className="font-select"
                    isSearchable={false}
                    defaultValue={sloganSizeOptions.filter(
                        ({ value }) => value === defaultSloganFontSize
                    )}
                    options={sloganSizeOptions}
                    onChange={onSloganFontSizeChange}
                    styles={disableBoxShadow}
                />
            </div>
        </div>
    )
}

export default SelectTypography
