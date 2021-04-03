<template>
  <div id="app">
    <!-- the "header1" component is used for header part of the web and is repeated in every page  -->
    <header1></header1>
    <theNanigation></theNanigation>
    <router-view />
  </div>
</template>

<script>
import header1 from "./components/header1.vue";
import theNanigation from "./components/theNanigation";
export default {
  components: {
    header1,
    theNanigation
  }
};
</script>

<style src="../public/styles/style.css"></style>
