# playkit-js-common

Pack of utils and ui-components for V7 player and plugins.

## How to use
1. add `@playkit-js/common` into project dependencies (`npm install @playkit-js/common` or if yarn uses `yarn add @playkit-js/common`)
2. import methods, classes or components to project, f.e: `import { A11yWrapper } from '@playkit-js/common/dist/hoc/a11y-wrapper';`

## Scripts
- `build` build modules
- `dev` watch on file changes and build modules
- `release` bump package version and add changes from commits into CHANGELOG
- `pushTaggedRelease` push latest tag to GitHub repo
- `storybook` run dev-server for storybook (https://storybook.js.org/docs/preact/get-started/introduction)
- `build-storybook` create static files for storybook
- `deploy-storybook` push storybook static files to GitHub pages
