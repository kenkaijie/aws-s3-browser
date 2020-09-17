# Setup steps

1) Install yarn (global yarn then project specific yarn)
2) Follow webpack.electron.build development documentation, install everything
3) We need an electron quick start, so copy the repo from https://github.com/electron/electron-quick-start

FAILED - some weird error, quick google search yields nothing, we will try again from Step 3, but clone down the quick start of electron-webpack
4) Seemed to fail due to yarn2, staying with yarn 1

5) Add Typescript, eslint, vue plugins, additionally also add eslint-typescript for typescript linting
6) Add lint script for our system

7) jest works if the scripts are in src/main only