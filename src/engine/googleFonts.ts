export function generateUrlForFonts(fonts: string[]): string {
	const formatFont = fonts.map(f => `family=${f.split(" ").join("+")}`)
	return `https://fonts.googleapis.com/css2?${formatFont.join("&")}&display=swap`
}