import * as React from "react"
import { SliderPicker } from "react-color"

export type ColorData = {
    backgroundColor: string
    logoColor: string
    titleColor: string
    sloganColor: string
}

export const defaultValues = {
    backgroundColor: "#31446C",
    logoColor: "#FFFFFF",
    titleColor: "#FFFFFF",
    sloganColor: "#FFFFFF",
}

type SelectColorProps = {
    colors: ColorData
    setColors: React.Dispatch<React.SetStateAction<ColorData>>
}

const SelectColor: React.FunctionComponent<SelectColorProps> = (props: SelectColorProps) => {
    const { colors, setColors } = props

    const onBackgroundColor = (value: { hex: string }) => {
        colors.backgroundColor = value.hex
        setColors({ ...colors })
    }

    const onTitleColor = (value: { hex: string }) => {
        colors.titleColor = value.hex
        setColors({ ...colors })
    }

    const onSloganColor = (value: { hex: string }) => {
        colors.sloganColor = value.hex
        setColors({ ...colors })
    }

    const onLogoColor = (value: { hex: string }) => {
        colors.logoColor = value.hex
        setColors({ ...colors })
    }

    return (
        <div style={{ width: 200 + "px" }}>
            <p>Background Color</p>
            <SliderPicker color={colors.backgroundColor} onChangeComplete={onBackgroundColor} />
            <p>Logo Color</p>
            <SliderPicker color={colors.logoColor} onChangeComplete={onLogoColor} />
            <p>Title Color</p>
            <SliderPicker color={colors.titleColor} onChangeComplete={onTitleColor} />
            <p>Slogan Color</p>
            <SliderPicker color={colors.sloganColor} onChangeComplete={onSloganColor} />
        </div>
    )
}

export default SelectColor
