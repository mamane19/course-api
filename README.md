## Muraluxe 📱

A dashboard for Muraluxe users to manage their accounts and engage with the platform accordingly.

## Muraluxe Description 📝

Muraluxe is xyz...
## Table of Contents 📑

- [Muraluxe 📱](#muraluxe-)
- [Muraluxe Description 📝](#muraluxe-description-)
- [Table of Contents 📑](#table-of-contents-)
- [Prerequisites 🔧](#prerequisites-)
  - [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
  - [Project Structure](#project-structure)
  - [Naming Convention](#naming-convention)
    - [Directory or File](#directory-or-file)
    - [Functions or Variables](#functions-or-variables)
  - [Other notes](#other-notes)
- [Technologies Used ⚙](#technologies-used-)
- [Bugs 🐛](#bugs-)

## Prerequisites 🔧
- [Nestjs](#nestjs)
- [TypeScript](#typescript)
- [Node.js](#nodejs)
- [Npm](#npm)
- [Git](#git)
- [MongoDB](#mongodb)

### Getting Started

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Project Structure

- **src:** This is where all the project functional codes are
- **shared:** This is where all the shared functional codes are. It is used to share functional codes between multiple files.
- **Common:** This is where all the common functional codes are. It is used to share functional codes between multiple files. An example is the `envs` configuration file.

  - **envs:** This is where all the environment configurations are. It is used to share environment configurations between multiple files.

You will notice that the project is split into multiple folders. This is because we want to keep the project structure as simple as possible. 

Inside the **src** folder, you will find folders such as Auth, Users, and Multipliers.

Inside each one of those folders, you will find files such as `index.ts`, `routes.ts`, `controller.ts`, and `service.ts`.

To generate a new folder, you can use the following command:

```bash
$ nest g resource {folder_name}
```
Now, you will find a new folder named `{folder_name}` inside the **src** folder with all the necessary files. And you can start coding!

Or you can use the following commands to generate new files if that is what you want:

```scala
$ nest g module {file_name} // to generate a new module
$ nest g service {file_name} // to generate a new service 
$ nest g controller {file_name} // to generate a new controller
```

Nest cli is a command line interface that helps you to generate new folders and files. You can check the documentation [here](https://docs.nestjs.com/cli/overview) to learn more.

### Naming Convention

#### Directory or File

`lowerCamelCase` should be used when creating a new directory or file. Except on creating a component file/directory a `UpperCamelCase` should be used instead.

#### Functions or Variables

`lowerCamelCase` should be used when defining new variables or functions.


### Other notes
 - Please use the [nestjs](
    https://docs.nestjs.com/guide/concepts/nestjs-concepts)
    documentation to learn more.
- Make sure to check the [CONVENTIONS.md](CONVENTIONS.md) file for more information on guidelined and how we do things.

## Technologies Used ⚙

- Nestjs - [Nestjs](
  https://nestjs.com/docs/6.x/guides/basics)
- TypeScript - [TypeScript](
  https://www.typescriptlang.org/docs/handbook/basic-types.html)
- Node.js - [Node.js](
  https://nodejs.org/en/docs/guides/nodejs-getting-started/
)
- MongoDB - [MongoDB](
  https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
)
- Redis - [Redis](
  https://redis.io/
)
- Pino - [Pino]()

## Bugs 🐛

No known bugs. If you find any, please create an issue.




