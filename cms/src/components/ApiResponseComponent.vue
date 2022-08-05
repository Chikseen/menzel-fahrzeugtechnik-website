<template>
  <div>{{ response.statusText }}</div>
</template>

<script>
export default {
  props: {
    response: { type: Object },
  },
};
</script>

<style></style>
