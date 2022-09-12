<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "../src/pinia/index";
import { storeToRefs } from "pinia";
import { reactive } from "vue";

const store = useStore();
const { name, isAdmin, doubleCount, doubleCountPlusOne, getList } =
  storeToRefs(store);

const arr = reactive(["zj", "sd"]);
const bigarr = store.getList()
console.log(arr);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>{{ name }}+++</h1>
  <h1>{{ isAdmin }}+++</h1>
  <h2>{{ doubleCount }}===={{ doubleCountPlusOne }}</h2>
  <h1 v-for="item in arr" :key="item">{{ item }}22</h1>
  <h1 v-for="item in bigarr" :key="item">{{ item }}33</h1>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
