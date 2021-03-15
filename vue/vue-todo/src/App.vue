<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput  v-on:addTodo="addTodo"></TodoInput>
    <TodoList   v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput  from './components/TodoInput.vue'
  import TodoList   from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  
  export default {
    data() {
      return {
        todoItems: []
      }
    },

    created() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    },

    methods: {
      addTodo(todoItem) {
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },

      clearAll() {
        localStorage.clear();
        this.todoItems = [];
      },

      removeTodo(todoItem, index) {
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1); // index 1을 삭제한다.
      }
    },

    components: {
      'TodoHeader': TodoHeader,
      'TodoInput':  TodoInput,
      'TodoList':   TodoList,
      'TodoFooter': TodoFooter
    }    
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }

</style>
