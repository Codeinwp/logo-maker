import { Store } from "pullstate"

export type ExportStoreProps = {
	svg: {
		svgDownloadLink: string
		extension: 'svg'
	}
}

export const ExportStore = new Store<ExportStoreProps>({
	svg: {
		svgDownloadLink: "",
		extension: "svg"
	}
})