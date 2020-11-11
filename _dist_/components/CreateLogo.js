import * as React from "../../web_modules/react.js";
import {SVG} from "../../web_modules/@svgdotjs/svgjs.js";
import {moveToCenter} from "../engine/utility.js";
import {alignLogoLeft, alignLogoRight, alignLogoTop} from "../engine/alignFunctions.js";
import {v4 as uuidv4} from "../../web_modules/uuid.js";
const CreateLogo = (props) => {
  const divRef = React.useRef(null);
  const ID = props.id || `image-logo-${uuidv4()}`;
  React.useEffect(() => {
    if (divRef.current && props.logoProps) {
      const container = props.logoProps.container;
      divRef.current.textContent = "";
      const vb = container.viewbox;
      const draw = SVG().addTo(divRef.current).size(container.width, container.height).viewbox(vb.x, vb.y, vb.width, vb.height).css("background-color", container.style.color);
      const getAlignedLogo = () => {
        switch (props.logoProps.container.align) {
          case "align-top":
            return alignLogoTop(props.logoProps, draw);
          case "align-left":
            return alignLogoLeft(props.logoProps, draw);
          case "align-right":
            return alignLogoRight(props.logoProps, draw);
          default:
            console.log("Invalid Type. The logo will be aligned top as a fallback option!");
            return alignLogoTop(props.logoProps, draw);
        }
      };
      moveToCenter(draw, container.viewbox, getAlignedLogo());
    }
  }, [props.logoProps]);
  return /* @__PURE__ */ React.createElement("div", {
    id: ID,
    ref: divRef
  });
};
export default CreateLogo;
