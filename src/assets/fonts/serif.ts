import { Font } from './index'

export const sansFonts: string [] = [
	"Antic Slab",
	"Bitter",
	"Castro",
	"Crimson Text",
	"Libre Baskerville",
	"Lora",
	"Marriweather",
	"Noto Serif",
	"PT Serif",
	"Roboto Slab",
	"Zilla Slab",
] 

export default sansFonts.sort().map<Font>((f) => {return { family: f, fallback: "serif" }})