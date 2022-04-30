<template>
  <svg class="logoCluster_logoClusterBrand_bmw" viewBox="-1 -1 12 12" xmlns="http://www.w3.org/2000/svg" fill="#0ff00000">
    <path d="M5 0A1 1 0 005 10 1 1 0 005 0M5 2A1 1 0 005 8 1 1 0 005 2" />
    <path class="logoCluster_logoClusterBrand_bmw_inner" d="M5 2Q2.201 2.258 2 5L5 5 5 2M5 8Q7.74 7.778 8 5L5 5 5 8" />
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
.logoCluster_logoClusterBrand_bmw {
  stroke: #d1d1d1;
  stroke-width: 0.5px;
  stroke-dasharray: 32px;
  stroke-dashoffset: 64;
  transition: 0.5s all linear;

  &_inner {
    fill: #d1d1d1;
    stroke: none;
    transition: 0.5s all linear;
  }

  &:hover {
    stroke: #009ada;
    stroke-width: 0.55px;
    stroke-dashoffset: 0;
  }
}

.logoCluster_logoClusterBrand_bmw:hover .logoCluster_logoClusterBrand_bmw_inner {
  fill: #009ada;
} 
</style>
