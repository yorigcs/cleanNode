
export default {
  roots: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  coveragePathIgnorePatterns: ['protocols', 'domain']
}
