<script setup>
  import LayoutHeader from "./components/layout/Header.vue"
  import LayoutFooter from "./components/layout/Footer.vue"
  import LayoutRegistration from "./components/layout/Registration.vue"
  import LayoutTop from "./components/layout/Top.vue"
</script>

<template>
  <LayoutHeader/>
  <main class="main">
    <LayoutTop />
    <RouterView />
  </main>
  <LayoutFooter/>
  <LayoutRegistration/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
  @import "./styles/reset.css";
  @import "./styles/style.css";
</style>
