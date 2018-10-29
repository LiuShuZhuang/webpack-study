const path = require("path");
module.exports = {
    entry: {
        file1: './src/index.js',
        file2: './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname,)
    }
}