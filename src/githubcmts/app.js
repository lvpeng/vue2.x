import Vue from 'vue'

var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

var vm = new Vue({
  el: "#demo",
  data: {
    title:'Latest Vue.js Commits',
    branchs: ['master', 'dev'],
    currBranch: 'master',
    commits: null
  },
  methods: { //here is `methods` , not `method` !!
    fetchCommits: function(){
      var xhttp = new XMLHttpRequest();
      xhttp.addEventListener("load", reqListener);
      xhttp.open("GET", apiURL + this.currBranch, true);
      xhttp.send();
      var self = this;
      function reqListener () {
        // console.log(this.responseText);
        self.commits = JSON.parse(this.responseText);
      }
    }
  }
});

vm.fetchCommits();
