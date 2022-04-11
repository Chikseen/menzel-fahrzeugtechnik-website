<template>
  <div class="tuevIcon_wrapper">
    <p class="tuevIcon_currentYearText">{{ currentYear }}, {{ currentMonth }}</p>
    <svg style="transform: rotateZ((currentMonth * 32deg)" class="tuevIcon" viewBox="-1 -1 22 22" xmlns="http://www.w3.org/2000/svg" fill="#00000000">
      <path stroke="#d3d7df" stroke-width="0.5px" d="M10 0A1 1 0 0010 20 1 1 0 0010 0M10 5A1 1 0 0110 15 1 1 0 0110 5" />

      <path
        stroke="#d3d7df"
        stroke-width="0.5px"
        d="M10 0A1 1 0 0010 0M10 5A1 1 0 0110 5M8.001 5.418 7.227 4.384C8.16 3.627 8.558 3.573 9.805 3.573L9.832 5.003M10.176 4.992 10.141 3.596C11.502 3.619 11.9 3.696 12.626 4.636L12.009 5.426M14.831 1.259 13.965 2.526C13.001 1.608 11.854 1.271 10.172 1.21L10.187.015M9.821.004 9.85 1.203C8.076 1.164 7.006 1.585 5.95 2.518L5.11 1.282"
      />
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
      return String(date.getYear() + 1);
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
  width: 100%;
  height: 100%;

  &_wrapper {
    width: 100%;
    height: 100%;
    position: relative;
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
}
</style>
