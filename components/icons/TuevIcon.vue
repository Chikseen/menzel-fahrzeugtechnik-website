<template>
  <div class="tuevIcon_wrapper" @mouseover="isActive ? true : active = true"
    @mouseleave="isActive ? true : active = false">
    <p class="tuevIcon_currentYearText" :style="`font-size: ${fontSize}rem;`">{{ year ??
      currentYear }}</p>
    <svg :class="['tuevIcon', 'tuevIcon_outter', { 'tuevIcon_outter_active': !active }]"
      :style="`transform: rotateZ(${(month ?? currentMonth) * 30}deg)`" viewBox="-1 -1 22 22"
      xmlns="http://www.w3.org/2000/svg" fill="#00000000">
      <path :class="['tuevIcon_outter_filler', { 'tuevIcon_outter_filler_active': active }]" stroke="#d1d1d1"
        :fill="tuevColor" stroke-width="0.4px" d="M10 0A1 1 0 0010 20 1 1 0 0010 0M10 5A1 1 0 0110 15 1 1 0 0110 5" />
      <path :class="['tuevIcon_innermarker', { 'tuevIcon_innermarker_active': active }]" stroke="#d1d1d1"
        stroke-width="0.2px"
        d="M 10 0 A 1 1 0 0 0 10 0 M 10 5 A 1 1 0 0 1 10 5 M 7.563 5.726 L 6.859 4.564 Q 8.1 3.683 9.729 3.683 V 4.995 M 10.284 4.986 V 3.709 Q 12.01 3.78 13.11 4.669 L 12.472 5.676 M 14.933 1.464 L 14.264 2.521 Q 12.529 1.323 10.275 1.218 V 0.011 C 11.992 0.206 13.597 0.709 14.933 1.464 M 9.729 0.011 V 1.226 Q 7.405 1.297 5.697 2.45 L 5.001 1.394 C 6.404 0.605 8.053 0.215 9.727 0.015" />
    </svg>
    <svg v-for="i in 12" :key="i" class="tuevIcon" :style="'transform: rotateZ(' + i * 30 + 'deg)'"
      viewBox="-1 -1 22 22" xmlns="http://www.w3.org/2000/svg" fill="#00000000">
      <path class="tuevIcon_innerDash" :style="active ? 'stroke: #474747;' : ''" stroke="#d1d1d1" stroke-width="0.25px"
        d="M10 0 10 1M10 4 10 5" />
    </svg>
  </div>
</template>

<script>
import { GetCurrentYear, GetCurrentMonth, GetTuevColor } from '@/helper/tuevHelper';

export default {
  props: {
    fontSize: { type: String, default: "2.5" },
    year: { type: Number, default: null },
    month: { type: Number, default: null },
    isActive: { type: Boolean, default: false },
  },
  data() {
    return {
      active: false
    }
  },
  watch: {
    isActive() {
      this.active = this.isActive
    }
  },
  computed: {
    currentYear() {
      return GetCurrentYear()
    },
    currentMonth() {
      return GetCurrentMonth();
    },
    tuevColor() {
      return GetTuevColor(this.year ?? this.currentYear)
    },
  },
  mounted() {
    this.active = this.isActive
  }
};
</script>

<style lang="scss">
.tuevIcon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.25s all ease-out;

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
    text-align: center;
    font-weight: 900;
    font-size: 1.2rem;

  }

  &_outter {
    &_filler {
      transition: all 1.2s;
      fill-opacity: 0;
    }
  }

  &_innerDash {
    transition: 1s all;
  }

  &_innermarker {
    transition: 1s all;
  }
}

.tuevIcon_outter_filler_active {
  fill-opacity: 1;
  stroke: $icon_active_grey;
}

.tuevIcon_innermarker_active {
  fill: $icon_active_grey;
  stroke: $icon_active_grey;
}

.tuevIcon_outter_active {
  transform: rotate(420deg) !important;
}

@media only screen and (max-width: 870px) {
  .tuevIcon {
    &_currentYearText {
      font-size: 1.5rem !important;
    }
  }
}
</style>
