import * as React from "../../../web_modules/react.js";
import logos2 from "../../assets/logos/index.js";
import LogoItem2 from "./LogoItem.js";
import store from "../../stores/UIStore.js";
const SelectLogo = () => {
  const selectedLogoID = store.useState((s) => s.logo.src.id);
  const setLogo = (logo) => {
    store.update((s) => {
      s.logo.src = logo;
    });
  };
  const renderLogos = () => {
    return logos2.map((logo) => /* @__PURE__ */ React.createElement(LogoItem2, {
      onClick: () => setLogo(logo),
      key: logo.id,
      logo,
      isSelected: selectedLogoID === logo.id
    }));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "select-logo"
  }, /* @__PURE__ */ React.createElement("h1", null, `LOGO OPTIONS (${logos2.length})`), /* @__PURE__ */ React.createElement("p", null, "Select a symbol for the logo"), /* @__PURE__ */ React.createElement("div", {
    className: "logo-list"
  }, renderLogos()));
};
export default SelectLogo;
