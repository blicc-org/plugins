import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import minify from 'rollup-plugin-babel-minify'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const config = {
  input: 'src/bundle.js',
  output: {
    file: 'build/bundles/bundle.min.js',
    format: 'esm',
    name: 'bundle',
  },
  plugins: [
    resolve({
      extensions,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    minify({
      comments: false,
    }),
  ],
  onwarn: function (warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return
    warn(warning)
  },
}

export default [
  {
    ...config,
    input: 'src/bundle.stories.ts',
    output: {
      dir: 'build/bundles',
      format: 'esm',
    },
  },
  {
    ...config,
    input: 'src/essentials.stories.ts',
    output: {
      dir: 'build/bundles',
      format: 'esm',
    },
  },
  {
    ...config,
    input: 'src/news.stories.ts',
    output: {
      dir: 'build/bundles',
      format: 'esm',
    },
  },
]
