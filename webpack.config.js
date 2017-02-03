var path = require('path');

module.exports = {
  entry: './src/demo1/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/demo1/dist'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "src/demo1"),
    compress: true,
    port: 9000
  }
};
