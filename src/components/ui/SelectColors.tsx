import * as React from "react"
import { TwitterPicker } from "react-color"
import UIStore from "../../stores/UIStore"
import colors from "../../assets/colors/index"

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
            <TwitterPicker
                color={UIStore.useState((s) => s.container.style.color)}
                colors={colors}
                onChangeComplete={onBackgroundColor}
            />
            <p>Logo Color</p>
            <TwitterPicker
                color={UIStore.useState((s) => s.logo.style.fill)}
                colors={colors}
                onChangeComplete={onLogoColor}
            />
            <p>Title Color</p>
            <TwitterPicker
                color={UIStore.useState((s) => s.title.style.color)}
                colors={colors}
                onChangeComplete={onTitleColor}
            />
            <p>Slogan Color</p>
            <TwitterPicker
                color={UIStore.useState((s) => s.slogan.style.color)}
                colors={colors}
                onChangeComplete={onSloganColor}
            />
        </div>
    )
}

export default SelectColor
