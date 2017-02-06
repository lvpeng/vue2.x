var path = require('path');

module.exports = {
  entry: './src/issue4846/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/issue4846/dist'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "src/issue4846"),
    compress: true,
    port: 9000,
    hot:true,
    inline: true
  }
};
