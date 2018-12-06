<template>
  <div class="component-container">
    <feed-item
      v-for="item of feedList"
      :key="item.id"
      :item="item"
    />
    <div v-if="!feedList.length">暂时还没有新鲜事～</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import FeedItem from './FeedItem';

export default {
  name: 'FeedList',
  components: { FeedItem },
  created() {
    this.getFeedList();
  },
  computed: {
    ...mapGetters('home', [
      'feedList',
    ]),
  },
  methods: {
    ...mapActions('home', [
      'getFeedList', 'delFeedItem',
    ]),
  },
};
</script>

<style scoped>
  .component-container {
    background: #FFFFFF;
  }
</style>
