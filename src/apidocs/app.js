import Vue from 'vue'

// var vm = new Vue({
//   el: '#app',
//   data: {
//     msg: "aaa"
//   }
// });
//
// vm.msg = "bbb"
//
// console.log(vm.$el.textContent);
//
// Vue.nextTick(() => {
//   console.log(vm.$el.textContent);
// })

// var baby =  Vue.extend({
//   template: "<div>{{ firstname }} {{ lastname}}</div>",
//   data() {
//     return {
//       firstname: "yihan",
//       lastname: "lyu"
//     }
//   }
// })
//
// new baby().$mount('#app')
//
//

Vue.component('example', {
  template: '<div><span>{{ message }}</span> <button @click="updateMessage">updateMessage</button></div>',
  data: function () {
    return {
      message: 'not updated'
    }
  },
  ready(){
    this.updateMessage();
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})
var vm = new Vue({
  el: '#app',
  data: {
    msg: "aaa",
    msg2: '',
    obj: {

    }
  }
});
vm.msg2 = 2
// vm.msg  = "mmm"
Vue.set(vm.obj, 'a' , 'a')
