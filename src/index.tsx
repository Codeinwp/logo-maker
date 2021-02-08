import * as React from "react"
import { render } from "react-dom"
import Application from "./Application"

window.addEventListener("load", () => {
    render(((<Application /> as React.ReactElement<unknown>)), document.querySelector("#themeisle-logo-maker-root"))
})
