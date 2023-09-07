<template>
  <svg class="acIcon" viewBox="0 0 25 15" xmlns="http://www.w3.org/2000/svg" fill="#00000000">
    <path class="acIcon_outer" d="M2 1Q1 1 1 2V13Q1 14 2 14H23Q24 14 24 13V2Q24 1 23 1H2M5 2V13H2V2H5M4 12H3V11H4M4 10H3V8H4M4 6H3V3H4M7 2H22V13H7" />
    <path class="acIcon_ripes" d="M8 3H21M8 4H21M8 5H21M8 6H21M8 7H21M8 8H21M8 9H21M8 10H21M8 11H21M8 12H21" />
    <path
      class="acIcon_flow"
      d="M10 8C11 7 12 7 11 8 9 10 13 12 11 14 10 15 9 15 10 14 12 12 8 10 10 8"
      v-for="(index, i) in 4"
      :key="index"
      :style="`transform: translateX(${i * 3}px)`"
    />
  </svg>
</template>

<style lang="scss">
.acIcon {
  height: 75%;
  transition: 0.5 all;

  &_outer {
    fill: $icon_base_grey;
    transition: 1s all;
  }

  &_ripes {
    stroke-width: 0.6px;
    stroke: $icon_base_grey;
    transition: 1s all;
  }

  &_flow {
    fill: $icon_base_grey;
    stroke-width: 0.2px;
    stroke: #ffffff;
    opacity: 0;
    transition: 1s all;
    animation: animateAirFlow 1.5s infinite ease-in-out alternate;
  }
}

.acIcon:hover .acIcon_outer {
  fill: $icon_active_grey;
}

.acIcon:hover .acIcon_ripes {
  stroke-width: 0.2px;
  stroke: $icon_active_grey;
}

.acIcon:hover .acIcon_flow {
  opacity: 1;
}
@keyframes animateAirFlow {
  0% {
    d: path("M10 8C11 7 12 7 11 8 9 10 13 12 11 14 10 15 9 15 10 14 12 12 8 10 10 8");
  }
  100% {
    d: path("M9 8C8 7 9 7 10 8 12 10 8 12 10 14 11 15 10 15 9 14 7 12 11 10 9 8");
  }
}
</style>
