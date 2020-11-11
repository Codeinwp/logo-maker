import React from "../web_modules/react.js";
import {render} from "../web_modules/react-dom.js";
import {HashRouter as Router, Switch, Route} from "../web_modules/react-router-dom.js";
import WebFont from "../web_modules/webfontloader.js";
import fonts2 from "./assets/fonts/fonts.js";
import "./assets/styles/tailwind.css.proxy.js";
import Creator2 from "./Creator.js";
import Showcase2 from "./Showcase.js";
import Start2 from "./Start.js";
import {AssetsStore as AssetsStore2} from "./stores/AssetsStore.js";
const Application = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: fonts2
      },
      loading: () => {
        AssetsStore2.update((s) => {
          s.fonts.fontsStatus = "loading";
        });
      },
      active: () => {
        AssetsStore2.update((s) => {
          s.fonts.fontsStatus = "active";
        });
      },
      inactive: () => {
        AssetsStore2.update((s) => {
          s.fonts.fontsStatus = "inactive";
        });
      },
      fontactive: (font) => {
        AssetsStore2.update((s) => {
          s.fonts.activeFonts.push(font);
        });
      }
    });
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/start"
  }, /* @__PURE__ */ React.createElement(Start2, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/showcase"
  }, /* @__PURE__ */ React.createElement(Showcase2, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(Creator2, null)))));
};
render(/* @__PURE__ */ React.createElement(Application, null), document.getElementById("root"));
