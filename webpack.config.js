const path = require('path');

module.exports = {
    entry: './try-webpack/src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    }
}