# playkit-js-common

[![Build Status](https://github.com/kaltura/playkit-js-common/actions/workflows/canary.yaml/badge.svg)](https://github.com/kaltura/playkit-js-common/actions/workflows/canary.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/@playkit-js/common/latest.svg)](https://www.npmjs.com/package/@playkit-js/common)
[![](https://img.shields.io/npm/v/@playkit-js/common/canary.svg)](https://www.npmjs.com/package/@playkit-js/common/v/canary)

Pack of utils and ui-components for V7 player and plugins.

## Storybook page

https://kaltura.github.io/playkit-js-common

## How to use

1. add `@playkit-js/common` into project dependencies (`npm install @playkit-js/common` or if yarn uses `yarn add @playkit-js/common`)
2. import methods, classes or components to project, f.e: `import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';`

## Scripts

- `build` build modules
- `dev` watch on file changes and build modules
- `release` bump package version and add changes from commits into CHANGELOG
- `pushTaggedRelease` push latest tag to GitHub repo
- `storybook:install` install dependencies of storybook submodule
- `storybook` run dev-server for storybook (https://storybook.js.org/docs/preact/get-started/introduction)
- `storybook:build` create static files for storybook
- `storybook:deploy` push storybook static files to GitHub pages
