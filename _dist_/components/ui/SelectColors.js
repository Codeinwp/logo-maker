import * as React from "../../../web_modules/react.js";
import {SliderPicker} from "../../../web_modules/react-color.js";
import UIStore2 from "../../stores/UIStore.js";
const SelectColor = () => {
  const onBackgroundColor = (value) => {
    UIStore2.update((s) => {
      s.container.style.color = value.hex;
    });
  };
  const onTitleColor = (value) => {
    UIStore2.update((s) => {
      s.title.style.color = value.hex;
    });
  };
  const onSloganColor = (value) => {
    UIStore2.update((s) => {
      s.slogan.style.color = value.hex;
    });
  };
  const onLogoColor = (value) => {
    UIStore2.update((s) => {
      s.logo.style.fill = value.hex;
    });
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-gray-500"
  }, "COLOR PALETTE"), /* @__PURE__ */ React.createElement("p", {
    className: "my-1"
  }, "Background Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.container.style.color),
    onChangeComplete: onBackgroundColor
  }), /* @__PURE__ */ React.createElement("p", {
    className: "my-1"
  }, "Logo Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.logo.style.fill),
    onChangeComplete: onLogoColor
  }), /* @__PURE__ */ React.createElement("p", {
    className: "my-1"
  }, "Title Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.title.style.color),
    onChangeComplete: onTitleColor
  }), /* @__PURE__ */ React.createElement("p", {
    className: "my-1"
  }, "Slogan Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.slogan.style.color),
    onChangeComplete: onSloganColor
  }));
};
export default SelectColor;
