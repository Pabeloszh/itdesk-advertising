import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
  state() {
    return {
      blogPosts:[],
      postsLoaded: false,
    };
  },
  mutations: {
    show(state) {
      console.log(state);
    },
    SAVE_POSTS(state, posts) {
      state.blogPosts = posts;
      state.postsLoaded = true;
    }
  },
  actions:{
    loadPost({commit}) {
      axios.get(`https://cdn.contentful.com/spaces/${process.env.VUE_APP_CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.VUE_APP_CONTENTFULL_API_KEY}`).then(result => {
        commit('SAVE_POSTS', result);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
});

export default store;
