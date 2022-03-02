import * as React from "react"
import Select from "react-select"
import { fontsList as fonts } from "../../assets/fonts/index"
import { AssetsStore } from "../../stores/AssetsStore"
import UIStore from "../../stores/UIStore"
import { isFontFromGoogle } from "../../assets/fonts/google-fonts"

/**
 * Generate the title size options
 */
const titleSizeOptions = [...Array(35).keys()]
    .map((size) => size + 20)
    .map((size) => ({
        value: size,
        label: size.toString(),
    }));

/**
 * Generate the slogan size options
 */
const sloganSizeOptions = [...Array(35).keys()]
    .map((size) => size + 12)
    .map((size) => ({
        value: size,
        label: size.toString(),
    }))

/**
 * This function will generate the `Select Typography Menu` from design
 */
const SelectTypography: React.FunctionComponent<unknown> = () => {
    /**
     * Generate the font options
     */
    const fontOptions = [
        ...fonts,
        ...AssetsStore.useState((s) => s.fonts.activeFonts).filter((font) => isFontFromGoogle(font)),
    ]
        .sort()
        .map((font) => ({
            value: font,
            label: font,
        }))

    const onTitleTextChange = (value: string) => {
        UIStore.update((s) => {
            s.title.text = value
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTitleFontFamilyChange = ({ value }: any) => {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        option: (styles: Record<string, any>, { data }: { data: { label: string; value: string } }) => {
            return {
                ...styles,
                fontFamily: !Number.isInteger(Number.parseInt(data.value)) ? data.value : "Noto Sans",
            }
        },
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
                    id="input-typography-text"
                    value={UIStore.useState((s) => s.title.text)}
                    onChange={(e) => onTitleTextChange(e.target.value)}
                />
                <label htmlFor="select-title-font-family">Font Family</label>
                <Select
                    id="select-title-font-family"
                    className="font-select"
                    isSearchable={false}
                    defaultValue={
                        fontOptions.filter(({ value }) => value === defaultTitleFontFamily)[0] || {
                            value: "Arial",
                            label: "Arial",
                        }
                    }
                    onChange={onTitleFontFamilyChange}
                    options={fontOptions}
                    styles={disableBoxShadow}
                />
                <label htmlFor="select-title-font-size">Font Size</label>
                <Select
                    id="select-title-font-size"
                    className="font-select"
                    isSearchable={false}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    defaultValue={
                        titleSizeOptions.filter(({ value }) => value === defaultTitleFontSize)[0] || {
                            value: 53,
                            label: "53",
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    options={
                        titleSizeOptions
                    }
                    onChange={onTitleFontSizeChange}
                    styles={disableBoxShadow}
                />
            </div>
            <div className="slogan-options">
                <h1>SLOGAN (Optional)</h1>
                <label htmlFor="select-slogan-text">Text</label>
                <input
                    id="input-typography-slogan"
                    value={UIStore.useState((s) => s.slogan.text)}
                    onChange={(e) => onSloganTextChange(e.target.value)}
                />
                <label htmlFor="select-slogan-font-family">Font Family</label>
                <Select
                    id="select-slogan-font-family"
                    className="font-select"
                    isSearchable={false}
                    defaultValue={
                        fontOptions.filter(({ value }) => value === defaultSloganFontFamily)[0] || {
                            value: "Arial",
                            label: "Arial",
                        }
                    }
                    onChange={onSloganFontFamilyChange}
                    options={fontOptions}
                    styles={disableBoxShadow}
                />
                <label htmlFor="select-slogan-font-size">Font Size</label>
                <Select
                    id="select-slogan-font-size"
                    className="font-select"
                    isSearchable={false}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    defaultValue={
                        sloganSizeOptions.filter(({ value }) => value === defaultSloganFontSize)[0] || {
                            value: 24,
                            label: "24",
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    options={sloganSizeOptions}
                    onChange={onSloganFontSizeChange}
                    styles={disableBoxShadow}
                />
            </div>
        </div>
    )
}

export default SelectTypography
