<template>
  <HeaderComponent />
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  max-width: 100%;
  max-height: 100%;
  //overflow: hidden;
  transition: 0.5s all ease-in-out;
  font-family: Manrope, sans-serif;
  touch-action: manipulation;
  scrollbar-color: #80808080 #ffffff00;
  @include theme_based_background;
}

.leaflet-bottom {
  display: none;
}

.imageContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;

  img {
    max-width: 400px;
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: $border-radius;
    @include theme_based_morphism_shadow;
  }
}

.serviceContent {
  max-width: $max_content_width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: $gap;

  &_banner {
    padding: 15px;
    border-radius: $border-radius;
    @include theme_based_morphism_shadow;
  }

  h3,
  p {
    margin: 0;
    text-align: left !important;
    line-height: 1.25rem;
  }
}

button {
  &:active {
    animation: clickAnimation 0.25s;
  }
}

.cta-button {
  width: 250px;
  max-width: calc(100% - 30px);
  margin: 15px auto;
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: $border-radius;
  background-color: $company_blue;
  color: $light-font-color;
  @include theme_based_morphism_shadow;
}

.checked {
  margin: $gap 0;

  &_list {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 100%;

    p {
      position: relative;
      padding-left: 2rem;
      margin: 0;
    }

    ::before {
      content: url('/icons/checkmarkIcon.svg');
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 20px;
      margin: auto;
    }
  }
}
</style>
