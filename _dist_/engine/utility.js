export const moveToCenter = (draw, viewbox, container) => {
  const {logoSVG, titleSVG, sloganSVG} = container.containerElems;
  const currentViewBox = draw.viewbox();
  const viewboxWidth = Math.max(viewbox.width, currentViewBox.width);
  const viewboxHeight = Math.max(viewbox.height, currentViewBox.height);
  const xOffsetToCenter = viewboxWidth / 2 - container.containerPos.cx;
  const yOffsetToCenter = viewboxHeight / 2 - container.containerPos.cy;
  logoSVG.center(logoSVG.cx() + xOffsetToCenter, logoSVG.cy() + yOffsetToCenter);
  titleSVG.center(titleSVG.cx() + xOffsetToCenter, titleSVG.cy() + yOffsetToCenter);
  sloganSVG.center(sloganSVG.cx() + xOffsetToCenter, sloganSVG.cy() + yOffsetToCenter);
  return container.containerElems;
};
