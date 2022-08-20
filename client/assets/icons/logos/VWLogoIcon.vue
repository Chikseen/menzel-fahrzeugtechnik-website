<template>
  <svg class="logoCluster_logoClusterBrand_vw" viewBox="-1 -1 12 12" xmlns="http://www.w3.org/2000/svg" fill="#0ff00000">
    <path d="M5 0A1 1 0 005 10 1 1 0 005 0M5 1A1 1 0 015 9 1 1 0 015 1" />
    <path
      class="logoCluster_logoClusterBrand_vw_inner"
      d="M5 0M2.477 1.828 4.487 4.92 5.587 4.917 7.521 1.773 6.819 1.203 5.021 4.229 3.223 1.203M1.436 3.659 3.388 6.981 4.487 5.082 5.587 5.085 6.501 7.003 8.442 3.538 8.881 4.547 6.523 8.527 5.021 5.786 3.355 8.549 1.03 4.58"
    />
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
.logoCluster_logoClusterBrand_vw {
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
    stroke: #0d4671;
    stroke-width: 0.55px;
    stroke-dashoffset: 0;
  }
}

.logoCluster_logoClusterBrand_vw:hover .logoCluster_logoClusterBrand_vw_inner {
  fill: #0d4671;
}

.logoCluster_logoClusterBrand_vw_inner:hover .logoCluster_logoClusterBrand_vw {
  stroke: #0d4671;
  stroke-width: 0.55px;
  stroke-dashoffset: 0;
}
</style>
