1. yarn add vue (lastest stable vue version)
2. install vue by NPM (commonjs module)
3. bundle module to lib using Webpack
   - import module -> bundle ->  script file
4. bundle: ✓
  - https://github.com/vuejs/vue-loader/issues/287
  - ```javscript
  resolve: {
      alias: {
        'vue$': 'vue/dist/vue.common.js'
        }
      }
    ```
5. dev-server
  
