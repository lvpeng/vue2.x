import Vue from 'vue';


Vue.component('my-component', {
  template: `<div>
               <h2>child title</h2>
               <slot>this is only show if there is no content to be distrubuted</slot>
            </div>`,
});



Vue.component('app-layout', {
  template: `<div class="container">
              <header>
                <slot name="header"></slot>
              </header>
              <main>
                <slot></slot>
              </main>
              <footer>
                <slot name="footer"></slot>
              </footer>
            </div>`
});

Vue.component('child',{
  template: `
            <div>
              <slot text="hello from child"></slot>
            </div>`
})



new Vue({
  el: '#app'
});
