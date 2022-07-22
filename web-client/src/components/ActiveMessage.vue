<template>
  <div v-if="allActviveMessages.length">
    <div class="active_wrapper" v-for="message in allActviveMessages" :key="message.uuid">
      <div
        class="active_textwrapper"
        :class="[
          message.colorselection == '0' ? 'active_textwrapper_red' : '',
          message.colorselection == '1' ? 'active_textwrapper_green' : '',
          message.colorselection == '2' ? 'active_textwrapper_white' : '',
        ]"
      >
        <div>
          <h2>{{ message.titel }}</h2>
          <p>{{ message.text }}</p>
        </div>
        <div class="active_textwrapper_date">
          <p>Vom: {{ dateFormatter(message.startDate) }}</p>
          <p>Bis: {{ dateFormatter(message.endDate) }}</p>
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
      const data = await api.get("activeMessages/getFilterd", {});
      this.$store.commit("setMessage", data);
      this.allActviveMessages = data;
    },
    dateFormatter(data) {
      const date = new Date(data);
      return `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()}`;
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
      background-color: rgb(241, 50, 50);
      box-shadow: 2px 2px 10px 2px #66141450;
    }
    &_green {
      background-color: rgb(50, 235, 75);
      box-shadow: 2px 2px 10px 2px #17661450;
    }
    &_white {
      background-color: rgb(250, 250, 250);
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
