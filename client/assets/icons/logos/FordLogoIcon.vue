<template>
  <div class="">
    <svg
      class=""
      :style="'transform: rotateZ(' + currentMonth * 30 + 'deg)'"
      viewBox="-1 -1 22 22"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00000000"
    >
      <path stroke="#d3d7df" stroke-width="0.5px" d="M10 0A1 1 0 0010 20 1 1 0 0010 0M10 5A1 1 0 0110 15 1 1 0 0110 5" />
    </svg>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss">

</style>
