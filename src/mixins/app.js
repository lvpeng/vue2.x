import Vue from 'vue'


// The mixins option accepts an array of mixin objects.
// thes mixin objects can contain instance options
//  These mixin objects can contain instance options just like normal instance objects, and they will be merged against the eventual options using the same option merging logic in Vue.extend(). e.g. If your mixin contains a created hook and the component itself also has one, both functions will be called.
// Mixin hooks are called in the order they are provided, and called before the component’s own hooks.


// define a mixin object
var myMixin = {
  created: function () {
    console.log('mixin created hook');
  },
  methods: {
    bar(){
      console.log('mixin bar method')
    },
    foo() {
      console.log('mixin foo method')
    }
  }
}

var vm = new Vue({
  el:'#app',
  data: {
    msg: ''
  },
  mixins: [myMixin],
  created(){
    console.log('instance created hook');
  },
  methods: {
    baz(){
      console.log('instance baz method')
    },
    foo(){
      console.log('instance foo methods')
    }
  }
})
vm.baz(); // instance baz method
vm.bar(); // mixin bar method
vm.foo(); // instance foo method

//Global Mixins
Vue.mixins({
  create(){
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
});

var Vue({
  myOption: 'i am custom option'
})
