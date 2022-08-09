const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: './docs',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/rf5-guide/'
        : '/',
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/styles/_global.scss";`
            }
        }
    }
});
