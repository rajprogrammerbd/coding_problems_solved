module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['dotenv/config'],
    coverageReporters: ['lcov', 'text', 'html']
  };