module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest/setupFilesAfterEnv.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^assets/?(.*)$": "<rootDir>/src/assets/$1",
    "^components/?(.*)$": "<rootDir>/src/components/$1",
    "^pages/?(.*)$": "<rootDir>/src/pages/$1",
    "^server/?(.*)$": "<rootDir>/src/server/$1",
    "^services/?(.*)$": "<rootDir>/src/services/$1",
    "^styles/?(.*)$": "<rootDir>/src/styles/$1",
    "^types/?(.*)$": "<rootDir>/src/types/$1",
    "^utils/?(.*)$": "<rootDir>/src/utils/$1",
    "^redux/(.*)$": "<rootDir>/src/redux/$1",
    "\\.(s?css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|svg|avif)$":
      "<rootDir>/jest/moduleMapper/fileMock.js",
  },
  collectCoverage: false,
};
