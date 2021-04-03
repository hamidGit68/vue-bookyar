<template>
  <div id="serv2" class="dropdown">
    <span class="padd dropdown-toggle" id="services2" data-toggle="dropdown">
      <slot></slot>
      <i class="fas fa-chevron-down"></i>
    </span>
    <span class="dropdown-menu" aria-labelledby="services2" id="drop-serv2">
      <router-link
        v-for="item in mohtava"
        :key="item.title"
        :to="item.linkItem"
      >
        {{ item.title }}
        <i v-bind:class="item.icon"></i>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "dropCompo",
  props: ["mohtava"]
};
</script>

<style src="../components/compoStyles/navig.css"></style>
