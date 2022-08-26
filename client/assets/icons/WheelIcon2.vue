<template>
  <svg class="whellIcon2" viewBox="-1 -1 22 22" xmlns="http://www.w3.org/2000/svg" fill="#00000000" li>
    <path class="whellIcon2_outerPath" d="M10 0A1 1 0 0010 20 1 1 0 0010 0M10 1A1 1 0 0110 19 1 1 0 0110 1" />
    <path class="whellIcon2_spine" d="M10 1 10 19M1 10 19 10M16 3 4 17M4 3 16 17" />
    <path class="whellIcon2_innerPath" d="M10 8A1 1 0 0010 12 1 1 0 0010 8" />
  </svg>
</template>

<style lang="scss">
.whellIcon2 {
  max-width: 100%;
  max-height: 65%;
  transition: 1s all;

  &:hover {
    transition: 1s all;
    transform: rotateZ(640deg);
  }

  &_outerPath {
    stroke: $icon_base_grey;
    stroke-width: 0.5px;
    transition: 1s all;
  }

  &_innerPath {
    fill: $icon_base_grey;
    transition: 1s all;
  }

  &_spine {
    stroke: $icon_base_grey;
    transition: 1s all;
  }
}

.whellIcon2:hover .whellIcon2_outerPath {
  fill: $icon_active_grey;
}

.whellIcon2:hover .whellIcon2_spine {
  stroke: $icon_active_grey;
}
</style>
