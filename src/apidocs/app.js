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
  data(){
    return {
      message: 'not updated'
    }
  },
  methods: {
    updateMessage: function () {
      this.message = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(() => {
        console.log(this.$el.textContent); // 'updated'
      })
    }
  }
})
var vm = new Vue({
  el: '#app',
  mixins: ['mixin'],
  data: {
    msg: "aaa",
    msg2: '',
    obj: {

    }
  },
  computed: {
    fullname(){
      return this.firstname + ' ' + this.lastname
    }
  }
});
vm.msg2 = 2
// vm.msg  = "mmm"

Vue.set(vm.obj, 'a', 'aaa')
Vue.set(vm.obj, 'b', 'bbb')
Vue.delete(vm.obj, 'b')


// define a mixin object
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
// define a component that uses this mixin
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // -> "hello from mixin!"
