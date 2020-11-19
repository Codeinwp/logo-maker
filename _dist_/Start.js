import * as React from "../web_modules/react.js";
import {Link} from "../web_modules/react-router-dom.js";
import BackUI2 from "./assets/ui/BackUI.js";
import ThemeisleUI2 from "./assets/ui/ThemeisleUI.js";
import UIStore2 from "./stores/UIStore.js";
import "./assets/styles/Start/start.css.proxy.js";
const Start = () => {
  const setTitleText = (value) => {
    UIStore2.update((s) => {
      s.title.text = value;
    });
  };
  const setSloganText = (value) => {
    UIStore2.update((s) => {
      s.slogan.text = value;
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "logo-maker"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "top-section"
  }, /* @__PURE__ */ React.createElement(BackUI2, null), /* @__PURE__ */ React.createElement(ThemeisleUI2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "content-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "titles"
  }, /* @__PURE__ */ React.createElement("h1", null, "Add your business name"), /* @__PURE__ */ React.createElement("p", null, "You can change this information after you designs have been created")), /* @__PURE__ */ React.createElement("div", {
    className: "step1"
  }, /* @__PURE__ */ React.createElement("label", null, "Logo Text"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "logo-text-input",
    value: UIStore2.useState((s) => s.title.text),
    onChange: (e) => setTitleText(e.target.value)
  }), /* @__PURE__ */ React.createElement("label", null, "Slogan text (Optional)"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "slogan-text-input",
    value: UIStore2.useState((s) => s.slogan.text),
    onChange: (e) => setSloganText(e.target.value)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "next"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/showcase"
  }, "Next"))));
};
export default Start;
