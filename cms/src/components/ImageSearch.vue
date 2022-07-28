<template>
  <div>
    <div>
      <input type="text" />
    </div>
    <div>
      <!-- <div v-for="(img, index) in message.imageIds" :key="index + 'sec'">
        <img class="tmp" :src="url + img.imageId" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    url() {
      if (process.env.NODE_ENV == "development") return "http://192.168.2.100:7081?id=";
      else return "https://image.menzel-fahrzeugtechnik.de?id=";
    },
    
  },
};
</script>
