import * as React from "../web_modules/react.js";
import BackUI2 from "./assets/ui/BackUI.js";
import ColorsUIsvg2 from "./assets/ui/ColorsUIsvg.js";
import LayoutUIsvg2 from "./assets/ui/LayoutUIsvg.js";
import LogoUIsvg2 from "./assets/ui/LogoUIsvg.js";
import ThemeisleUI2 from "./assets/ui/ThemeisleUI.js";
import TypographyUIsvg2 from "./assets/ui/TypographyUIsvg.js";
import CreateLogo2 from "./components/CreateLogo.js";
import DownloadButton2 from "./components/ui/DownloadButton.js";
import SelectColor from "./components/ui/SelectColors.js";
import SelectLayout2 from "./components/ui/SelectLayout.js";
import SelectLogo2 from "./components/ui/SelectLogo.js";
import SelectTypography2 from "./components/ui/SelectTypography.js";
import classnames2 from "../web_modules/classnames.js";
import "./assets/styles/Creator/creator.css.proxy.js";
import UIStore2 from "./stores/UIStore.js";
const Creator = () => {
  const [menuOption, setMenuOption] = React.useState("logo");
  let store = {...UIStore2.useState((s) => s)};
  const renderRightSidePanel = () => {
    switch (menuOption) {
      case "logo":
        return /* @__PURE__ */ React.createElement(SelectLogo2, null);
      case "typography":
        return /* @__PURE__ */ React.createElement(SelectTypography2, null);
      case "layout":
        return /* @__PURE__ */ React.createElement(SelectLayout2, null);
      case "colors":
        return /* @__PURE__ */ React.createElement(SelectColor, null);
    }
  };
  if (window.screen.width >= 1024) {
    store = {
      ...store,
      container: {
        ...store.container,
        width: 765,
        height: 625
      }
    };
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "logo-creator"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "download-section"
  }, /* @__PURE__ */ React.createElement(DownloadButton2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "top-section"
  }, /* @__PURE__ */ React.createElement(BackUI2, {
    to: "/showcase"
  }), /* @__PURE__ */ React.createElement(ThemeisleUI2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "main-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "left-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "options"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "option"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    isSelected: menuOption === "logo"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("logo"),
    className: classnames2({active: menuOption === "logo"})
  }, "Logo")), /* @__PURE__ */ React.createElement("div", {
    className: "option"
  }, /* @__PURE__ */ React.createElement(TypographyUIsvg2, {
    isSelected: menuOption === "typography"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("typography"),
    className: classnames2({active: menuOption === "typography"})
  }, "Typography")), /* @__PURE__ */ React.createElement("div", {
    className: "option"
  }, /* @__PURE__ */ React.createElement(LayoutUIsvg2, {
    isSelected: menuOption === "layout"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("layout"),
    className: classnames2({active: menuOption === "layout"})
  }, "Layout")), /* @__PURE__ */ React.createElement("div", {
    className: "option"
  }, /* @__PURE__ */ React.createElement(ColorsUIsvg2, {
    isSelected: menuOption === "colors"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("colors"),
    className: classnames2({active: menuOption === "colors"})
  }, "Colors")))), /* @__PURE__ */ React.createElement("div", {
    className: "logo"
  }, /* @__PURE__ */ React.createElement(CreateLogo2, {
    id: "image-logo",
    logoProps: store
  })), /* @__PURE__ */ React.createElement("div", {
    className: "right-menu"
  }, renderRightSidePanel()))));
};
export default Creator;
