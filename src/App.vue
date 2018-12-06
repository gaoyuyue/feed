<template>
  <div class="app-container">
    <header>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">个人主页<span class="sr-only"> (当前)</span></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" @submit.prevent="handleSearch">
            <input v-model="searchText" class="form-control mr-sm-2" type="text" placeholder="搜索">
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">搜索</button>
          </form>
          <button @click="showModal" type="button" class="btn btn-primary">分享新鲜事</button>
        </div>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import FeedItemEditor from '@/components/FeedItemEditorModal/index';

export default {
  name: 'App',
  data() {
    return {
      activeTab: 'home',
      searchText: '',
      newItemText: '',
    };
  },
  methods: {
    handleSearch() {
      window.console.log(this.searchText);
    },
    showModal() {
      this.$modal.show(FeedItemEditor,
        {
          text: '',
        },
        {
          height: 'auto',
        },
      );
    },
  },
};
</script>

<style scoped>
  .app-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #E7ECEF;
  }
  header {
    flex: none;
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: #FFFFFF;
  }
  .navbar {
    width: 100%;
    max-width: 960px;
    background: none !important;
  }
  .nav-item.active * {
    color: #2780E3 !important;
    border-bottom: #2780E3 solid 2px;
  }
  main {
    flex: auto;
    overflow: auto;
  }
</style>
