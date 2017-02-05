import Vue from 'vue'

var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

var vm = new Vue({
  el: "#demo",
  data: {
    title:'Latest Vue.js Commits',
    currBranch: 'master',
    apiURL: 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=',
    xmlhttp: null,
    commits: null
  },
  methods: {
    fetchCommits: function() {
        this.xmlhttp = new XMLHttpRequest();
        this.xmlhttp.onload = this.reqListener;
        this.xmlhttp.open("GET", this.apiURL + this.currBranch, true);
        this.xmlhttp.send();
      },
      reqListener: function() {
        if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
          //console.log(this.xmlhttp.responseText)
          this.commits = JSON.parse(this.xmlhttp.responseText);
        }
      }
  },
  created: function(){
    this.fetchCommits();
  }
});

vm.fetchCommits();
