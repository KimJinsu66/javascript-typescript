<template>
  <section>
    <!-- 목록에 애니메이션을 적용하려면 transition-group안에 대상 태그에 :key 속성을 꼭 지정해야한다  -->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow"> <!-- :key => v-bind:key를 간략하게 표현 -->
        <i class="check-btn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="remove-btn" type="button" @click="removeTodo(todoItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
  export default {
    props: ['propsdata'],
    methods: {
      removeTodo(todoItem, index) {
        this.$emit('removeTodo', todoItem, index);
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .check-btn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .remove-btn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>