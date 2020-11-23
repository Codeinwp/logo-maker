import * as React from "react"
import { render } from "react-dom"
import Application from "./Application"


window.addEventListener('load', (event) => {
	console.log(document.querySelector("#themeisle-logo-maker-root"))
	render(<Application />, document.querySelector("#themeisle-logo-maker-root"))
})
