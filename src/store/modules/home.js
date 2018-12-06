import * as homeAPI from '@/service/api/home';
import {getList} from "../../service/api/home";

/**
 * initial state
 * shape:
 * feedList: [{ id: string, title: string, text: string }]
*/
const defaultState = {
  feedList: [],
};

// getters
const getters = {
  feedList: state => state.feedList,
};

// actions
const actions = {
  getFeedList: ({ commit }) => (
    homeAPI.getList()
      .then((res) => {
        const feedList = res.data.map(item => ({
          id: item.id,
          text: item.content,
        }));
        commit('setFeedList', feedList || []);
      })
  ),
  addFeedItem: ({ commit }, text) => (
    homeAPI.addFeedItem(text)
      .then((res) => {
        const feedItem = {
          id: res.data.id,
          text: res.data.content,
        };
        commit('addFeedItem', feedItem);
      })
  ),
  delFeedItem: ({ state, commit }, id) => {
    homeAPI.deleteOne(id)
      .then(
        () => {
          commit('setFeedList', state.feedList.filter(item => item.id !== id));
        },
      );
  },
  updateFeedItem: ({ state, commit }, {
    id, text,
  }) => {
    homeAPI.updateOne({
      id,
      text,
    })
      .then(
        () => {
          const newFeedList = state.feedList.map(item => (
            item.id === id
              ? {
                ...item,
                text,
              }
              : item
          ));
          commit('setFeedList', newFeedList);
        },
      );
  },
};

// mutations
const mutations = {
  addFeedItem: (state, feedItem) => {
    state.feedList.unshift(feedItem);
  },
  setFeedList: (state, feedList) => {
    state.feedList = feedList;
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
