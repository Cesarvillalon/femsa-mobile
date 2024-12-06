module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.ts'],
  transformIgnorePatterns: [
    'jest-runner',
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
