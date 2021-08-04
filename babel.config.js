module.exports = { 
    presets: ['@expo/next-adapter/babel'],
    overrides: [
        {
            test: './node_modules/react-native-reanimated/*',
            plugins: ['@babel/plugin-proposal-class-properties']
        },
        {
            test: './node_modules/@expo/vector-icons/*',
            plugins: ['@babel/plugin-proposal-class-properties']
        }
    ]
}
