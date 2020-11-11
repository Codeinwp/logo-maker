import * as React from "../web_modules/react.js";
import {Link} from "../web_modules/react-router-dom.js";
import UIStore2 from "./stores/UIStore.js";
const Start = () => {
  const setTitleText = (value) => {
    UIStore2.update((s) => {
      s.title.text = value;
    });
  };
  const setSloganText = (value) => {
    UIStore2.update((s) => {
      s.slogan.text = value;
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex content-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col content-center justify-center lg:w-3/5 m-4 p-4 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col my-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl md:text-4xl font-bold text-center font-nato-sans"
  }, "Add your business name"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm md:text-xl font-semibold lg:text-gray-600 lg:font-medium text-center"
  }, "You can change this information after you designs have been created")), /* @__PURE__ */ React.createElement("div", {
    className: " my-2 lg:py-2 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:mx-16 my-4 p-1"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "logo-text-input text-md"
  }, "Logo Text"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "logo-text-input",
    value: UIStore2.useState((s) => s.title.text),
    onChange: (e) => setTitleText(e.target.value),
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:mx-16 my-2 p-1"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700 text-sm font-bold mb-2",
    htmlFor: "slogan-text-input"
  }, "Slogan text(Optional)"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "slogan-text-input",
    value: UIStore2.useState((s) => s.slogan.text),
    onChange: (e) => setSloganText(e.target.value),
    className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row justify-center"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "bg-blue-500 m-1 lg:w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center",
    to: "/"
  }, "Go to Creator"), /* @__PURE__ */ React.createElement(Link, {
    className: "bg-blue-500 m-1 lg:w-2/5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center",
    to: "/showcase"
  }, "Next"))));
};
export default Start;
