import {Logo1} from "../assets/logos/index.js";
import {Store} from "../../web_modules/pullstate.js";
export const UIStore = new Store({
  container: {
    width: 300,
    height: 250,
    align: "align-top",
    viewbox: {
      x: 0,
      y: 0,
      width: 300,
      height: 250
    },
    style: {
      color: "#ABABCB"
    }
  },
  logo: {
    src: Logo1,
    width: 100,
    height: 100,
    style: {
      fill: "#FFFFFF"
    }
  },
  title: {
    text: "Optimole",
    style: {
      color: "#FFFFFF",
      fontSize: 40,
      fontFamily: "Helvetica"
    }
  },
  slogan: {
    text: "An elegant choice",
    style: {
      color: "#FFFFFF",
      fontSize: 24,
      fontFamily: "Helvetica"
    }
  }
});
export default UIStore;
