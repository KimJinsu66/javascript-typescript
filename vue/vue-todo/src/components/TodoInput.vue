<template>
  <div class="input-box shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
    <span class="add-container" v-on:click="addTodo">
      <i class="add-btn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요.
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
  import Modal from './common/Modal.vue'

  export default {
    data() {
      return {
        newTodoItem: '',
        showModal: false
      }
    },

    methods: {
      addTodo() {
        if (this.newTodoItem !== "") {
          let value = this.newTodoItem && this.newTodoItem.trim();
          this.$emit('addTodo', value);
          this.clearInput();
        } else {
          this.showModal = ~this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = "";
      },
    },

    components: {
      Modal: Modal
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  
  .input-box {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  
  .input-box input {
    border-style: none;
    font-size: 0.9rem;
  }

  .add-container {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .add-btn {
    color: white;
    vertical-align: middle;
  }
</style>