import * as React from "react"
import Select, { ValueType } from "react-select"

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
        <div className="w-24" style={{ minWidth: 280 + "px" }}>
            <div>
                <h1>LOGO</h1>
                <label htmlFor="select-title-text">Font Family</label>
                <input
                    value={typography.title.text}
                    onChange={(e) => onTitleTextChange(e.target.value)}
                />
                <label htmlFor="select-title-font-family">Font Family</label>
                <Select
                    id="select-title-font-family"
                    onChange={onTitleFontFamilyChange}
                    options={fontOptions}
                />
                <label htmlFor="select-title-font-size">Font Size</label>
                <Select
                    id="select-title-font-size"
                    options={titleSizeOptions}
                    onChange={onTitleFontSizeChange}
                />
            </div>
            <div>
                <h1>SLOGAN</h1>
                <label htmlFor="select-slogan-text">Font Family</label>
                <input
                    value={typography.slogan.text}
                    onChange={(e) => onSloganTextChange(e.target.value)}
                />
                <label htmlFor="select-slogan-font-family">Font Family</label>
                <Select
                    id="select-slogan-font-family"
                    onChange={onSloganFontFamilyChange}
                    options={fontOptions}
                />
                <label htmlFor="select-slogan-font-size">Font Size</label>
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
