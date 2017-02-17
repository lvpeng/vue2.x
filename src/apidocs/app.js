import Vue from 'vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'aaaa'
  }
});

vm.msg = 'bbbb';

Vue.nextTick(function(){
  //Dom update
  alert(this.msg)
});

var baby =  Vue.extend({
  template: "<div>{{ firstname }} {{ lastname}}</div>",
  data() {
    return {
      firstname: "yihan",
      lastname: "lyu"
    }
  }
})

new baby().$mount('#app')


Vue.nextTick()
