<template>
  <svg class="wheelIcon" viewBox="-1 -1 12 12" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="#00000000" li>
    <path stroke="#d3d7df" stroke-width="0.5" d="M3 2 5 2 5 0A1 1 0 015 10L5 8 3 8M5 8 5 7 4 7 4 3 5 3 5 2A1 1 0 015 8" />
    <path class="wheelIcon_openPath" stroke="#d3d7df" stroke-width="0.5" d="M4 10 4 9 2 9 2 1 4 1 4 0" />
    <path
      stroke="#d3d7df"
      class="wheelIcon_master"
      stroke-width="0.5"
      d="M0 0 0 16 10 16 10 0M1 5 2 1 3 5 4 1 5 5M8 1 6 1 6 3 8 3M6 3 6 5 8 5M1 6 1 10M5 6 3 6 3 8 5 8M3 8 3 10 5 10M8 6 6 6 6 8 8 8 8 10 6 10M3 11 1 11M2 11 2 15M6 11 4 11 4 13 6 13M4 13 4 15 6 15M9 15 7 13 9 13 9 11 7 11 7 15"
    />
  </svg>
</template>

<style lang="scss">
.wheelIcon {
  transition: 1s all ease-in-out 1s;
  overflow: visible;
}
.wheelIcon_openPath {
  transition: 1s all ease-in-out 0.15s;
}
.wheelIcon_master {
  transform: translateX(3px) rotate(90deg) rotateX(90deg);
  transition: 1s all ease-in-out;
}

.wheelIcon:hover {
  transform: rotate(270deg);
  transition: 1s all ease-in-out;
  stroke: #c0c0c0;

  .wheelIcon_openPath {
    transform: translateX(-17px);
    transition: 1s all ease-in-out 1s;
    stroke: #c0c0c0;
  }

  .wheelIcon_master {
    transform: translateX(3px) rotate(90deg) rotateX(0);
    transition: 1s all ease-in-out 1.15s;
    stroke: #c0c0c0;
  }
}
</style>
