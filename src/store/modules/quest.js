import axios from 'axios'
export default {
  state: {
    quests: []
  },
  mutations: {
    updateQuests(state, quests) {
  
      state.quests = quests
    }
  },
  actions: {
    getQuests(ctx) {
      axios
        .get("https://krafik.ru/api/quest")
        .then((response) => {
          const questsRes = response.data;
          ctx.commit('updateQuests', questsRes)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  getters: {
    allQuests(state) {
      return state.quests
    }
  }
}