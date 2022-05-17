<template>
  <div id="repairClusterID" class="repairCluster_wrapper" @mouseover="setoverlay" @mouseleave="resetPos">
    <CarGoodCondtionIcon id="repairClusterGoodID" class="repairCluster_good" />
    <!--   <RepairDevice class="repairCluster_repairdevice" /> -->
    <CarBadCondtionIcon class="repairCluster_bad" />
  </div>
</template>

<script>
import RepairDevice from "@/assets/icons/repairService/RepairDevice.vue";
import CarGoodCondtionIcon from "@/assets/icons/repairService/CarGoodCondtionIcon.vue";
import CarBadCondtionIcon from "@/assets/icons/repairService/CarBadCondtionIcon.vue";

export default {
  components: {
    RepairDevice,
    CarBadCondtionIcon,
    CarGoodCondtionIcon,
  },
  data() {
    return {
      hover: false,
      hoverDelay: false,
    };
  },
  methods: {
    setoverlay(evt) {
      const parent = document.getElementById("repairClusterID");
      const child = document.getElementById("repairClusterGoodID");
      const posInPercent = ((evt.x - parent.getBoundingClientRect().left) / parent.clientWidth) * 100;
      child.setAttribute("style", `width:${posInPercent}%`);
    },
    resetPos() {
      const child = document.getElementById("repairClusterGoodID");
      child.setAttribute("style", "width:50%");
    },
  },
};
</script>

<style lang="scss">
/* .repairCluster_wrapper:hover .repairCluster_bad {
  width: 100%;
}
.repairCluster_wrapper:hover .repairCluster_good {
  width: 100%;
} */

.repairCluster {
  &_wrapper {
    height: 100%;
    width: 100%;
    max-width: 450px;
    overflow: hidden !important;
    position: relative;
    display: flex;
  }

  &_good {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    transition: all 0.1s;
    background-color: rgb(255, 255, 255);
    z-index: 5;
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
