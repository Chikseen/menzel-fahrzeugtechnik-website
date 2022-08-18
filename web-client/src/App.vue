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
  //font-family: Helvetica, Arial, sans-serif;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.underlined {
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: $company_blue;
    box-shadow: 0 0 10px 1px #4d4d4d57;
  }
}

.pageTitel {
  position: relative;
  display: flex;
  justify-content: center;

  &_noSpace {
    h1 {
      padding: 0 !important;

      &:nth-child(1) {
        &::after {
          margin: 0 !important;
          width: calc(100% + 10px) !important;
        }
      }
      &:nth-child(2) {
        &::after {
          margin: 0 !important;
          width: calc(100% + 10px) !important;
        }
      }
    }
    &:hover {
      h1 {
        &:nth-child(1) {
          color: $akzent_blue !important;
        }
        &:nth-child(2) {
          color: $akzent_blue !important;
        }
      }
    }
  }

  &:hover {
    h1 {
      &:nth-child(1) {
        color: $akzent_blue;
      }
    }
  }

  h1 {
    position: relative;
    font-size: 3rem;
    color: $company_blue;
    padding: 0 10px;
    background-color: #fff;
    letter-spacing: 2px;
    z-index: 2;
    transition: all 0.5s;

    &:nth-child(1) {
      &::after {
        content: "";
        position: absolute;
        top: calc(50% + 2rem);
        right: 0;
        margin: 0 10px;
        height: 2px;
        width: 100%;
        box-shadow: 0 0 10px 1px #4d4d4d93;
        background-color: $company_blue;
      }
    }

    &:nth-child(2) {
      &::after {
        content: "";
        position: absolute;
        top: calc(50% - 2rem);
        left: 0;
        margin: 0 10px;
        height: 2px;
        width: 100%;
        box-shadow: 0 0 10px 1px #4d4d4d93;
        background-color: $company_blue;
      }
    }
  }
  /*     &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      margin: 0 10%;
      height: 2px;
      width: 80%;
      background-color: $company_blue;
    }  */
}

::-webkit-scrollbar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
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

@media only screen and (max-width: 870px) {
  .pageTitel {
    display: none;
  }
}
</style>
