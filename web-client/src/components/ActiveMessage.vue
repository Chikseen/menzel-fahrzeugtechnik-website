<template>
  <div v-if="allActviveMessages.length">
    <div class="active_wrapper" v-for="message in allActviveMessages" :key="message.id">
      <div
        class="active_textwrapper"
        :class="[
          message.color == 'red' ? 'active_textwrapper_red' : '',
          message.color == 'green' ? 'active_textwrapper_green' : '',
          message.color == 'white' ? 'active_textwrapper_white' : '',
        ]"
      >
        <div>
          <h2>{{ message.titel }}</h2>
          <p>{{ message.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../apiService";

export default {
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
  &_wrapper {
    position: relative;
    max-width: 1250px;
    margin: 15px auto;
  }

  &_textwrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 25px;
    border-radius: 10px;

    &_red {
      background-color: $error-red;
      box-shadow: 2px 2px 10px 2px #66141450;
    }
    &_green {
      background-color: $succes-green;
      box-shadow: 2px 2px 10px 2px #17661450;
    }
    &_white {
      background-color: $icon_base_grey;
      box-shadow: 2px 2px 10px 2px #58585850;
    }

    h2,
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

      h2,
      p {
        text-align: left;
        margin: 5px 0;
        font-size: 0.91rem;
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
