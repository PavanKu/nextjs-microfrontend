const { dependencies } = require("./package.json");

module.exports = {
  name: "reactjs_child",
  exposes: {
    "./App": "./src/App",
  },
  filename: "static/chunks/remoteEntry.js",
  shared: {},
};
