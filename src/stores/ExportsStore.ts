import { Store } from "pullstate"

export type ExportStoreProps = {
	downloadLink: string
	extension:  "svg" | "zip" | "png"
}

export const ExportStore = new Store<ExportStoreProps>({
	downloadLink: "",
	extension: "zip"
})