<template>
  <form @submit.prevent="submitUserInfo" class="who-are-you">
    <fieldset>
      <legend>你是谁？</legend>
      <div class="form-group">
        <label for="nick">昵称</label>
        <div>
          <input v-model="userNick" type="text" class="form-control" id="nick">
        </div>
      </div>
      <div class="form-group">
        <label for="userName">用户名</label>
        <div>
          <input v-model="userName" type="text" class="form-control" id="userName">
        </div>
      </div>
      <div class="form-group">
        <label for="userHandle">一句话简介</label>
        <div>
          <input v-model="userHandle" type="text" class="form-control" id="userHandle">
        </div>
      </div>
    </fieldset>
    <div class="form-footer">
      <button type="button" @click="$emit('close')" class="btn btn-link btn-sm">取消</button>
      <button
        type="submit"
        class="btn btn-primary btn-sm"
        :disabled="!valid"
      >
        完成
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'WhoAreYou',
  props: ['id', 'text'],
  data() {
    return {
      userNick: '',
      userName: '',
      userHandle: '',
    };
  },
  computed: {
    valid() {
      if (
        !this.userNick ||
        !this.userName ||
        !this.userHandle
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions([
      'setUserInfo',
    ]),
    submitUserInfo() {
      const userInfo = {
        nick: this.userNick,
        name: this.userName,
        handle: this.userHandle,
      };
      this.setUserInfo(userInfo);
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
  .who-are-you {
    padding: 20px;
  }

  .form-footer {
    display: flex;
    justify-content: flex-end;
  }
</style>
