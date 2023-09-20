const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/tnpremierproperties/" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: 
          `
          @import "@/scss/_variables.scss";
          @import "@/scss/_core.scss";
          `
      }
    }
  }
};
