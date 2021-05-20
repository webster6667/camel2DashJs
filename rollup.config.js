import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from "rollup-plugin-commonjs"
import filesize from 'rollup-plugin-filesize'

import { terser } from 'rollup-plugin-terser'

const moduleFormat = process.env.NODE_ENV,
      shouldSqueeze = ['cjs'].includes(moduleFormat)

const inputFile = 'src/index.ts'
const outputFile = 'dist/index'
const extensions = ['.js', '.ts']

const plugins = [
    resolve({
    browser: true,
    extensions
}),
    babel({
        extensions,
        babelHelpers: 'runtime',
        presets: [
            [
                '@babel/preset-env',
                {
                    bugfixes: true,
                    modules: false,
                    targets: { browsers: '> 0.25%, ie 11, not op_mini all, not dead' }
                }
            ],
            '@babel/preset-typescript'
        ],
        plugins: [
            '@babel/plugin-transform-runtime'
        ],
        exclude: 'node_modules/**',
    }),
    commonjs(),
    filesize(),
]

if (shouldSqueeze === true) {
    plugins.push(terser())
}

export default [
    {
        input: inputFile,
        output: [
            {
                file: `${outputFile}.${moduleFormat}.js`,
                format: moduleFormat,
            }
        ],
        external: [/@babel\/runtime/],
        plugins

    }
]