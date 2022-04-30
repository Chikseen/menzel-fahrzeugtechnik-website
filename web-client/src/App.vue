<template>
  <div>
    <HeaderComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
