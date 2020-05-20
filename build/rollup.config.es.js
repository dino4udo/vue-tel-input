import base from './rollup.config.base';

const config = Object.assign({}, base, {
  output: {
    name: 'vue-tel-input',
    dir: 'dist',
    // file: 'dist/vue-tel-input.esm.js',
    format: 'es',
  },
});

export default config;
