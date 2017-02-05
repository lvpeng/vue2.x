var path = require('path');

module.exports = {
  entry: './src/exercises/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/exercises/dist'),
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "src/exercises"),
    compress: true,
    port: 9000,
    hot:true,
    inline: true
  }
};
