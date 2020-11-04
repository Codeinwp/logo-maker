import * as React from "react"
import { SliderPicker } from "react-color"
import UIStore from "~/stores/UIStore"

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
        <div>
            <h1 className="text-xl text-gray-500">COLOR PALETTE</h1>
            <p className="my-1">Background Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.container.style.color)}
                onChangeComplete={onBackgroundColor}
            />
            <p className="my-1">Logo Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.logo.style.fill)}
                onChangeComplete={onLogoColor}
            />
            <p className="my-1">Title Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.title.style.color)}
                onChangeComplete={onTitleColor}
            />
            <p className="my-1">Slogan Color</p>
            <SliderPicker
                color={UIStore.useState((s) => s.slogan.style.color)}
                onChangeComplete={onSloganColor}
            />
        </div>
    )
}

export default SelectColor
