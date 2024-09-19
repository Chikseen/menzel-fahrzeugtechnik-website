<template>
  <div id="repairClusterID" class="repairCluster_wrapper" @mouseover="setOverlayPos">
    <CarGoodCondtionIcon :style="`width:${posInPercent}%`" id="repairClusterGoodID" class="repairCluster_good" />
    <CarBadCondtionIcon class="repairCluster_bad" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      hover: false,
      hoverDelay: false,
      posInPercent: 50,
      posParentWidth: 0,
      posParentLeft: 0,
    };
  },
  methods: {
    setOverlayPos(evt) {
      const parent = document.getElementById("repairClusterID");
      const posInPercent = ((evt.x - parent.getBoundingClientRect().left) / parent.clientWidth) * 100;
      this.posInPercent = posInPercent;
    },
  },
};
</script>

<style lang="scss">
.repairServiceStroke {
  stroke: $icon_base_grey;
  transition: all 0.5s;
}

.repairCluster {
  &_wrapper {
    position: relative;
    display: flex;
    height: 100%;
    overflow: hidden !important;
    margin: 0 auto;
    aspect-ratio: 16 / 11;

    &:hover {
      .repairServiceStroke {
        stroke: $icon_active_grey !important;
      }
    }
  }

  &_good {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    transition: all 0.1s !important;
    z-index: 5;
    @include theme_based_background;
  }

  &_bad {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    height: 100%;
  }

  &_repairdevice {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}

@media only screen and (max-width: 550px) {
  .repairCluster {
    &_good {
      width: 65%;
    }
  }
}
</style>
