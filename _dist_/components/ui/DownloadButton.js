import * as React from "../../../web_modules/react.js";
import classnames2 from "../../../web_modules/classnames.js";
import {UIStore as UIStore2} from "../../stores/UIStore.js";
import {generateUrlForFont} from "../../engine/googleFonts.js";
const DownloadButton = (props) => {
  const font = UIStore2.useState((s) => s.title.style.fontFamily);
  const downloadSVG = () => {
    const node = document.querySelector("#image-logo")?.cloneNode(true);
    if (!node) {
      return;
    }
    const style = document.createElement("style");
    style.innerHTML = `
                @import url("${generateUrlForFont(font)}");
        `;
    node.firstChild?.appendChild(style);
    const svg = node.innerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "logo.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classnames2("download-button", props?.className)
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => downloadSVG()
  }, /* @__PURE__ */ React.createElement("span", null, "Download")));
};
export default DownloadButton;
