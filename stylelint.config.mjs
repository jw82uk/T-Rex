/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    // Custom rules
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__[a-z0-9-]+)?(--[a-z0-9-]+)?$',
      {
        resolveNestedSelectors: true,
        message: 'Expected class selector to be BEM kebab-case',
      },
    ],
  },
};
