const Dotenv = require("dotenv-webpack")
const path = require("path")

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "server/public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", "json", ".scss"]
  },
  plugins: [
    new Dotenv()
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./server/public"
  }
}
