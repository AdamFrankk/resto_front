const { defineConfig } = require("@vue/cli-service");


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://e531-5-139-212-240.eu.ngrok.io',
  },
});
