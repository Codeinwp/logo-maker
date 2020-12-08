export function exportSVGfromDOMviaLink(logoContainer: HTMLElement): string {
        const svg = logoContainer.innerHTML
        const blob = new Blob([svg.toString()])
        return window.URL.createObjectURL(blob)
}