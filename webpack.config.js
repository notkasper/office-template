const webpack = require("webpack");
const path = require("path");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getSslCert, getSslKey } = require("./utils");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: "./front-end/index.js",
  output: {
    path: path.resolve(__dirname, "back-end/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: "file-loader"
      },
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         mimetype: "image/png"
      //       }
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\/]node_modules[\\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    port: 8080,
    https: {
      key: getSslKey(),
      cert: getSslCert()
    },
    proxy: {
      "/api/**": {
        target: "https://localhost:3000/",
        pathRewrite: { "^/api": "" },
        secure: false,
        logLevel: "debug"
      }
    }
  }
};

module.exports = config;
