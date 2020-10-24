# Boilerplate

This is a boilerplate based on electron webpack boilerplate, with modifications to support vue and typescript.
Using the vue and typescript plugins for electron webpack.
Uses eslint for typescript and vue linting

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir

# lint
yarn lint

# lint with --fix
yarn lint:fix
```

### Unit Testing

Unit testing is done via jest. Tests should be placed in the test folder with names ending in the extension `*.test.ts`.