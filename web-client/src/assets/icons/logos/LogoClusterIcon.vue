<template>
  <div class="logoCluster_wrapper">
    <Audi class="logoCluster_audi" />
    <BMW class="logoCluster_bmw" />
    <VW class="logoCluster_vw" />
    <Benz class="logoCluster_benz" />
  </div>
</template>

<script>
import Audi from "@/assets/icons/logos/AudiLogoIcon.vue";
import BMW from "@/assets/icons/logos/BMWLogoIcon.vue";
import VW from "@/assets/icons/logos/VWLogoIcon.vue";
import Benz from "@/assets/icons/logos/BenzLogoIcon.vue";

export default {
  components: {
    Audi,
    BMW,
    VW,
    Benz,
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.logoCluster {
  position: relative;
  width: 100%;
  height: 100%;

  &_audi {
    position: absolute;
    top: 15%;
    left: 20%;
    width: 30%;
    transition: 1s all;
  }

  &_bmw {
    position: absolute;
    top: 40%;
    left: 25%;
    width: 20%;
    transition: 1s all;

    &:hover {
      transform: rotateZ(90deg);
    }
  }

  &_vw {
    position: absolute;
    top: 7%;
    left: 50%;
    width: 20%;
    transition: 1s all;
  }

  &_benz {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 20%;
    transition: 1s all;
  }

  &_wrapper {
    width: 100%;
    height: 100%;
  }
}

.logoCluster_wrapper:hover .logoCluster_audi {
  top: 5%;
  left: 10%;
  width: 40%;
}

.logoCluster_wrapper:hover .logoCluster_bmw {
  top: 40%;
  left: 25%;
  width: 30%;
}
.logoCluster_wrapper:hover .logoCluster_vw {
  top: 2%;
  left: 50%;
  width: 30%;
}
.logoCluster_wrapper:hover .logoCluster_benz {
  top: 40%;
  left: 75%;
  width: 30%;
}
</style>
