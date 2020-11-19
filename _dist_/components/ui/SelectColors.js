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
  return /* @__PURE__ */ React.createElement("div", {
    className: "select-colors"
  }, /* @__PURE__ */ React.createElement("h1", null, "COLOR PALETTE"), /* @__PURE__ */ React.createElement("p", null, "Background Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.container.style.color),
    onChangeComplete: onBackgroundColor
  }), /* @__PURE__ */ React.createElement("p", null, "Logo Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.logo.style.fill),
    onChangeComplete: onLogoColor
  }), /* @__PURE__ */ React.createElement("p", null, "Title Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.title.style.color),
    onChangeComplete: onTitleColor
  }), /* @__PURE__ */ React.createElement("p", null, "Slogan Color"), /* @__PURE__ */ React.createElement(SliderPicker, {
    color: UIStore2.useState((s) => s.slogan.style.color),
    onChangeComplete: onSloganColor
  }));
};
export default SelectColor;
