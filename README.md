# Line-melody
Line melody is a mobile web app. This service provides snippets of songs that can be set as ringtones and ringback tones in LINE when someone is trying to call you, or when you are calling someone.

## Table of content

- [Get Started](#Get-Started)
- [Project Structure](#Project-Structure)
    - [Api](#Api)
    - [Components](#Components)
    - [Pages](#Pages)
- [Technology Stack](#Technology-stack)
- [Deployment](#Deployment)
    - [Environment Variables](#Environment-Variables)
- [Conventions](#Conventions)
    - [Variable Name](#Variable-Name)
    - [Interface Name](##Interface-Name)
    - [File Name](#File-Name)
    - [Import / Export](#Import--Export)
    - [Commit Message](#Commit-Message)

## Get Started

This project was built upon [Create React App (CRA)](https://github.com/facebook/create-react-app), a React boilerplate application. To start running the project, these dependencies have to be installed.

1. [Node.js](https://nodejs.org/en/) - JavaScript runtime.
2. [NVM](https://github.com/nvm-sh/nvm) - `Node.js` version control.
3. [Yarn](https://yarnpkg.com/) - `Node.js` package manager.

Once you all required dependencies are install run,

```shell
$ yarn
```

Finally, run any of these available commands

| Command        | Description                                            |
| -------------- | ------------------------------------------------------ |
| yarn start     | start the development server                           |
| yarn build     | build production mode with `production` configuration  |
| yarn test      | run unit test suite                                    |

## Project Structure

This project got organized in a `flattern` based structure, where each module can be found under `src`. All resources will be created within each module itself and will be moved up to the upper-level folder if it needed to be shared;

```
line-melody
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── config
├── scripts
├── public
└── src
      ├── api               # shared api endpoints
      ├── components        # shared component
      ├── pages             # shared pages
      └── ...
    ├── App.tsx
    ├── index.tsx
    └── ...

```

## Technology Stack

This project has been built up one these technologies, please familiarize yourself to it.

| Name         | Description                                                |
| ------------ | ---------------------------------------------------------- |
| ESLint       | A tool to find and fix problems in JavaScript code         |
| Prettier     | A tool for code formatting                                 |
| Webpack      | A module bundle tool                                       |
| Typescript   | A static type-checking tool                                |
| Emotion      | A CSS-in-JS library                                        |
| React-query  | Javascript fetching api library

## Conventions

### Variable Name

This project use `camelCase` in conventions for variables and functions, `PascalCase` for types or classes and `UPPERCASE_SNAKE_CASE` for constants.

### Interface Name

This project use `PascalCase` in the types name and with suffix `Props` for types that were used in the component.

### File Name

This project use `camelCase` in files that were typescript functions, variable and contains configuration for components and use `Pascal` case for the component name.

### Import / Export

This project use import / export in order of `ascending` characters with insensitive case, and from an absolute path to relative path.

Use the `named export` for every typescript file to be consistent in the project.

### Commit message

Be mindful of your commit messages and please follow [Conventional Commits](https://conventionalcommits.org).

```
feat:     A new feature
fix:      A bug fix
docs:     Documentation only changes
style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor: A code change that neither fixes a bug nor adds a feature
perf:     A code change that improves performance
test:     Adding missing or correcting existing tests
chore:    Changes to the build process or auxiliary tools and libraries such as documentation generation
```