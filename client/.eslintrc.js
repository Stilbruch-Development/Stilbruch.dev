module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
    },
    "extends": [
        "airbnb",
        "prettier",
        "plugin:prettier/recommended",
    ],
    "rules": {
        "func-names": 0,
        "no-underscore-dangle": 0,
        "no-console": 0,
        "max-len": 0,
        "one-var": 0,
        "no-param-reassign": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-unescaped-entities": 0,
        "react/prefer-stateless-function":0,
        "react/destructuring-assignment":0,
        "react/prop-types":0,
        "react/forbid-prop-types":0,
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 120,
            }
        ],
    },
};