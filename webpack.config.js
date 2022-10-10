const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: 'development',
entry: './src/index.js',
devtool: 'inline-source-map',
output: {
path: path.join(__dirname, '/dist'),
filename: 'bundle.js'
},
devtool: 'inline-source-map',
devServer: {
static: './dist',
},
module: {
    rules: [
        {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        },
        {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        },
        {
            test: /\.(sa|sc|c)ss$/, // styles files
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
            loader: "url-loader",
            options: { limit: false },
          },
        ]
},
resolve: {
    extensions: ['.tsx', '.ts', '.js'],
},
plugins:[
new HtmlWebpackPlugin({
template: './index.html'
})
]
}