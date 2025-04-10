// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import path from 'node:path';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,

    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/*.js',
            '**/*.mjs',
        ],
    },

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: [path.resolve('./tsconfig.base.json')],
                tsconfigRootDir: path.resolve(),
            },
        },
        plugins: {
            import: importPlugin,
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            'import/order': 'off',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
        },
    },
    {
        rules: {
            ...prettier.rules,
        },
    },
];
