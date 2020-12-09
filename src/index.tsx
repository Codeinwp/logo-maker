import * as React from "react"
import { render } from "react-dom"
import Application from "./Application"

window.addEventListener("load", () => {
    render(<Application />, document.querySelector("#themeisle-logo-maker-root"))
})
