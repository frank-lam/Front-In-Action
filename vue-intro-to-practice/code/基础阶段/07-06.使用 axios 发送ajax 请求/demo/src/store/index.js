import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: { name: 'dell' },
  mutations: {
    changeName(state, str) {
      state.name = str;
    }
  },
  actions: {
    getData(store) {
      axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/register')
      .then((response) => {
        const msg = response.data.message;
        store.commit('changeName', msg)
      })
    }
  }
})
