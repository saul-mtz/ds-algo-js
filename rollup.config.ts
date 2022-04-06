import typescript from '@rollup/plugin-typescript';

export default {
  output: {
    file: "bundle.js",
  },
  plugins: [typescript()]
};
