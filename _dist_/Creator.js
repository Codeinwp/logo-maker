import * as React from "../web_modules/react.js";
import {Link} from "../web_modules/react-router-dom.js";
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
      case "layout":
        return /* @__PURE__ */ React.createElement(SelectLayout2, null);
      case "typography":
        return /* @__PURE__ */ React.createElement(SelectTypography2, null);
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
    className: "static flex flex-col-reverse lg:flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row z-10 sticky bottom-0 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container flex lg:px-32 lg:w-3/4 mx-8 my-4"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 max-content rounded",
    to: "/showcase"
  }, "Back")), /* @__PURE__ */ React.createElement(DownloadButton2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-auto justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-initial flex-col lg:flex-row lg:w-full lg:justify-evenly"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box-border flex w-auto justify-center lg:max-content  lg:justify-end  lg:m-16 lg:w-1/4 lg:m-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid h-20 grid-cols-2 lg:h-40 lg:grid-cols-1 lg:gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("logo"),
    className: "box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
  }, "Logo"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("typography"),
    className: "box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
  }, "Typography"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("layout"),
    className: "box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
  }, "Layout"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setMenuOption("colors"),
    className: "box-border w-auto p-2 text-left bg-transparent text-gray-500 font-semibold hover:text-black"
  }, "Colors"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center lg:py-16 lg:w-1/3"
  }, /* @__PURE__ */ React.createElement(CreateLogo2, {
    id: "image-logo",
    logoProps: store
  })), /* @__PURE__ */ React.createElement("div", {
    className: "m-2 lg:m-16 lg:w-1/4"
  }, renderRightSidePanel()))));
};
export default Creator;
