# heft-web-rig-library-tutorial

This project folder demonstrates a sample configuration of the [Heft](https://www.npmjs.com/package/@rushstack/heft)
build system. It illustrates a minimal realistic small library project that targets the web browser runtime,
and builds using the rig package `@rushstack/heft-web-rig`.

The library is imported by the [heft-web-rig-app-tutorial](../heft-web-rig-app-tutorial/) project.

The following tasks are configured:

- [TypeScript](https://rushstack.io/pages/heft_tasks/typescript/) compiler
- [ESLint](https://rushstack.io/pages/heft_tasks/eslint/) coding style validator
- [Jest](https://rushstack.io/pages/heft_tasks/jest/) test runner
- [API Extractor](https://rushstack.io/pages/heft_tasks/api-extractor/) task for .d.ts rollup generation

Please see the [Getting started with Heft](https://rushstack.io/pages/heft_tutorials/getting_started/)
and [Using rigs](https://rushstack.io/pages/heft/rig_packages/) articles for more information.
