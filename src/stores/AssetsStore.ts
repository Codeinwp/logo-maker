import { Store } from "pullstate";

export type AssetsStoreProps = {
	areFontsLoaded: "active" | "loading" | "inactive"
}

export const AssetsStore = new Store<AssetsStoreProps>({
	areFontsLoaded: "inactive"
})