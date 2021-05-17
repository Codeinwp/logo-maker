import * as React from 'react'
import { Color, ColorChangeHandler, HuePicker } from 'react-color'

type ColorPickerProps = {
    color: Color
    onChange: ColorChangeHandler
    onChangeComplet?: ColorChangeHandler
}

const ColorPicker: React.FunctionComponent<ColorPickerProps> = (props: ColorPickerProps) => {
    return (
        <div className="color-picker-component">
            <HuePicker color={props.color} onChange={props.onChange} onChangeComplete={props?.onChangeComplet} />
        </div>
    )
}

export default ColorPicker