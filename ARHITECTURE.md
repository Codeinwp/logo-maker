> This document will describe the general architecture of the application and serves as a starting point for development. 

## A tale of two brothers.

### For the moment, there are two main parts: the user interface and the rendering engine ( and the backend, maybe in the future).

The user interface includes all the components that the user can see. Every page has its own React component. E.g.: `/#/showcase/` -> `Showcase.tsx`. The building blocks for these components are in `assets` and `components` on the `src` folder. For passing data through components, we use a state manager similar to React's hooks - see the `store` folder.

The star of this application is the rendering engine. The engine has two main jobs: to generate the final logo in SVG format and to export the result in other formats like png, webp, jpeg with different sizes based on their platform of use (Facebook, Twitter). Unlike the user interface, the engine does not use React, and it is framework agnostic - you can use it with other frameworks like Vue, Svelte, or pure HTML & Javascript. The main folder is in the `engine` on the `src` folder.

## Overview

The application has two separate build pipelines: the WordPress block and the LogoMaker app. The LogoMaker can run separately from WordPress; all you need to this to make sure that `logo-maker.js` is on the page and has a root parent ("#themeisle-logo-maker-root").

If you want to extend the WordPress plugin, you work in `./wordpress` using webpack with the command `npm run start-plugin`. For developing LogoMaker, you have `./src` and the command `npm run start` for running without WordPress using SnowPack.

![Overview](development/Overview.png)