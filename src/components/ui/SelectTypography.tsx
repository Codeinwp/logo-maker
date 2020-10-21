import * as React from "react"
import Select from "react-select"

export type TypographyData = {
    title: {
        text: string
        fontFamily: string
        fontSize: number
    }
    slogan: {
        text: string
        fontFamily: string
        fontSize: number
    }
}

export const defaultValues = {
    title: {
        text: "Optimole",
        fontFamily: "Times New Roman",
        fontSize: 40,
    },
    slogan: {
        text: "The best service for image optimization.",
        fontFamily: "Times New Roman",
        fontSize: 24,
    },
}

type SelectTypographyProps = {
    typography: TypographyData
    setTypography: React.Dispatch<React.SetStateAction<TypographyData>>
}

const SelectTypography: React.FunctionComponent<SelectTypographyProps> = (
    props: SelectTypographyProps
) => {
    const { typography, setTypography } = props

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
        typography.title.text = value
        setTypography({
            ...typography,
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTitleFontFamilyChange = (value: any) => {
        typography.title.fontFamily = value.value
        setTypography({
            ...typography,
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTitleFontSizeChange = (value: any) => {
        typography.title.fontSize = value.value
        setTypography({
            ...typography,
        })
    }

    const onSloganTextChange = (value: string) => {
        typography.slogan.text = value
        setTypography({
            ...typography,
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSloganFontFamilyChange = (value: any) => {
        typography.slogan.fontFamily = value.value
        setTypography({
            ...typography,
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSloganFontSizeChange = (value: any) => {
        typography.slogan.fontSize = value.value
        setTypography({
            ...typography,
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
                    value={typography.title.text}
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
                    value={typography.slogan.text}
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
