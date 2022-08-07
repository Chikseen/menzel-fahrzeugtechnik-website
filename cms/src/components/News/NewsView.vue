<template>
  <div>
    <div class="newNewsWrapper">
      <CreateNews @newData="loadMessages" :setdata="setdata" />
    </div>
    <h3>Alle News</h3>
    <hr />
    <div v-for="item in messages" :key="item.id" @click="setData(item)">
      <div>
        <div class="newsText">
          <div class="newsTextHeader">
            <h4>
              {{ item.titel }}
            </h4>
            <p>{{ toDate(item.created) }}</p>
          </div>
          <p>{{ item.text }}</p>
        </div>
        <div class="newsImageWrapper">
          <div v-for="img in item.images" :key="img + 2" class="newsImage">
            <img :src="imageUrl + img" alt="" />
          </div>
        </div>
        <button class="removeButton" @mouseup="deleteNews(item.id)">Entfernen</button>
      </div>
      <hr />
    </div>
    <button @click="loadMoreMessages">Mehr Laden</button>
  </div>
</template>

<script>
import api from "@/apiService";
import date from "@/date.js";
import CreateNews from "@/components/News/CreateNews.vue";

export default {
  components: {
    CreateNews,
  },
  data() {
    return {
      messages: [],
      currentdate: "",
      currenttitel: "",
      currenttext: "",
      offset: 0,
      limit: 5,

      currentimages: [],
      setdata: {},
    };
  },
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_API}/Images?name=`;
    },
    imageApi() {
      return `${process.env.VUE_APP_API}/Images`;
    },
  },
  methods: {
    setData(msg) {
      this.setdata = msg;
    },
    toDate(dateT) {
      return date.dateObjectToDDMMYYYY(dateT);
    },
    async loadMessages() {
      this.messages = await api.get(`News?limit=${this.limit}&offset=${this.offset}`);
    },
    async loadMoreMessages() {
      this.offset += this.limit;
      const newNews = await api.get(`News?limit=${this.limit}&offset=${this.offset}`);
      newNews.forEach((item) => {
        this.messages.push(item);
      });
    },
    async deleteNews(id) {
      this.messages = await api.delete("News", { id: id });
      this.loadMessages();
    },
  },
  mounted() {
    this.loadMessages();
  },
};
</script>

<style>
.newsPreviewWrapper {
  background-color: #f3f3f34d;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 0 #4d4d4d36;
  padding: 10px;
  margin: 15px;
  transition: all 0.5s;
}

.newsPreviewWrapper:hover {
  background-color: rgba(223, 223, 223, 0.719);
}

.newsImagePreview {
  max-width: 200px;
}

.newsImageSelection {
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  margin: 15px auto;
}

.newsText {
  text-align: left;
  max-width: 750px;
  margin: 0 auto;
}

.newsTextHeader {
  display: flex;
  justify-content: space-between;
}

.newsImageWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 25px;
  padding: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

.newsImage {
  box-shadow: 2px 2px 10px 0 #4d4d4d36;
  border-radius: 5px;
  overflow: auto;
}

.newsImage img {
  max-width: 150px;
  max-height: 150px;
}
</style>
