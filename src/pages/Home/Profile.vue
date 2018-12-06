<template>
  <div class="card">
    <img class="card-img-top" src="https://via.placeholder.com/100x80/?text=Image+cap" alt="Card image cap">
    <div class="card-header">
      <h5 class="card-title">
        {{userInfo.nick}}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{userInfo.handle}}
      </h6>
    </div>
    <!--<div class="card-body">-->
      <!--总数：-->
    <!--</div>-->
    <!--<div class="card-body">-->
      <!--<div class="card-text">-->
        <!--<div>最近动态：</div>-->
        <!--<ul>-->
          <!--<li></li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters([
      'userInfo',
    ]),
  },
};
</script>

<style scoped>

</style>
