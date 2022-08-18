<template>
  <div class="SFC" @click="$emit('remove')">
    <p>{{ res.title }}</p>
    <p>{{ res.status === 200 ? "Done" : res.status }}</p>
  </div>
</template>

<script>
export default {
  props: {
    res: { type: Object },
  },
};
</script>

<style>
.SFC {
  position: fixed;
  top: 15px;
  left: 15px;
  width: 150px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px #37373737;
  padding: 15px;
  text-align: left;
}
</style>
