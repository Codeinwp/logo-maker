import * as React from "../../../web_modules/react.js";
import classnames2 from "../../../web_modules/classnames.js";
const DownloadButton = (props) => {
  const downloadSVG = () => {
    const svg = document.querySelector("#image-logo")?.innerHTML;
    if (!svg) {
      return;
    }
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "logo.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classnames2("box-border flex justify-center max-content", classnames2)
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => downloadSVG(),
    className: "bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "fill-current w-4 h-4 mr-2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"
  })), /* @__PURE__ */ React.createElement("span", null, "Download")));
};
export default DownloadButton;
