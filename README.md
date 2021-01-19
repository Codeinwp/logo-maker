# Logo Maker

Logo Maker is a react app build with [Typescript](https://www.typescriptlang.org/) created for designing simple logos.

## Instalation on Wordpress

The easy way: go to `/development` and download the zip file, then upload it on the `wp-admin/plugins.php`

The hard way: go to plugin folder of the WordPress and then `git clone https://github.com/Codeinwp/logo-maker.git`

**In order to make the `back button` on the Start page to work you need to assing in WordPrees a parent page to the page that host the Logo Maker.**

**Make sure that the page that host the Logo Maker is empty.**

## Getting starter on development

Before you venture in the development of the Logo Maker, you need to have:

-   [Node Js](https://nodejs.org/en/) with npm & npx
-   [Git](https://git-scm.com/)
-   Text Editor / IDE (see Recomended Tools)

## Installation

Using npm

```bash
git clone https://github.com/Codeinwp/logo-maker.git
cd logo-maker
npm install
```

Using [pnpm](https://pnpm.js.org/) (recommended)

```bash
git clone https://github.com/Codeinwp/logo-maker.git
cd logo-maker
pnpm install
```

Using yarn

```bash
git clone https://github.com/Codeinwp/logo-maker.git
cd logo-maker
yarn install
```

## Npm Commmands

`npm run start` - start the development server using Snowpack - it's fast and run separatly from WordPress - use it for prototyping and quick testing

`npm run start-plugin` - start the development server in WordPress using Webpack - the project must be in `plugin` folder and activated - use it for testing the app as block in WordPress

`npm run plugin-build` - created an optimased version for the app as a WordPress block

`npm run linux:make-zip` - this will start the `plugin-build` and pack it in a zip file in `./development` folder - use the zip to install the plugin on stagging site for testing - this will work on system that supports linux environment and command - **must run `./delopment/linux_setup.sh` for installing the zip command**

`npm run gen-docs` - generate the docs

`npm run format` - format the Typescript file in `./src` folder using Prettier

`npm run lint` - check for issues in the Typescript file in `./src` folder using EsLint

## Recomended Tools

The coding style is enforced using [ESLint](https://eslint.org/) with [Standard](https://standardjs.com/) as base rules and adjusted to [Typescript](https://www.typescriptlang.org/).

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[Prettier](https://prettier.io/) is used for formating and is [integrated with ESLint](https://github.com/prettier/eslint-config-prettier) (some rules might be disabled in case of conflict).

### IDE / Text Editor

-   Visual Studio Code

    -   Plugins
        -   ESLint
        -   Prettier
        -   Git Graphs
        -   Gruvbox Minor
        -   Path Intellisense
        -   vscode-icons
        -   Visual Studio IntelliCode

-   WebStorm

### Shells

-   fish
-   zsh
-   bash

## Resources for learning

### React

-   https://reactjs.org/
-   https://egghead.io/instructors/dan-abramov
-   [Not Free] https://www.udemy.com/course/react-redux/
-   https://react-typescript-cheatsheet.netlify.app/docs/basic/setup
-   https://react-tutorial.app/
-   https://www.freecodecamp.org/learn/front-end-libraries/react/
-   https://www.youtube.com/watch?v=DLX62G4lc44

### Typescript

-   https://www.typescriptlang.org/docs/handbook/intro.html
-   [Not Free] https://www.udemy.com/course/typescript-the-complete-developers-guide/
-   https://jcemer.com/types-in-javascript-what-you-should-care.html
-   https://serokell.io/blog/why-typescript
-   https://www.youtube.com/watch?v=BwuLxPH8IDs
-   https://www.youtube.com/watch?v=BnIhk4igd8I
-   https://www.youtube.com/watch?v=IXAT3If0pGI

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
