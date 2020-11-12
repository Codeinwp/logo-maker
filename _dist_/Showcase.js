import * as React from "../web_modules/react.js";
import {Link} from "../web_modules/react-router-dom.js";
import logos2 from "./assets/logos/index.js";
import CreateLogo2 from "./components/CreateLogo.js";
import UIStore2 from "./stores/UIStore.js";
import ColorScheme from "../web_modules/color-scheme.js";
import {presets} from "./assets/fonts/fonts.js";
import {AssetsStore as AssetsStore2} from "./stores/AssetsStore.js";
import BackUI2 from "./assets/ui/BackUI.js";
import ThemeisleUI2 from "./assets/ui/ThemeisleUI.js";
const defaultFontsList = new Array(logos2.length).fill("Arial");
const Showcase = () => {
  const store = UIStore2.useState((s) => s);
  const fontsStore = AssetsStore2.useState((s) => s);
  const [option, setOption] = React.useState(0);
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
  const setTemplate = (index) => {
    UIStore2.update((s) => {
      s.logo.src = logos2[index];
      s.container.style.color = colors[index];
      s.title.style.fontFamily = fontsList[index].title;
      s.slogan.style.fontFamily = fontsList[index].slogan;
    });
  };
  const renderLogoList = () => {
    if (!colors.length) {
      return;
    }
    console.time("render-logos");
    const result = logos2.map((logoSRC, index) => {
      return /* @__PURE__ */ React.createElement("button", {
        className: `${index === option ? "border-4 border-blue-600" : "border-white"} border-4 hover:border-blue-600 `,
        key: logoSRC.id,
        onClick: () => {
          setOption(index);
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
    className: "relative flex flex-row mt-4 mb-2 lg:mb-16 w-full items-center justify-center"
  }, /* @__PURE__ */ React.createElement(BackUI2, {
    className: "absolute left-0 top-0 ml-24"
  }), /* @__PURE__ */ React.createElement(ThemeisleUI2, null)), /* @__PURE__ */ React.createElement("div", {
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
    to: "/",
    onClick: () => setTemplate(option)
  }, "Next")));
};
export default Showcase;
