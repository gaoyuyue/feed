<template>
  <div class="component-container">
    <div class="main">
      <div class="avatar">
        <img src="https://via.placeholder.com/60x60" alt="avatar">
      </div>
      <div class="content">
        <div class="user-info">
          <b class="user-info-item user-name">{{selfInfo.nick}}</b>
          <span class="user-info-item">@{{selfInfo.name}}</span>
          <span class="user-info-item">· 一个小时前</span>
        </div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
    <div class="footer">
      <button @click="editItem" type="button" class="btn btn-link">编辑</button>
      <button @click="confirmDel" type="button" class="btn btn-link text-danger">删除</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FeedItemEditor from '@/components/FeedItemEditorModal/index';
import ConfirmModal from '@/components/ConfirmModal/index';

export default {
  name: 'FeedItem',
  props: {
    item: {
      default: {
        id: '5be579a301fb8f5f393c914f',
        text: '快来围观，这是我的第一条微博！',
      },
    },
  },
  computed: {
    ...mapGetters({
      selfInfo: 'userInfo',
    }),
  },
  methods: {
    ...mapActions('home', [
      'delFeedItem',
    ]),
    editItem() {
      this.$modal.show(FeedItemEditor,
        {
          id: this.item.id,
          text: this.item.text,
        },
        {
          height: 'auto',
        },
      );
    },
    confirmDel() {
      this.$modal.show(ConfirmModal,
        {
          onDelete: () => {
            this.delFeedItem(this.item.id);
          },
        },
        {
          width: 400,
          height: 'auto',
        },
      );
    },
  },
};
</script>

<style scoped>
  .component-container {
    transition: all 300ms ease;
    border-top: 1px solid #E7ECEF;
    padding: 10px 12px;
  }
  .component-container:hover {
    background: #F6F8FA;
  }
  .component-container > .main {
    display: flex;
  }
  .component-container > .main > .avatar {
    flex: 0 0 60px;
  }
  .component-container > .main > .content {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
  .component-container > .main > .content > .user-info > .user-info-item {
    margin-left: 2px;
    color: #999999;
  }
  .component-container > .main > .content > .user-info > .user-name {
    color: #000000;
  }
  .component-container > .main > .content > .user-info > .user-name:hover {
    color: #5D9FEE;
    text-decoration: underline;
  }
  .component-container > .main > .content > .text {
    margin-top: 4px;
    line-height: 1.2;
  }
  .component-container > .footer {
    display: flex;
    justify-content: flex-end;
  }
</style>
