import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
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
      commonjs(),
      terser()
    ]
  },
  {
    input: 'src/tag-b.js',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'}
    ],
    plugins: [
      terser()
    ]
  }
];
