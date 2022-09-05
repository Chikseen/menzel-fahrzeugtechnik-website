<template>
  <div v-if="allActviveMessages.length" class="active">
    <div class="active_wrapper" v-for="message in allActviveMessages" :key="message.id">
      <div class="active_textwrapper" :class="[
        message.color == 'red' ? 'active_textwrapper_red' : '',
        message.color == 'green' ? 'active_textwrapper_green' : '',
        message.color == 'white' ? 'active_textwrapper_white' : '',
      ]">
        <div>
          <h3>{{ message.titel }}</h3>
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../apiService";

export default {
  name: "activeMessage",
  components: {},
  data() {
    return {
      allActviveMessages: [],
    };
  },
  methods: {
    async getData() {
      const data = await api.get("Notification");
      this.$store.commit("setMessage", data);
      this.allActviveMessages = data;
    },
    dateFormatter(data) {
      const date = new Date(data);

      return `${String(date.getDate()).padStart(2, "0")}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
.active {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;

  &_wrapper {
    position: relative;
    max-width: 100%;
  }

  &_textwrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 25px;
    border-radius: 10px;
    max-width: 750px;
    min-height: calc(100% - 20px);
    margin: 0 auto;

    &_red {
      border: 3px $error-red solid;
      background-color: lighten($error-red, 35);
      box-shadow: 2px 2px 5px 2px #66141450;
    }

    &_green {
      border: 3px $succes-green solid;
      background-color: lighten($succes-green, 35);
      box-shadow: 2px 2px 5px 2px #17661450;
    }

    &_white {
      border: 3px white;
      background-color: white;
      box-shadow: 2px 2px 5px 2px #58585850;
    }

    h3,
    p {
      text-align: left;
      margin: 5px 0;
    }

    &_date {
      p {
        text-align: right;
      }
    }
  }
}

@media only screen and (max-width: 870px) {
  .active {
    &_textwrapper {
      padding: 0 25px;

      h3,
      p {
        text-align: left;
        margin: 5px 0;
        font-size: 0.85rem;
      }

      &_date {
        min-width: 120px;

        p {
          text-align: right;
        }
      }
    }
  }
}
</style>
