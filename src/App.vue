<template>
  <div id="app">
    <div class="quest" v-for="item in allQuests" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.id }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import axios from "axios";
export default {
  name: "App",
  // data() {
  //   return {
  //     quests: [],
  //   };
  // },
  // computed: {
  //   allQuests(){
  //     return this.$store.getters.allQuests
  //   }
  // },
  computed: mapGetters(["allQuests"]),
  // methods: mapActions(["getQuests"]),
  async mounted() {
    // this.getQuests();
    this.$store.dispatch("getQuests");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.quest {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
