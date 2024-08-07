<template>
  <nav class="container m-auto">
    <ul class="flex items-center flex-col">
      <div class="flex items-center justify-between w-full my-3">
        <img src="@/assets/logo.svg" alt="logo" />
        <input
          type="text"
          :model.lazy.trim="userSearch"
          placeholder="search..."
          class="text-slate-500"
        />
      </div>
      <div class="flex items-center justify-between w-full">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link to="{'/products/category/electronics'}"
          >electronics</router-link
        >
        <router-link to="{'/products/category/jewelery'}">jewelery</router-link>
        <router-link to="{'/products/category/men'}"
          >men's clothing</router-link
        >
        <router-link to="{'/products/category/women'}"
          >women's clothing</router-link
        >
        <router-link :to="{ name: 'cart' }">Your Cart</router-link>
      </div>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
let userSearch = ref(``);
</script>

<style scoped>
nav > * {
  text-transform: capitalize;
}
input {
  border: 1px solid rgb(100 116 139);
  border-radius: 16px;
  padding: 8px 16px;

  outline: none;
}
</style>
