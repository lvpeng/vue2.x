var path = require('path');

module.exports = {
  entry: './src/apidocs/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/apidocs/dist'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "src/apidocs"),
    compress: true,
    port: 9000,
    hot:true,
    inline: true
  }
};
