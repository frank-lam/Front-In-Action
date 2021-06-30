<template>
  <div class="about">
    <h1 @click="handleClick">This is an about page</h1>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
// https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register
import { toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Home',
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state);
    const handleClick = () => {
      store.dispatch('getData')
    }
    return { name, handleClick }
  }
}
</script>·