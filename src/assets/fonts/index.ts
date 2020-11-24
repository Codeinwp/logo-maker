import serif,{serifFonts} from './serif'
import sans,{sansFonts} from './sans'

export type Font = {
	family: string
	fallback: string
}

export const fontsList = [...serifFonts, ...sansFonts].sort()

const fonts = [...serif, ...sans].sort((a: Font, b:Font) => {
	if (a.family < b.family) {
		return -1;
	  }
	  if (a.family > b.family) {
		return 1;
	  }
	  
	  return 0;
})

export const fontsForSvg = fonts.map<string>(f => `'${f.family}', '${f.fallback}'`)

export const presets = [
	{
		title: "Roboto",
		slogan: "Open Sans"
	},
	{
		title: "Open Sans",
		slogan: "Roboto"
	},
	{
		title: "Zilla Slab",
		slogan: "Open Sans"
	},
	{
		title: "Roboto Slab",
		slogan: "Roboto"
	},
	{
		title: "Roboto Slab",
		slogan: "Lato"
	},
	{
		title: "Bitter",
		slogan: "Lato"
	},
	{
		title: "Zilla Slab",
		slogan: "Roboto"
	},
	{
		title: "Roboto",
		slogan: "Noto Sans JP"
	},
]

export default fonts

