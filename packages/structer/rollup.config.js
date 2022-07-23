// rollup.config.js
import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  input: "src/public_api.ts",
  output: {
    file: "dist/main.js",
    format: "commonjs",
    banner: `
/*
  This package is created by Vincent Thomas https://about.v-thomas.me.
  Github repository: https://github.com/vincent-thomas/structer.
  This project is under the MIT license
*/
`,
    compact: true,
    indent: false,
    strict: true,
    validate: true,
    footer: `
/*
  If you liked this package, please consider donating to the author: https://link.v-thomas.me/donate
*/
`,
  },
  plugins: [typescript({})],
  treeshake: true,
});
