//@flow

module.exports  = {
  automock: false,
  browser: false,
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: [
    `<rootDir>/src/**/*.test.js`,
    `<rootDir>/src/**/*.spec.js`,
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/'],
  transformIgnorePatterns: ['node_modules/(?!(bs-platform)/)'],
}