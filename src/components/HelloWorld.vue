<script setup>
import { ref } from "vue";
import { useStore } from "../pinia/index";
import { storeToRefs } from "pinia";

const store = useStore();
const { name, isAdmin } = storeToRefs(store);

defineProps({
  msg: String,
});

const count = ref(0);


const handleClickPatch = () => {
    store.$patch({
      name:store.name + 2 
    })
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

    <button type="button" @click=" () => { name = '改变后'} ">
      {{ name }}
    </button>
    <button @click="handleClickPatch">点击增加 - patch</button>
    <button @click="()=>{store.changeState('这是active')}">点击改变active</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
