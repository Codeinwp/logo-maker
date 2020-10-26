import * as React from "react"
import Select from "react-select"
import UIStore from "~/stores/LogoModel"

const SelectTypography: React.FunctionComponent<unknown> = () => {
    const fontOptions = [
        { value: "Times New Romans", label: "Times New Romans" },
        { value: "Helvetica", label: "Helvetica" },
        { value: "Menlo", label: "Menlo" },
    ]

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

    return (
        <div className="w-auto">
            <div className="container m-4 flex flex-col">
                <h1 className="text-xl my-1 text-gray-500">LOGO</h1>
                <label className="my-1" htmlFor="select-title-text">
                    Title
                </label>
                <input
                    value={UIStore.useState((s) => s.title.text)}
                    className="border p-1"
                    onChange={(e) => onTitleTextChange(e.target.value)}
                />
                <label className="my-1" htmlFor="select-title-font-family">
                    Font Family
                </label>
                <Select
                    id="select-title-font-family"
                    onChange={onTitleFontFamilyChange}
                    options={fontOptions}
                />
                <label className="my-1" htmlFor="select-title-font-size">
                    Font Size
                </label>
                <Select
                    id="select-title-font-size"
                    options={titleSizeOptions}
                    onChange={onTitleFontSizeChange}
                />
            </div>
            <div className="container m-4 flex flex-col">
                <h1 className="text-xl my-1">SLOGAN</h1>
                <label className="my-1" htmlFor="select-slogan-text">
                    Slogan
                </label>
                <input
                    value={UIStore.useState((s) => s.slogan.text)}
                    className="border m-b-1 p-1"
                    onChange={(e) => onSloganTextChange(e.target.value)}
                />
                <label className="my-1" htmlFor="select-slogan-font-family">
                    Font Family
                </label>
                <Select
                    id="select-slogan-font-family"
                    onChange={onSloganFontFamilyChange}
                    options={fontOptions}
                />
                <label className="my-1" htmlFor="select-slogan-font-size">
                    Font Size
                </label>
                <Select
                    id="select-slogan-font-size"
                    options={sloganSizeOptions}
                    onChange={onSloganFontSizeChange}
                />
            </div>
        </div>
    )
}

export default SelectTypography
