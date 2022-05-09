<template>
  <div class="tuevIcon_wrapper">
    <p class="tuevIcon_currentYearText" :style="`font-size: ${fontSize}rem;`">{{ currentYear }}</p>
    <svg
      class="tuevIcon tuevIcon_outter"
      :style="`transform: rotateZ(${currentMonth * 30}deg)`"
      viewBox="-1 -1 22 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00000000"
    >
      <path
        class="tuevIcon_outter_filler"
        stroke="#d1d1d1"
        :fill="tuevColor"
        stroke-width="0.4px"
        d="M10 0A1 1 0 0010 20 1 1 0 0010 0M10 5A1 1 0 0110 15 1 1 0 0110 5"
      />
      <path
        stroke="#d1d1d1"
        stroke-width="0.2px"
        d="M10 0A1 1 0 0010 0M10 5A1 1 0 0110 5M7.563 5.726 6.859 4.564Q8.1 3.683 9.729 3.683V4.995M10.284 4.986V3.709Q12.01 3.78 13.11 4.669L12.472 5.676M14.933 1.464 14.264 2.521Q12.529 1.323 10.275 1.218V.011M9.729.011V1.226Q7.405 1.297 5.697 2.45L5.001 1.394"
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
      <path stroke="#d1d1d1" stroke-width="0.25px" d="M10 0 10 1M10 4 10 5" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    fontSize: {type: String, default: "3.5"}
  },
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
    tuevColor() {
      const opacity = ""; // yyyyyyxx hex value
      const colors = ["#1bb1f1", "#f4f017", "#d65c4b", "#f79cb8", "#1baf82", "#e59101"];
      return colors.map((item) => item + opacity)[Math.floor(Math.random() * colors.length)];
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
  }

  &_outter {
    &_filler {
      transition: all 1.2s;
      fill-opacity: 0;
    }
  }
}

.tuevIcon_wrapper:hover .tuevIcon_outter_filler {
  fill-opacity: 1;
}
.tuevIcon_wrapper:hover .tuevIcon_outter {
  transform: rotate(420deg) !important;
}
</style>
