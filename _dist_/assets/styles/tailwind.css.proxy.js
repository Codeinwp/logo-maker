// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@tailwind base;\n\n/* Your own custom base styles */\n\n/* Start purging... */\n@tailwind components;\n/* Stop purging. */\n\n/* Your own custom component styles */\n\n/* Start purging... */\n@tailwind utilities;\n/* Stop purging. */\n\n@import \"../../../web_modules/tailwindcss/dist/base.css\";\n@import \"../../../web_modules/tailwindcss/dist/components.css\";\n@import \"../../../web_modules/tailwindcss/dist/utilities.css\";\n\n/* Your own custom utilities */\n.max-content {\n    width: max-content;\n}\n\nbody {\n    font-family: \"Noto Sans\", sans-serif;\n}\n\n/*@import url(\"https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Amatic+SC&family=Dancing+Script&family=Henny+Penny&family=Open+Sans&family=Pacifico&family=Roboto&display=swap\");\n*/\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}