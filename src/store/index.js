import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      blogPosts: [],
      postsLoaded: false,
      ourProjects: [],
      projectsLoaded: false,
      ourSteps: [],
      stepsLoaded: false
    };
  },
  mutations: {
    show(state) {
      console.log(state);
    },
    SAVE_POSTS(state, posts) {
      state.blogPosts = posts;
      state.postsLoaded = true;
    },
    SAVE_PROJECTS(state, posts) {
      state.ourProjects = posts;
      state.projectsLoaded = true;
    },
    SAVE_STEPS(state, posts) {
      state.ourSteps = posts;
      state.stepsLoaded = true;
    }
  },
  actions: {
    loadPost({ commit }) {
      axios
        .get(
          `https://cdn.contentful.com/spaces/${process.env.VUE_APP_CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.VUE_APP_CONTENTFULL_API_KEY}&content_type=itDeskBlog`
        )
        .then(result => {
          commit("SAVE_POSTS", result);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    loadProjects({ commit }) {
      axios
        .get(
          `https://cdn.contentful.com/spaces/${process.env.VUE_APP_CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.VUE_APP_CONTENTFULL_API_KEY}&content_type=itDeskPortfolio`
        )
        .then(result => {
          commit("SAVE_PROJECTS", result);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    loadSteps({ commit }) {
      axios
        .get(
          `https://cdn.contentful.com/spaces/${process.env.VUE_APP_CONTENTFULL_SPACE_ID}/environments/master/entries?access_token=${process.env.VUE_APP_CONTENTFULL_API_KEY}&content_type=itDeskSteps`
        )
        .then(result => {
          commit("SAVE_STEPS", result);
        })
        .catch(error => {
          throw new Error(`API ${error}`);
        });
    }
  }
});

export default store;
