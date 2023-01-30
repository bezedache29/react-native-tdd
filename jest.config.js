module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation)',
  ],
}

// module.exports = {
//   preset: 'ts-jest',
//   transform: {
//     '^.+\\.(ts|tsx)?$': 'ts-jest',
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
// }

// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   transform: {
//     '^.+\\.ts?$': 'ts-jest',
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
// }

// const config = {
//   verbose: true,
// }

// module.exports = config

// module.exports = {
//   preset: 'react-native',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   transformIgnorePatterns: [
//     'node_modules/(?!(react-native' +
//       '|react-navigation-tabs' +
//       '|react-native-splash-screen' +
//       '|react-native-screens' +
//       '|react-native-reanimated' +
//       ')/)',
//   ],
// }
