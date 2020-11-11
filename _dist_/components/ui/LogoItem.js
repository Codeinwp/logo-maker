import {SVG} from "../../../web_modules/@svgdotjs/svgjs.js";
import * as React from "../../../web_modules/react.js";
const LogoItem = (props) => {
  const {onClick, logo} = props;
  const itemRef = React.useRef(null);
  React.useEffect(() => {
    if (itemRef.current) {
      itemRef.current.textContent = "";
      const svgItem = SVG().addTo(itemRef.current).svg(logo.svg);
      svgItem.viewbox(0, 0, svgItem.bbox().width, svgItem.bbox().height).size(50, 50).addClass("border-2 hover:border-blue-500 p-1 rounded");
    }
  }, [logo.svg]);
  return /* @__PURE__ */ React.createElement("button", {
    onClick,
    style: {width: "max-content", height: "max-content"},
    ref: itemRef
  });
};
export default LogoItem;
