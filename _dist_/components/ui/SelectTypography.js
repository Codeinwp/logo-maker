import * as React from "../../../web_modules/react.js";
import Select from "../../../web_modules/react-select.js";
import {AssetsStore as AssetsStore2} from "../../stores/AssetsStore.js";
import UIStore2 from "../../stores/UIStore.js";
const SelectTypography = () => {
  const fontOptions = AssetsStore2.useState((s) => s.fonts.activeFonts).map((font) => ({
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
  const defaultTitleFontFamily = UIStore2.useState((s) => s.title.style.fontFamily);
  const defaultTitleFontSize = UIStore2.useState((s) => s.title.style.fontSize);
  const defaultSloganFontFamily = UIStore2.useState((s) => s.slogan.style.fontFamily);
  const defaultSloganFontSize = UIStore2.useState((s) => s.slogan.style.fontSize);
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-auto overflow-y-auto overscroll-auto lg:overflow-y-visible lg:overscroll-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container m-2 p-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl my-1 text-gray-500"
  }, "LOGO"), /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold my-2",
    htmlFor: "select-title-text"
  }, "Title"), /* @__PURE__ */ React.createElement("input", {
    value: UIStore2.useState((s) => s.title.text),
    className: "appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600",
    onChange: (e) => onTitleTextChange(e.target.value)
  }), /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold my-2",
    htmlFor: "select-title-font-family"
  }, "Font Family"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-title-font-family",
    defaultValue: fontOptions.filter(({value}) => value === defaultTitleFontFamily),
    onChange: onTitleFontFamilyChange,
    options: fontOptions
  }), /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold my-2",
    htmlFor: "select-title-font-size"
  }, "Font Size"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-title-font-size",
    defaultValue: titleSizeOptions.filter(({value}) => value === defaultTitleFontSize),
    options: titleSizeOptions,
    onChange: onTitleFontSizeChange
  })), /* @__PURE__ */ React.createElement("div", {
    className: "container m-2 p-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl my-1"
  }, "SLOGAN"), /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold my-2",
    htmlFor: "select-slogan-text"
  }, "Slogan"), /* @__PURE__ */ React.createElement("input", {
    value: UIStore2.useState((s) => s.slogan.text),
    className: "appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-600",
    onChange: (e) => onSloganTextChange(e.target.value)
  }), /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold my-2",
    htmlFor: "select-slogan-font-family"
  }, "Font Family"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-slogan-font-family",
    defaultValue: fontOptions.filter(({value}) => value === defaultSloganFontFamily),
    onChange: onSloganFontFamilyChange,
    options: fontOptions
  }), /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold my-2",
    htmlFor: "select-slogan-font-size"
  }, "Font Size"), /* @__PURE__ */ React.createElement(Select, {
    id: "select-slogan-font-size",
    defaultValue: sloganSizeOptions.filter(({value}) => value === defaultSloganFontSize),
    options: sloganSizeOptions,
    onChange: onSloganFontSizeChange
  })));
};
export default SelectTypography;
