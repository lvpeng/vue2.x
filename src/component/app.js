import Vue from 'vue';

//global component
Vue.component('custom-component', {
  template: '<div>{{msg}}</div>',
  data: function(){
    return {
      msg: 'i am a custom component'
    };
  }
});

//
var _data = {
  counter: 0
};
Vue.component('simple-counter', {
  template:'<button v-on:click="counter += 1">{{counter}}</button>',
  data: function(){
    // return _data;
    return {
      counter:0
    };
  }
});

// props
Vue.component('child', {
  template: '<div>{{msg}}</div>',
  props: ["msg"]
});



Vue.component('btncounter', {
  template: "<button v-on:click='increasement'>{{counter}}</button>",
  data: function(){
    return {
      counter: 0
    };
  },
  methods: {
    increasement: function(){
      this.counter += 1;
      this.$emit('increasement');
    }
  }
});


var vm = new Vue({
  el: '#app',
  data: {
    inputTxt: 'hello',
    totalCount: 0
  },
  methods:{
    plusOne: function() {
      this.totalCount += 1;
    },
  }
});
