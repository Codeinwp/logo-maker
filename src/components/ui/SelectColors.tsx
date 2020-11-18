import * as React from "react"
import { SliderPicker } from "react-color"
import UIStore from "../../stores/UIStore"

const SelectColor: React.FunctionComponent<unknown> = () => {
    const onBackgroundColor = (value: { hex: string }) => {
        UIStore.update((s) => {
            s.container.style.color = value.hex
        })
    }

    const onTitleColor = (value: { hex: string }) => {
        UIStore.update((s) => {
            s.title.style.color = value.hex
        })
    }

    const onSloganColor = (value: { hex: string }) => {
        UIStore.update((s) => {
            s.slogan.style.color = value.hex
        })
    }

    const onLogoColor = (value: { hex: string }) => {
        UIStore.update((s) => {
            s.logo.style.fill = value.hex
        })
    }

    return (
        <div className="select-colors">
            <h1>COLOR PALETTE</h1>
            <p>Background Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.container.style.color)}
                onChangeComplete={onBackgroundColor}
            />
            <p>Logo Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.logo.style.fill)}
                onChangeComplete={onLogoColor}
            />
            <p>Title Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.title.style.color)}
                onChangeComplete={onTitleColor}
            />
            <p>Slogan Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.slogan.style.color)}
                onChangeComplete={onSloganColor}
            />
        </div>
    )
}

export default SelectColor
