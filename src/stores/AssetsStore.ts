import { Store } from "pullstate";

export type AssetsStoreProps = {
	fonts: {
		fontsStatus: "active" | "loading" | "inactive"
		activeFonts: string[]
	}
}

export const AssetsStore = new Store<AssetsStoreProps>({
	fonts: {
		fontsStatus: "inactive",
		activeFonts: []
	}
})