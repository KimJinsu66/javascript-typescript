
Vue.component('todo-footer', {
  template: '<footer>footer 입니다</footer>'
});

const todoList = {
  template: '<div>todo list 입니다</div>'
};

var app = new Vue({
  el: '#app',
  data: {
    message: 'This is a parent component'
  },

  components: {
    'todo-list': todoList
  }
})