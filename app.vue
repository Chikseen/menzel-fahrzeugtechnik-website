<template>
  <HeaderComponent />
  <main>
    <NuxtPage />
  </main>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  scroll-behavior: smooth;
}

.imageContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;

  img {
    max-width: 400px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: $image-shadow;
  }
}

::-webkit-scrollbar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 5px;
  transition: all .5s;
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
