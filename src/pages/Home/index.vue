<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <profile/>
      </div>
      <div class="col-6">
        <new-feed-item/>
        <feed-list/>
      </div>
      <!--<div class="col-3">-->
        <!--热点消息-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
import WhoAreYou from '@/components/WhoAreYouModal/index';
import Profile from './Profile';
import FeedList from './FeedList';
import NewFeedItem from './NewFeedItem';

export default {
  components: { NewFeedItem, Profile, FeedList },
  name: 'Home',
  created() {
    const userInfo = JSON.parse(
      window.sessionStorage.getItem('userInfo'),
    );
    if (!userInfo || !Object.keys(userInfo).length) {
      this.$modal.show(WhoAreYou, {}, {
        height: 'auto',
      });
    }
  },
  data() {
    return {
      searchText: '',
    };
  },
};
</script>

<style scoped>
  .container {
    margin: 20px auto 100px;
  }
</style>
