declare module 'body-scroll-lock' {
    export const disableBodyScroll: (target: HTMLElement) => void
    export const enableBodyScroll: (target: HTMLElement) => void
    export const clearAllBodyScrollLocks: () => void

    export default {
        disableBodyScroll,
        enableBodyScroll,
        clearAllBodyScrollLocks
    }
}

