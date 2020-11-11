import * as React from "../web_modules/react.js";
import {Link} from "../web_modules/react-router-dom.js";
import logos2 from "./assets/logos/index.js";
import CreateLogo2 from "./components/CreateLogo.js";
import UIStore2 from "./stores/UIStore.js";
import ColorScheme from "../web_modules/color-scheme.js";
import {presets} from "./assets/fonts/fonts.js";
import {AssetsStore as AssetsStore2} from "./stores/AssetsStore.js";
const defaultFontsList = new Array(logos2.length).fill("Arial");
const Showcase = () => {
  const store = UIStore2.useState((s) => s);
  const fontsStore = AssetsStore2.useState((s) => s);
  const [colors, setColors] = React.useState([]);
  const [fontsList, setFontsList] = React.useState(defaultFontsList);
  React.useEffect(() => {
    const generateColors = () => {
      const scm = new ColorScheme();
      const colorsNum = new Set();
      const step = 360 / logos2.length;
      for (let i = 0; i < logos2.length; ++i) {
        colorsNum.add(step * i);
      }
      const colors2 = [];
      colorsNum.forEach((x) => {
        scm.from_hue(x).scheme("triade").distance(0.8).variation("hard").web_safe(true);
        colors2.push("#" + scm.colors()[1]);
      });
      return colors2;
    };
    setColors(generateColors());
    const generateFonts = () => {
      const list = [];
      let index = 0;
      while (list.length < logos2.length) {
        list.push(presets[index]);
        index++;
        if (index >= presets.length) {
          index = 0;
        }
      }
      return list;
    };
    setFontsList(generateFonts());
  }, [fontsStore]);
  const renderLogoList = () => {
    const setOptions = (index) => {
      UIStore2.update((s) => {
        s.logo.src = logos2[index];
        s.container.style.color = colors[index];
        s.title.style.fontFamily = fontsList[index].title;
        s.slogan.style.fontFamily = fontsList[index].slogan;
      });
    };
    if (!colors.length) {
      return;
    }
    console.time("render-logos");
    const result = logos2.map((logoSRC, index) => {
      return /* @__PURE__ */ React.createElement("button", {
        className: "hover:border-2 hover:border-blue-600",
        key: logoSRC.id,
        onClick: (e) => {
          e.preventDefault();
          setOptions(index);
        }
      }, /* @__PURE__ */ React.createElement(CreateLogo2, {
        logoProps: {
          ...store,
          container: {
            ...store.container,
            width: 300,
            height: 250,
            viewbox: {
              x: 0,
              y: 0,
              width: 300,
              height: 250
            },
            style: {
              color: colors[index]
            }
          },
          logo: {
            ...store.logo,
            src: logoSRC
          },
          title: {
            ...store.title,
            style: {
              ...store.title.style,
              fontFamily: fontsList[index].title
            }
          },
          slogan: {
            ...store.slogan,
            style: {
              ...store.slogan.style,
              fontFamily: fontsList[index].slogan
            }
          }
        }
      }));
    });
    console.timeEnd("render-logos");
    return result;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "static flex flex-col items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full m-4 px-16 py-2"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    to: "/start"
  }, "Back")), /* @__PURE__ */ React.createElement("div", {
    className: "m-4 lg:w-4/5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col my-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl md:text-4xl font-bold text-center leading-none"
  }, "Choose from any of the logo templates"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm md:text-xl font-semibold lg:text-gray-600 lg:font-medium text-center my-2"
  }, "You can change this information after your designs have been created")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center text-white "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-4 grid-cols-1 lg:grid-cols-3"
  }, renderLogoList())))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full flex justify-center absolute sticky bottom-0 bg-white"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: " block w-4/5 lg:w-1/5 my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center",
    to: "/"
  }, "Next")));
};
export default Showcase;
