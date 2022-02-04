# Logo Maker

Logo Maker is a react app built with [Typescript](https://www.typescriptlang.org/) created for designing simple logos.

![Live Build](https://github.com/Codeinwp/logo-maker/workflows/Deploy%20on%20live/badge.svg)
![Staging Build](https://github.com/Codeinwp/logo-maker/workflows/Deploy%20on%20staging/badge.svg)

## Installation on WordPress

The easy way: go to `/development` and download the zip file, then upload it on the website in `wp-admin/plugins.php`

The hard way: go to the plugin folder of the WordPress and then `git clone https://github.com/Codeinwp/logo-maker.git`

**To make the `back button` on the Start page work, you need to assign in WordPress a parent page to the page that host the Logo Maker.**

**Make sure that the page that hosts the Logo Maker is empty.**

## Getting starter on development

**Don't forget to read the Architecture to see details about the code.**
**For developing in the plugin mod, you need to have a WordPress site installed on the computer or in a container.**

Before you venture into the development of the Logo Maker, you need to have:

-   [Node Js](https://nodejs.org/en/) with npm & npx - available in the docker container
-   [Git](https://git-scm.com/) - available in the docker container
-   Text Editor / IDE (see Recommended Tools)

### Developing in containers

With Docker, you can develop the app in standalone and plugin mode. Docker will create two containers: a WordPress server and a database server by running `docker-compose up`. For working in these containers, you need to have tools that work remotely. Visual Studio Code can give you a seamless experience with the (Docker plugin)[https://code.visualstudio.com/docs/containers/overview] - with one click; you can start developing.

#### Connecting with terminal

```bash
docker exec -it otter-blocks_wordpress_1 bash # enter in the WordPress server and acces the bash shell
cd /var/www/html/wp-content/plugins/logo-maker # go the location of the project
```

## Installation

**If you are using the Docker compose file in this project, skip the download part and install the npm packages.**

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

~~`npm run start` - start the development server using Snowpack - it's fast and run separately from WordPress - use it for development.~~

`npm run start-plugin` - start the development server in WordPress using Webpack - the project must be in `plugin` folder and activated - use it for testing the app as a block in WordPress.

`npm run plugin-build` - created an optimized version for the app as a WordPress block.

`npm run linux:make-zip` - this will start the `plugin-build` and pack it in a zip file in `./development` folder - use the zip to install the plugin on stagging site for testing - this will work on a system that supports Linux environment and command - **must run `./delopment/linux_setup.sh` for installing the zip command**.

`npm run gen-docs` - generate the docs

~~`npm run format` - format the Typescript file in `./src` folder using Prettier~~

~~`npm run lint` - check for issues in the Typescript file in `./src` folder using EsLint~~

## Recommended Tools

The coding style is enforced using [ESLint](https://eslint.org/) with [Standard](https://standardjs.com/) as base rules and adjusted to [Typescript](https://www.typescriptlang.org/).

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[Prettier](https://prettier.io/) is used for formating and is [integrated with ESLint](https://github.com/prettier/eslint-config-prettier) (some rules might be disabled in case of conflict).

### IDE / Text Editor

-   Visual Studio Code

    -   Plugins
        -   ESLint
        -   Prettier
        -   Git Graphs
        -   Git Lens
        -   Gruvbox Minor
        -   Path Intellisense
        -   vscode-icons
        -   Visual Studio IntelliCode
        -   Docker

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
