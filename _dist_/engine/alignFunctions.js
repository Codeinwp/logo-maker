import {SVG} from "../../web_modules/@svgdotjs/svgjs.js";
import {settings as settings2} from "./settings.js";
const autoScallingOffsetMargin = 100;
export const alignLogoTop = (props, draw) => {
  const {logo, title, slogan} = props;
  const logoSVG = SVG().addTo(draw).svg(logo.src.svg);
  const svgRawDim = logoSVG.bbox();
  logoSVG.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logo.width, logo.height).css("fill", logo.style.fill);
  const logoDim = {
    height: settings2.logo.margins.top + logo.height + settings2.logo.margins.bottom,
    width: settings2.logo.margins.left + logo.width + settings2.logo.margins.bottom
  };
  const titleSVG = draw.plain(title.text).font({
    fill: title.style.color,
    family: title.style.fontFamily,
    size: title.style.fontSize + "px"
  }).move(0, 0);
  titleSVG.leading(0);
  const titleDim = {
    height: settings2.title.margins.top + titleSVG.bbox().height + settings2.title.margins.bottom,
    width: settings2.title.margins.left + titleSVG.bbox().width + settings2.title.margins.bottom
  };
  const sloganSVG = draw.plain(slogan.text).font({
    fill: slogan.style.color,
    family: slogan.style.fontFamily,
    size: slogan.style.fontSize + "px"
  }).move(0, 0);
  sloganSVG.leading(0);
  const sloganDim = {
    height: settings2.slogan.margins.top + sloganSVG.bbox().height + settings2.slogan.margins.bottom,
    width: settings2.slogan.margins.left + sloganSVG.bbox().width + settings2.slogan.margins.bottom
  };
  const widthContainer = Math.max(logoDim.width, titleDim.width, sloganDim.width);
  const heightContainer = logoDim.height + titleDim.height + sloganDim.height;
  const cx = widthContainer / 2;
  const cy = heightContainer / 2;
  logoSVG.move(cx - logoDim.width / 2, 0);
  titleSVG.move(cx - titleDim.width / 2, logoDim.height + settings2.logo.margins.bottom + settings2.title.margins.top);
  sloganSVG.move(cx - sloganDim.width / 2, logoDim.height + titleDim.height + settings2.slogan.margins.top + (titleSVG.rbox(draw).height - titleDim.height) * 0.5);
  const currentViewBox = draw.viewbox();
  draw.viewbox(0, 0, currentViewBox.width < widthContainer ? widthContainer + autoScallingOffsetMargin : currentViewBox.width, currentViewBox.height < heightContainer ? heightContainer + autoScallingOffsetMargin : currentViewBox.height);
  return {
    containerPos: {
      x: 0,
      y: 0,
      cx,
      cy,
      width: widthContainer,
      height: heightContainer
    },
    containerElems: {
      logoSVG,
      titleSVG,
      sloganSVG
    }
  };
};
export const alignLogoLeft = (props, draw) => {
  const {logo, title, slogan} = props;
  const logoSVG = SVG().addTo(draw).svg(logo.src.svg);
  const svgRawDim = logoSVG.bbox();
  logoSVG.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logo.width, logo.height).css("fill", logo.style.fill);
  const logoDim = {
    height: settings2.logo.margins.top + logo.height + settings2.logo.margins.bottom,
    width: settings2.logo.margins.left + logo.width + settings2.logo.margins.bottom
  };
  const titleSVG = draw.text(title.text).font({
    fill: title.style.color,
    family: title.style.fontFamily,
    size: title.style.fontSize
  }).move(0, 0);
  titleSVG.leading(0);
  const titleDim = {
    height: settings2.title.margins.top + titleSVG.bbox().height + settings2.title.margins.bottom,
    width: settings2.title.margins.left + titleSVG.bbox().width + settings2.title.margins.bottom
  };
  const sloganSVG = draw.text(slogan.text).font({
    fill: slogan.style.color,
    family: slogan.style.fontFamily,
    size: slogan.style.fontSize
  }).move(0, 0);
  sloganSVG.leading(0);
  const sloganDim = {
    height: settings2.slogan.margins.top + sloganSVG.bbox().height + settings2.slogan.margins.bottom,
    width: settings2.slogan.margins.left + sloganSVG.bbox().width + settings2.slogan.margins.bottom
  };
  const widthContainer = logo.width + Math.max(titleDim.width, sloganDim.width);
  const heightContainer = Math.max(logo.height, titleDim.height + sloganDim.height);
  const cx = widthContainer / 2;
  const cy = heightContainer / 2;
  const textContainerWidth = Math.max(titleDim.width, sloganDim.width) + settings2.textContainer.margins.left + settings2.textContainer.margins.right;
  const textContainerHeight = titleDim.height + sloganDim.height + settings2.textContainer.margins.top + settings2.textContainer.margins.bottom;
  const ctx = textContainerWidth / 2;
  const cty = textContainerHeight / 2;
  logoSVG.move(0, cy - logoDim.height / 2);
  titleSVG.move(logoDim.width + ctx - titleDim.width / 2, cy - titleDim.height / 2);
  sloganSVG.move(logoDim.width + ctx - sloganDim.width / 2, cy + (cty - titleDim.height / 2) + sloganDim.height / 2);
  const currentViewBox = draw.viewbox();
  draw.viewbox(0, 0, currentViewBox.width < widthContainer ? widthContainer : currentViewBox.width + autoScallingOffsetMargin, currentViewBox.height < heightContainer ? heightContainer : currentViewBox.height + autoScallingOffsetMargin);
  return {
    containerPos: {
      x: 0,
      y: 0,
      cx,
      cy,
      width: widthContainer,
      height: heightContainer
    },
    containerElems: {
      logoSVG,
      titleSVG,
      sloganSVG
    }
  };
};
export const alignLogoRight = (props, draw) => {
  const {logo, title, slogan} = props;
  const logoSVG = SVG().addTo(draw).svg(logo.src.svg);
  const svgRawDim = logoSVG.bbox();
  logoSVG.viewbox(0, 0, svgRawDim.width, svgRawDim.height).size(logo.width, logo.height).css("fill", logo.style.fill);
  const logoDim = {
    height: settings2.logo.margins.top + logo.height + settings2.logo.margins.bottom,
    width: settings2.logo.margins.left + logo.width + settings2.logo.margins.bottom
  };
  const titleSVG = draw.text(title.text).font({
    fill: title.style.color,
    family: title.style.fontFamily,
    size: title.style.fontSize
  }).move(0, 0);
  titleSVG.leading(0);
  const titleDim = {
    height: settings2.title.margins.top + titleSVG.bbox().height + settings2.title.margins.bottom,
    width: settings2.title.margins.left + titleSVG.bbox().width + settings2.title.margins.bottom
  };
  const sloganSVG = draw.text(slogan.text).font({
    fill: slogan.style.color,
    family: slogan.style.fontFamily,
    size: slogan.style.fontSize
  }).move(0, 0);
  sloganSVG.leading(0);
  const sloganDim = {
    height: settings2.slogan.margins.top + sloganSVG.bbox().height + settings2.slogan.margins.bottom,
    width: settings2.slogan.margins.left + sloganSVG.bbox().width + settings2.slogan.margins.bottom
  };
  const widthContainer = logo.width + Math.max(titleDim.width, sloganDim.width);
  const heightContainer = Math.max(logoDim.height, titleDim.height + sloganDim.height);
  const cx = widthContainer / 2;
  const cy = heightContainer / 2;
  const textContainerWidth = Math.max(titleDim.width, sloganDim.width) + settings2.textContainer.margins.left + settings2.textContainer.margins.right;
  const textContainerHeight = titleDim.height + sloganDim.height + settings2.textContainer.margins.top + settings2.textContainer.margins.bottom;
  const ctx = textContainerWidth / 2;
  const cty = textContainerHeight / 2;
  logoSVG.move(textContainerWidth, cy - logoDim.height / 2);
  titleSVG.move(ctx - titleDim.width / 2, cy - titleDim.height / 2);
  sloganSVG.move(ctx - sloganDim.width / 2, cy + (cty - titleDim.height / 2) + sloganDim.height / 2);
  const currentViewBox = draw.viewbox();
  draw.viewbox(0, 0, currentViewBox.width < widthContainer ? widthContainer : currentViewBox.width + autoScallingOffsetMargin, currentViewBox.height < heightContainer ? heightContainer : currentViewBox.height + autoScallingOffsetMargin);
  return {
    containerPos: {
      x: 0,
      y: 0,
      cx,
      cy,
      width: widthContainer,
      height: heightContainer
    },
    containerElems: {
      logoSVG,
      titleSVG,
      sloganSVG
    }
  };
};
