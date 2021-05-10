export {}
// // LEGACY

// import { SVG, Svg } from "@svgdotjs/svg.js"
// import { TLogo, TLogoContainer, TSlogan, TTitle } from "../../stores/UIStore"
// import { settings } from "./settings"
// import { Elements } from "../utility"

// const autoScallingFactor = 1.3
// const marginFactor = 0.7

// export type ContainerData = {
//     containerPos: {
//         x: number
//         y: number
//         cx: number
//         cy: number
//         width: number
//         height: number
//     }
//     containerElems: Elements
// }

// export type LogoProps = {
//     container: TLogoContainer
//     logo: TLogo
//     title: TTitle
//     slogan: TSlogan
// }

// export const alignLogoTop = (props: LogoProps, draw: Svg): ContainerData => {
//     const { logo, title, slogan } = props

//     /*
//           Add the logo's SVG
//     */

//     const logoSVG = SVG().addTo(draw).svg(logo.src.svg)
//     const svgRawDim = logoSVG.bbox() // get the natural dimension to calculate the viewbox
//     logoSVG
//         .viewbox(0, 0, svgRawDim.width + 4, svgRawDim.height + 4)
//         .size(logo.width, logo.height)
//         .css("fill", logo.style.fill)

//     const logoDim = {
//         height: settings.logo.margins.top + logo.height + settings.logo.margins.bottom,
//         width: settings.logo.margins.left + logo.width + settings.logo.margins.bottom,
//     }

//     /*
//            Add the title's SVG
//        */
//     const titleSVG = draw
//         .text(title.text)
//         .font({
//             fill: title.style.color,
//             family: title.style.fontFamily,
//             size: title.style.fontSize + "px",
//             weight: "400",
//         })
//         .leading(1)
//         .move(0, 0)
//     // console.log(titleSVG.bbox(), titleSVG.rbox())
//     titleSVG.leading(0)

//     let titleDim
//     if (props.title.text === "") {
//         titleDim = {
//             width: 0,
//             height: 0,
//         }
//     } else {
//         titleDim = {
//             height: settings.title.margins.top + titleSVG.bbox().height + settings.title.margins.bottom,
//             width: settings.title.margins.left + titleSVG.bbox().width + settings.title.margins.bottom,
//         }
//     }

//     // console.log(titleSVG.bbox())

//     /*
//            Add the slogan's SVG
//        */
//     const sloganSVG = draw
//         .text(slogan.text)
//         .font({
//             fill: slogan.style.color,
//             family: slogan.style.fontFamily,
//             size: slogan.style.fontSize + "px",
//             weight: "400",
//         })
//         .leading(1)
//         .move(0, 0)
//     sloganSVG.leading(0)

//     let sloganDim
//     if (props.slogan.text === "") {
//         sloganDim = {
//             width: 0,
//             height: 0,
//         }
//     } else {
//         sloganDim = {
//             height: settings.slogan.margins.top + sloganSVG.bbox().height + settings.slogan.margins.bottom,
//             width: settings.slogan.margins.left + sloganSVG.bbox().width + settings.slogan.margins.bottom,
//         }
//     }

//     /*
//            Align the elements
//        */

//     // the elements are vertically stacked,
//     // so the width of the container is equal with the width of the largest element
//     // and the height is the sum of all the element's height
//     const widthContainer = Math.max(logoDim.width, titleDim.width, sloganDim.width)
//     const heightContainer = logoDim.height + titleDim.height + sloganDim.height // logo.height + titleDim.height + sloganDim.height
//     const cx = widthContainer / 2
//     const cy = heightContainer / 2

//     logoSVG.move(cx - logoDim.width / 2, 0)
//     titleSVG.move(cx - titleDim.width / 2, logoDim.height)
//     sloganSVG.move(cx - sloganDim.width / 2, logoDim.height + titleDim.height)

//     const currentViewBox = draw.viewbox()

//     // AUTOSCAllING
//     // check if the current element occupy more than the initial size of the viewbox
//     draw.viewbox(
//         0,
//         0,
//         currentViewBox.width * marginFactor < widthContainer
//             ? widthContainer * autoScallingFactor
//             : currentViewBox.width,
//         currentViewBox.height * marginFactor < heightContainer
//             ? heightContainer * autoScallingFactor
//             : currentViewBox.height
//     )

//     return {
//         containerPos: {
//             x: 0,
//             y: 0,
//             cx,
//             cy,
//             width: widthContainer,
//             height: heightContainer,
//         },
//         containerElems: {
//             logoSVG,
//             titleSVG,
//             sloganSVG,
//         },
//     }
// }

// export const alignLogoLeft = (props: LogoProps, draw: Svg): ContainerData => {
//     const { logo, title, slogan } = props

//     /*
//           Add the logo's SVG
//     */

//     const logoSVG = SVG().addTo(draw).svg(logo.src.svg)
//     const svgRawDim = logoSVG.bbox() // get the natural dimension to calculate the viewbox

//     logoSVG
//         .viewbox(0, 0, svgRawDim.width + 4, svgRawDim.height + 4)
//         .size(logo.width, logo.height)
//         .css("fill", logo.style.fill)
//     const logoDim = {
//         height: settings.logo.margins.top + logo.height + settings.logo.margins.bottom,
//         width: settings.logo.margins.left + logo.width + settings.logo.margins.bottom,
//     }

//     /*
//           Add the title's SVG
//       */
//     const titleSVG = draw
//         .text(title.text)
//         .font({
//             fill: title.style.color,
//             family: title.style.fontFamily,
//             size: title.style.fontSize,
//             weight: "400",
//         })
//         .leading(1)
//         .move(0, 0)
//     titleSVG.leading(0)
//     let titleDim
//     if (props.title.text === "") {
//         titleDim = {
//             width: 0,
//             height: 0,
//         }
//     } else {
//         titleDim = {
//             height: settings.title.margins.top + titleSVG.bbox().height + settings.title.margins.bottom,
//             width: settings.title.margins.left + titleSVG.bbox().width + settings.title.margins.bottom,
//         }
//     }

//     /*
//            Add the slogan's SVG
//        */
//     const sloganSVG = draw
//         .text(slogan.text)
//         .font({
//             fill: slogan.style.color,
//             family: slogan.style.fontFamily,
//             size: slogan.style.fontSize + "px",
//             weight: "400",
//         })
//         .leading(1)
//         .move(0, 0)
//     sloganSVG.leading(0)

//     let sloganDim
//     if (props.slogan.text === "") {
//         sloganDim = {
//             width: 0,
//             height: 0,
//         }
//     } else {
//         sloganDim = {
//             height: settings.slogan.margins.top + sloganSVG.bbox().height + settings.slogan.margins.bottom,
//             width: settings.slogan.margins.left + sloganSVG.bbox().width + settings.slogan.margins.bottom,
//         }
//     }

//     // the elements are vertically stacked,
//     // so the width of the container is equal with the width of the largest element
//     // and the height is the sum of all the element's height
//     const widthContainer = logo.width + Math.max(titleDim.width, sloganDim.width)
//     const heightContainer = Math.max(logo.height, titleDim.height + sloganDim.height)
//     const cx = widthContainer / 2
//     const cy = heightContainer / 2

//     // Calculate the dimension for the box that contains the title and the slogan
//     const textContainerWidth =
//         Math.max(titleDim.width, sloganDim.width) +
//         settings.textContainer.margins.left +
//         settings.textContainer.margins.right
//     // const textContainerHeight =
//     //     titleDim.height +
//     //     sloganDim.height +
//     //     settings.textContainer.margins.top +
//     //     settings.textContainer.margins.bottom
//     const ctx = textContainerWidth / 2
//     // const cty = textContainerHeight / 2

//     // Move elements to their position
//     logoSVG.move(0, cy - logoDim.height / 2)
//     titleSVG.move(logoDim.width + ctx - titleDim.width / 2, cy - titleDim.height / 2)

//     sloganSVG.move(
//         logoDim.width + ctx - sloganDim.width / 2,
//         cy + titleDim.height / 2 // + sloganDim.height / 2
//     )

//     // AUTOSCAllING
//     // check if the current element occupy more than the initial size of the viewbox
//     const currentViewBox = draw.viewbox()
//     draw.viewbox(
//         0,
//         0,
//         currentViewBox.width * marginFactor < widthContainer
//             ? widthContainer * autoScallingFactor
//             : currentViewBox.width,
//         currentViewBox.height * marginFactor < heightContainer
//             ? heightContainer * autoScallingFactor
//             : currentViewBox.height
//     )

//     return {
//         containerPos: {
//             x: 0,
//             y: 0,
//             cx,
//             cy,
//             width: widthContainer,
//             height: heightContainer,
//         },
//         containerElems: {
//             logoSVG,
//             titleSVG,
//             sloganSVG,
//         },
//     }
// }

// export const alignLogoRight = (props: LogoProps, draw: Svg): ContainerData => {
//     const { logo, title, slogan } = props

//     /*
//           Add the logo's SVG
//     */

//     const logoSVG = SVG().addTo(draw).svg(logo.src.svg)
//     const svgRawDim = logoSVG.bbox() // get the natural dimension to calculate the viewbox

//     logoSVG
//         .viewbox(0, 0, svgRawDim.width + 4, svgRawDim.height + 4)
//         .size(logo.width, logo.height)
//         .css("fill", logo.style.fill)
//     const logoDim = {
//         height: settings.logo.margins.top + logo.height + settings.logo.margins.bottom,
//         width: settings.logo.margins.left + logo.width + settings.logo.margins.bottom,
//     }
//     /*
//           Add the title's SVG
//       */
//     const titleSVG = draw
//         .text(title.text)
//         .font({
//             fill: title.style.color,
//             family: title.style.fontFamily,
//             size: title.style.fontSize,
//             weight: "400",
//         })
//         .leading(1)
//         .move(0, 0)
//     titleSVG.leading(0)
//     let titleDim
//     if (props.title.text === "") {
//         titleDim = {
//             width: 0,
//             height: 0,
//         }
//     } else {
//         titleDim = {
//             height: settings.title.margins.top + titleSVG.bbox().height + settings.title.margins.bottom,
//             width: settings.title.margins.left + titleSVG.bbox().width + settings.title.margins.bottom,
//         }
//     }

//     /*
//            Add the slogan's SVG
//        */
//     const sloganSVG = draw
//         .text(slogan.text)
//         .font({
//             fill: slogan.style.color,
//             family: slogan.style.fontFamily,
//             size: slogan.style.fontSize + "px",
//             weight: "400",
//         })
//         .leading(1)
//         .move(0, 0)
//     sloganSVG.leading(0)

//     let sloganDim
//     if (props.slogan.text === "") {
//         sloganDim = {
//             width: 0,
//             height: 0,
//         }
//     } else {
//         sloganDim = {
//             height: settings.slogan.margins.top + sloganSVG.bbox().height + settings.slogan.margins.bottom,
//             width: settings.slogan.margins.left + sloganSVG.bbox().width + settings.slogan.margins.bottom,
//         }
//     }

//     // the elements are vertically stacked,
//     // so the width of the container is equal with the width of the largest element
//     // and the height is the sum of all the element's height
//     const widthContainer = logo.width + Math.max(titleDim.width, sloganDim.width)
//     const heightContainer = Math.max(logoDim.height, titleDim.height + sloganDim.height)
//     const cx = widthContainer / 2
//     const cy = heightContainer / 2

//     const textContainerWidth =
//         Math.max(titleDim.width, sloganDim.width) +
//         settings.textContainer.margins.left +
//         settings.textContainer.margins.right
//     // const textContainerHeight =
//     //     titleDim.height +
//     //     sloganDim.height +
//     //     settings.textContainer.margins.top +
//     //     settings.textContainer.margins.bottom
//     const ctx = textContainerWidth / 2
//     // const cty = textContainerHeight / 2

//     logoSVG.move(textContainerWidth, cy - logoDim.height / 2)
//     titleSVG.move(ctx - titleDim.width / 2, cy - titleDim.height / 2)
//     sloganSVG.move(ctx - sloganDim.width / 2, cy + titleDim.height / 2) // + sloganDim.height / 2)

//     const currentViewBox = draw.viewbox()

//     // AUTOSCAllING
//     // check if the current element occupy more than the initial size of the viewbox
//     draw.viewbox(
//         0,
//         0,
//         currentViewBox.width * marginFactor < widthContainer
//             ? widthContainer * autoScallingFactor
//             : currentViewBox.width,
//         currentViewBox.height * marginFactor < heightContainer
//             ? heightContainer * autoScallingFactor
//             : currentViewBox.height
//     )

//     return {
//         containerPos: {
//             x: 0,
//             y: 0,
//             cx,
//             cy,
//             width: widthContainer,
//             height: heightContainer,
//         },
//         containerElems: {
//             logoSVG,
//             titleSVG,
//             sloganSVG,
//         },
//     }
// }
