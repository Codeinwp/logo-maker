import React from "../web_modules/react.js";
import {render} from "../web_modules/react-dom.js";
import {HashRouter as Router, Switch, Route} from "../web_modules/react-router-dom.js";
import fonts2 from "./assets/fonts/fonts.js";
import "./assets/styles/index.css.proxy.js";
import Creator2 from "./Creator.js";
import {generateUrlForFonts} from "./engine/googleFonts.js";
import Showcase2 from "./Showcase.js";
import Start2 from "./Start.js";
import {AssetsStore as AssetsStore2} from "./stores/AssetsStore.js";
export const Application = () => {
  React.useEffect(() => {
    const googleFontsLink = document.createElement("link");
    googleFontsLink.rel = "stylesheet";
    googleFontsLink.type = "text/css";
    googleFontsLink.href = generateUrlForFonts(fonts2);
    googleFontsLink.onerror = () => {
      console.log("An error occurred loading the Google's fonts stylesheet!");
    };
    document.querySelector("head")?.appendChild(googleFontsLink);
    document.fonts.ready.then(() => {
      const fontSet = new Set();
      for (const f of document.fonts) {
        fontSet.add(f.family);
      }
      AssetsStore2.update((s) => {
        s.fonts.activeFonts = Array.from(fontSet);
      });
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
