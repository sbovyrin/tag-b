import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: 'src/tag-b.js',
    output: {
      name: 'tag-b',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs()
    ]
  },
  {
    input: 'src/tag-b.js',
    external: ['react'],
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'}
    ]
  }
];
