<template>
  <div class="tuevIcon_wrapper">
    <p class="tuevIcon_currentYearText">{{ currentYear }}</p>
    <svg
      class="tuevIcon tuevIcon_outter"
      :style="'transform: rotateZ(' + currentMonth * 30 + 'deg)'"
      viewBox="-1 -1 22 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00000000"
    >
      <path stroke="#d3d7df" stroke-width="0.5px" d="M10 0A1 1 0 0010 20 1 1 0 0010 0M10 5A1 1 0 0110 15 1 1 0 0110 5" />
      <path
        stroke="#d3d7df"
        stroke-width="0.25px"
        d="M10 0A1 1 0 0010 0M10 5A1 1 0 0110 5M7.655 5.703 6.9 4.552Q8.157 3.663 9.769 3.669V5M10.197 4.994V3.709Q11.99 3.736 13.087 4.713L12.472 5.676M15.014 1.475 14.311 2.592Q12.579 1.415 10.251 1.234V-.003M9.789-.01V1.228Q7.548 1.301 5.756 2.438L5.006 1.328"
      />
    </svg>
    <svg
      v-for="i in 12"
      :key="i"
      class="tuevIcon"
      :style="'transform: rotateZ(' + i * 30 + 'deg)'"
      viewBox="-1 -1 22 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00000000"
    >
      <path stroke="#d3d7df" stroke-width="0.25px" d="M10 0 10 1M10 4 10 5" />
    </svg>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  computed: {
    currentYear() {
      const date = new Date();
      const string = String(date.getFullYear());
      return string[2] + string[3];
    },
    currentMonth() {
      const date = new Date();
      return String(date.getMonth() + 1);
    },
  },
};
</script>

<style lang="scss">
.tuevIcon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s all;

  &_wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  &_currentYearText {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    font-weight: 900;
    font-size: 3.5rem;
  }

  &_outter {
    z-index: 5;
    &:hover {
      transform: rotateZ(360deg) !important;
    }
  }
}
</style>
