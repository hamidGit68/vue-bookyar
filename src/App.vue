<template>
  <div id="app">
    <preloader></preloader>
    <!-- the "header1" component is used for header part of the web and is repeated in every page  -->

    <header1></header1>
    <theNanigation></theNanigation>
    <router-view />
  </div>
</template>

<script>
import header1 from "./components/header1.vue";
import theNanigation from "./components/theNanigation";
import Preloader from "./components/preloader";
export default {

  components: {
    Preloader,
    header1,
    theNanigation
  }

};
</script>

<style src="../public/styles/style.css"></style>
