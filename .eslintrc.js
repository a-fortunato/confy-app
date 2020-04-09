module.exports = {
  extends: [
    'universe/native',
    'universe/web',
    'universe/shared/typescript-analysis',
  ],
  plugins: [
    'react-native',
  ],
  env: {
    'react-native/react-native': true,
    'jasmine': true,
  },
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
        '*.d.ts'
      ],
      parserOptions: {
        project: './tsconfig.json'
      },
    },
  ],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'index', 'sibling']
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    // General react-native
    'no-alert': 'warn', // disallow the use of alert, confirm, and prompt
    'no-div-regex': 'warn', // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-script-url': 'warn', // disallow use of javascript: urls.

    'no-mixed-requires': 'error', // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)

    'jsx-quotes': ['error', 'prefer-double'],
    'consistent-this': ['error', 'self'], // enforces consistent naming when capturing the current execution context (off by default)

    // //// //
    'no-invalid-this': 'off',

    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.
    'react/display-name': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-no-literals': 'warn',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-multi-comp': 'off',
    'react/no-string-refs': 'warn',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'warn',
    'react/self-closing-comp': 'warn',
    'react/wrap-multilines': 'off',

    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
  }
}
