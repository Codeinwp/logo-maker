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
        width: 500,
        height: 500
      }
    };
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "static lg:relative flex flex-col lg:flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "order-last z-10 p-2 h-16 sticky bottom-0 bg-white flex w-auto justify-center lg:order-1 lg:absolute lg:right-0 lg:top-0 lg:mr-24 lg:mt-4 lg:bg-transparent"
  }, /* @__PURE__ */ React.createElement(DownloadButton2, {
    className: "w-4/5 lg:w-40"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative flex flex-row mt-8 mb-2 lg:mb-16 w-full items-center justify-center"
  }, /* @__PURE__ */ React.createElement(BackUI2, {
    className: "absolute left-0 top-0 ml-24 invisible lg:visible",
    to: "/showcase"
  }), /* @__PURE__ */ React.createElement(ThemeisleUI2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-auto justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-initial flex-col lg:flex-row lg:w-full lg:justify-evenly"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box-border flex w-auto justify-center m-2 lg:max-content  lg:justify-end  lg:m-16 lg:w-1/4 lg:m-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid h-20 grid-cols-2 lg:h-40 lg:grid-cols-1 lg:gap-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(LogoUIsvg2, {
    isSelected: menuOption === "logo"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("logo"),
    className: `box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${menuOption === "logo" ? "text-black" : "text-gray-500"}`
  }, "Logo")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(TypographyUIsvg2, {
    isSelected: menuOption === "typography"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("typography"),
    className: `box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${menuOption === "typography" ? "text-black" : "text-gray-500"}`
  }, "Typography")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(LayoutUIsvg2, {
    isSelected: menuOption === "layout"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("layout"),
    className: `box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${menuOption === "layout" ? "text-black" : "text-gray-500"}`
  }, "Layout")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement(ColorsUIsvg2, {
    isSelected: menuOption === "colors"
  }), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("colors"),
    className: `box-border w-auto p-2 text-left bg-transparent font-semibold hover:text-black ${menuOption === "colors" ? "text-black" : "text-gray-500"}`
  }, "Colors")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center lg:py-16 lg:w-1/3"
  }, /* @__PURE__ */ React.createElement(CreateLogo2, {
    id: "image-logo",
    logoProps: store
  })), /* @__PURE__ */ React.createElement("div", {
    className: "m-2 lg:m-16 lg:w-1/4"
  }, renderRightSidePanel()))));
};
export default Creator;
