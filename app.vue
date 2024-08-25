<template>
  <HeaderComponent />
  <main>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<style lang="scss">
/*
* {
  outline: 1px #df0808 solid;
  background-color: #5abd321a;
}
*/

html,
body {
  padding: 0;
  margin: 0;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  max-width: 100dvw;
  max-height: 100dvh;
  overflow: hidden;
  transition: 0.5s all ease-in-out;
  font-family: Manrope, sans-serif;
  scrollbar-gutter: stable;
  @include theme_based_background;
}

.imageContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;

  img {
    max-width: 400px;
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
    @include theme_based_morphism_shadow;
  }
}

::-webkit-scrollbar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 5px;
  transition: all .5s;
  opacity: 0;
}

::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: $company_blue;
  transition: all .5s;
  border-radius: 0 0 10px 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f100;
}
</style>
