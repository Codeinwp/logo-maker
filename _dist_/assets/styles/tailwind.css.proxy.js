// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import \"../../../web_modules/tailwindcss/dist/base.css\";\n@import \"../../../web_modules/tailwindcss/dist/components.css\";\n@import \"../../../web_modules/tailwindcss/dist/utilities.css\";\n\n/* Your own custom utilities */\n.max-content {\n    width: max-content;\n}\n\n.color-ui-blue-active {\n    border-color:#43C2D1;\n}\n\n.color-ui-blue-inactive {\n    border-color: #8B8B9C;\n}\n\n.color-ui-blue-inactive:hover {\n    border-color:#43C2D1;\n}\n\n.logo-maker-logo {\n    color: #FF7F66;\n    font-size: 18px;\n    font-weight: 700;\n    font-style: normal;\n}\n\nbody {\n    font-family: \"Noto Sans\", sans-serif;\n}\n\n/*@import url(\"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Amatic+SC&family=Dancing+Script&family=Henny+Penny&family=Open+Sans&family=Pacifico&family=Roboto&display=swap\");\n*/\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}