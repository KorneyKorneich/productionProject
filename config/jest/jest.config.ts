/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'
import path from 'path';

const config: Config = {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    moduleDirectories: [
        'node_modules'
    ],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    rootDir: '../../',
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    }
}

export default config
