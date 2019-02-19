import resolve from 'rollup-plugin-node-resolve';

export default {
  output: {
    file: 'bundle.js',
    format: 'cjs',
    strict: false,
  },
  plugins: [
    resolve(),
  ]
}
