const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3002,
  },
  output: {
    publicPath: "auto",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "webpack_mf_host",
      type: "var",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "webpack_mf_host",
      filename: "remoteEntry.js",
      exposes: {
        "./app": "./src/App.tsx",
      },
      remotes: {
        webpack_mf: "webpack_mf@http://localhost:3003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-error-boundary": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
