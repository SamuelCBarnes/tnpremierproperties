const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
    publicPath: "/tnpremierproperties/",
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
