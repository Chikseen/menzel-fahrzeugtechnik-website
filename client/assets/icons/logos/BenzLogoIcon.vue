<template>
  <svg class="logoCluster_logoClusterBrand_benz" viewBox="-1 -1 12 12" xmlns="http://www.w3.org/2000/svg" fill="#0ff00000">
    <path d="M5 0A1 1 0 015 10 1 1 0 015 0" />
    <path class="logoCluster_logoClusterBrand_benz_inner" d="M5 0M5 0 5 5 1 8M5 5 9 8" />
  </svg>
</template>

<script>
export default {
  components: {},
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.logoCluster_logoClusterBrand_benz {
  stroke: #d1d1d1;
  stroke-width: 0.5px;
  stroke-dasharray: 32px;
  stroke-dashoffset: 64;
  transition: 0.5s all linear;

  &_inner {
    fill: #d1d1d100;
    stroke: 1px #d1d1d1;
    transition: 0.5s all linear;
  }

  &:hover {
    stroke: #a4aaae;
    stroke-width: 0.55px;
    stroke-dashoffset: 0;
  }
}

.logoCluster_logoClusterBrand_benz:hover .logoCluster_logoClusterBrand_benz_inner {
  stroke: #a4aaae;
}

.logoCluster_logoClusterBrand_benz_inner:hover .logoCluster_logoClusterBrand_benz {
  stroke: #a4aaae;
  stroke-width: 0.55px;
  stroke-dashoffset: 0;
}
</style>
