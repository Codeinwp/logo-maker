import set1 from "./set1/index"
import set2 from "./set2/index"
import set3 from "./set3/index"
import set4 from "./set4/index"
import set5 from "./set5/index"

export type LogoSVGImport = {
    id: string
    svg: string
}

// Export a obejct with all the logos
// Useful for importing only some specific logos

// Export a list with all the logos
// Useful for rendering a select input or a preview with all the logos available
export default [...set1, ...set2, ...set3, ...set4, ...set5]
