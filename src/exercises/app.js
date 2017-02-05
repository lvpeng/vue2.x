import Vue from 'vue';

Vue.config.devtools = false

Vue.component('todo-item', {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
})

var vm = new Vue({
  el: '#app',
  data:{
    txt: "sdfd",
    placeholder:'please input your name',
    todos: [
      { text: 'vue.js toturial'},
      { text: 'vue.js 2'},
      { text: 'vue.js exercise'},
    ]
  },
  methods:{
    changed: (event) => {
      console.log(event.target.value)
    }
  },
})
