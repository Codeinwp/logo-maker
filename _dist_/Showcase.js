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
import classnames2 from "../web_modules/classnames.js";
import "./assets/styles/Showcase/showcase.css.proxy.js";
const defaultFontsList = new Array(logos2.length).fill("Arial");
const Showcase = () => {
  const store = UIStore2.useState((s) => s);
  const fontsStore = AssetsStore2.useState((s) => s);
  const [fontStatus, setFontsStatus] = React.useState("inactive");
  const [option, setOption] = React.useState(0);
  const [colors, setColors] = React.useState([]);
  const [fontsList, setFontsList] = React.useState(defaultFontsList);
  console.log(fontStatus);
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
    setFontsStatus("active");
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
        className: classnames2("logo", {active: index === option}),
        key: logoSRC.id,
        onClick: () => {
          setOption(index);
        }
      }, /* @__PURE__ */ React.createElement(CreateLogo2, {
        logoProps: {
          ...store,
          container: {
            ...store.container,
            width: 345,
            height: 280,
            viewbox: {
              x: 0,
              y: 0,
              width: 345,
              height: 280
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
    className: "logo-showcase"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-section"
  }, /* @__PURE__ */ React.createElement(BackUI2, {
    className: "absolute"
  }), /* @__PURE__ */ React.createElement(ThemeisleUI2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "content-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "titles"
  }, /* @__PURE__ */ React.createElement("h1", null, "Choose from any of the logo templates"), /* @__PURE__ */ React.createElement("p", null, "You can change this information after your designs have been created")), /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "logos-container"
  }, renderLogoList()))), /* @__PURE__ */ React.createElement("div", {
    className: "next"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "block",
    to: "/",
    onClick: () => setTemplate(option)
  }, "Next")));
};
export default Showcase;
