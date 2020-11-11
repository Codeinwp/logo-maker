// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@tailwind base;\n\n@tailwind components;\n\n@tailwind utilities;\n\n.max-content {\n    width: max-content;\n}\n\nbody {\n    font-family: \"Noto Sans\", sans-serif;\n}\n\njson;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQsb0JBQW9COztBQUVwQixtQkFBbUI7O0FBRW5CO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InN0ZGluIiwic291cmNlc0NvbnRlbnQiOlsiQHRhaWx3aW5kIGJhc2U7XG5cbkB0YWlsd2luZCBjb21wb25lbnRzO1xuXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xuXG4ubWF4LWNvbnRlbnQge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}