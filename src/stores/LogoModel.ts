import { LogoAlignOptions } from "~/components/ui/SelectLayout"
import { Logo1, LogoSVGImport } from './../assets/logos'

import { Store } from "pullstate";

export type TLogoContainer = {
	width: number
	height: number
	align: LogoAlignOptions
	viewbox: {
		x: number
		y: number
		width: number
		height: number
	}
}

export type TLogo = {
	src: LogoSVGImport
	width: number
	height: number
	style: {
		fill: string
	}
}

export type TTitle = {
	text: string
	style: {
		color: string
        fontSize: number
        fontFamily: string
	}
}

export type TSlogan = {
	text: string
	style: {
		color: string
        fontSize: number
        fontFamily: string
	}
}

export type StoreProps = {
	container: TLogoContainer
	logg: TLogo,
	title: TTitle,
	slogan: TSlogan
} 

export const UIStore = new Store({
	container : {
		width: 300,
		height: 280,
		align: 'align-top',
		viewbox: {
			x: 0,
			y: 0, 
			width: 400,
			height: 400
		}
	},

	logo : {
		src: Logo1,
		width: 100,
		height: 100,
		style: {
			fill: '#FFA100'
		}
	},

	title : {
		text: 'Title',
		style: {
			color: '#FFFFFF',
			fontSize: 40,
			fontFamily: 'Helvetica'
		}
	},

	slogan : {
		text: 'Slogan',
		style: {
			color: '#FFFFFF',
			fontSize: 24,
			fontFamily: 'Helvetica'
		}
	}
});


export default UIStore