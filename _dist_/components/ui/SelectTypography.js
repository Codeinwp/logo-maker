import * as React from "../../../web_modules/react.js";
import Select from "../../../web_modules/react-select.js";
import fonts2 from "../../assets/fonts/fonts.js";
import UIStore2 from "../../stores/UIStore.js";
const SelectTypography = () => {
  const fontOptions = fonts2.map((font) => ({
    value: font,
    label: font
  }));
  const titleSizeOptions = [...Array(25).keys()].map((size) => size + 38).map((size) => ({
    value: size,
    label: size.toString()
  }));
  const sloganSizeOptions = [...Array(25).keys()].map((size) => size + 18).map((size) => ({
    value: size,
    label: size.toString()
  }));
  const onTitleTextChange = (value) => {
    UIStore2.update((s) => {
      s.title.text = value;
    });
  };
  const onTitleFontFamilyChange = ({value}) => {
    console.log(value);
    UIStore2.update((s) => {
      s.title.style.fontFamily = value;
    });
  };
  const onTitleFontSizeChange = ({value}) => {
    UIStore2.update((s) => {
      s.title.style.fontSize = value;
    });
  };
  const onSloganTextChange = (value) => {
    UIStore2.update((s) => {
      s.slogan.text = value;
    });
  };
  const onSloganFontFamilyChange = ({value}) => {
    UIStore2.update((s) => {
      s.slogan.style.fontFamily = value;
    });
  };
  const onSloganFontSizeChange = ({value}) => {
    UIStore2.update((s) => {
      s.slogan.style.fontSize = value;
    });
  };
  const disableBoxShadow = {
    control: (base) => ({
      ...base,
      boxShadow: "none"
    })
  };
  const defaultTitleFontFamily = UIStore2.useState((s) => s.title.style.fontFamily);
  const defaultTitleFontSize = UIStore2.useState((s) => s.title.style.fontSize);
  const defaultSloganFontFamily = UIStore2.useState((s) => s.slogan.style.fontFamily);
  const defaultSloganFontSize = UIStore2.useState((s) => s.slogan.style.fontSize);
  return /* @__PURE__ */ React.createElement("div", {
    className: "select-typography"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "title-options"
  }, /* @__PURE__ */ React.createElement("h1", null, "LOGO"), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "select-title-text"
  }, "Text"), /* @__PURE__ */ React.createElement("input", {
    value: UIStore2.useState((s) => s.title.text),
    onChange: (e) => onTitleTextChange(e.target.value)
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "select-title-font-family"
  }, "Font Family"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-title-font-family",
    className: "font-select",
    isSearchable: false,
    defaultValue: fontOptions.filter(({value}) => value === defaultTitleFontFamily),
    onChange: onTitleFontFamilyChange,
    options: fontOptions,
    styles: disableBoxShadow
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "select-title-font-size"
  }, "Font Size"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-title-font-size",
    className: "font-select",
    isSearchable: false,
    defaultValue: titleSizeOptions.filter(({value}) => value === defaultTitleFontSize),
    options: titleSizeOptions,
    onChange: onTitleFontSizeChange,
    styles: disableBoxShadow
  })), /* @__PURE__ */ React.createElement("div", {
    className: "slogan-options"
  }, /* @__PURE__ */ React.createElement("h1", null, "SLOGAN (Optional)"), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "select-slogan-text"
  }, "Text"), /* @__PURE__ */ React.createElement("input", {
    value: UIStore2.useState((s) => s.slogan.text),
    onChange: (e) => onSloganTextChange(e.target.value)
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "select-slogan-font-family"
  }, "Font Family"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-slogan-font-family",
    className: "font-select",
    isSearchable: false,
    defaultValue: fontOptions.filter(({value}) => value === defaultSloganFontFamily),
    onChange: onSloganFontFamilyChange,
    options: fontOptions,
    styles: disableBoxShadow
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "select-slogan-font-size"
  }, "Font Size"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-slogan-font-size",
    className: "font-select",
    isSearchable: false,
    defaultValue: sloganSizeOptions.filter(({value}) => value === defaultSloganFontSize),
    options: sloganSizeOptions,
    onChange: onSloganFontSizeChange,
    styles: disableBoxShadow
  })));
};
export default SelectTypography;
