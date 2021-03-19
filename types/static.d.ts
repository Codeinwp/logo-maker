/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module "*.module.css" {
    const classes: { [key: string]: string }
    export default classes
}
declare module "*.module.scss" {
    const classes: { [key: string]: string }
    export default classes
}
declare module "*.module.sass" {
    const classes: { [key: string]: string }
    export default classes
}
declare module "*.module.less" {
    const classes: { [key: string]: string }
    export default classes
}
declare module "*.module.styl" {
    const classes: { [key: string]: string }
    export default classes
}

/* CSS */
declare module "*.css"
declare module "*.scss"
declare module "*.sass"
declare module "*.less"
declare module "*.styl"

/* IMAGES */
// declare module '*.svg' {
//   const ref: string;
//   export default ref;
// }
declare module "*.bmp" {
    const ref: string
    export default ref
}
declare module "*.gif" {
    const ref: string
    export default ref
}
declare module "*.jpg" {
    const ref: string
    export default ref
}
declare module "*.jpeg" {
    const ref: string
    export default ref
}
declare module "*.png" {
    const ref: string
    export default ref
}

/* CUSTOM: ADD YOUR OWN HERE */
declare module "*.svg" {
    const content: string
    export default content
}

declare module "color-scheme" {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ColorScheme: any
    export default ColorScheme
}

/* objects loaded from php scripts PHP (e.g index.php) */

type LogoMaker = {
    parentLink?: string
    googleAnalyticsCode?: string
    pluginURL?: string
}

// declare const logomaker: LogoMaker | undefined

// declare global {
//   interface Window {
//     logomaker: LogoMaker
//   }
// }

export {}
declare global {
    interface Window {
        logomaker: LogoMaker
    }
}
