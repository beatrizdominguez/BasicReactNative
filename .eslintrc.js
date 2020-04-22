module.exports = {
  root: true,

  "plugins": [
    "react"
  ],
  extends: '@react-native-community',
  "rules": {
      // overrides
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1}],
    "no-useless-escape": 0,
    "no-inner-declarations": 0,
    "comma-dangle": ["error", "only-multiline"],
    "no-whitespace-before-property": "error",
    "spaced-comment": ["error", "always"],
    "keyword-spacing": ["error", { "before": true }],
    "no-trailing-spaces": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "no-multiple-empty-lines": "error",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "padded-blocks": ["error", "never"],
    "indent": ["error", 2],
    "block-spacing": "error",
    "eol-last": ["error", "always"],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "single"],
    "no-multi-spaces": "error",
    "react/prop-types": 0
  }
};
