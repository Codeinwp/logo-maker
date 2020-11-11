import {Store} from "../../web_modules/pullstate.js";
export const AssetsStore = new Store({
  fonts: {
    fontsStatus: "inactive",
    activeFonts: []
  }
});
