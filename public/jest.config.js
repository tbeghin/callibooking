module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.*/*.actions.ts',
    '<rootDir>/.*/*.module.ts',
    '<rootDir>/.*/index.ts',
    '<rootDir>/.*/*.reducers.ts',
  ]
};
