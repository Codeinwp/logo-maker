export function generateUrlForFonts(fonts) {
  const formatFont = fonts.map((f) => `family=${f.split(" ").join("+")}`);
  return `https://fonts.googleapis.com/css2?${formatFont.join("&")}&display=swap`;
}
export function generateUrlForFont(font) {
  const formatFont = `family=${font.split(" ").join("+")}`;
  return `https://fonts.googleapis.com/css2?${formatFont}`;
}
