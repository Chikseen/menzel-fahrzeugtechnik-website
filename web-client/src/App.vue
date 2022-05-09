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
body,
html {
  margin: 0;
  padding: 0;
  overflow-y: overlay;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  transition: all 0.5s;
}

::-webkit-scrollbar-track {
  background: #f1f1f100;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: lighten($company_blue, 75);
  transition: all 0.5s;
}

::-webkit-scrollbar-thumb:hover {
  background-color: $company_blue;
}
</style>
