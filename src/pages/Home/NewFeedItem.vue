<template>
  <div class="component-container">
    <div @click="showInput" v-show="!isInputShow" class="btn-new-item">有什么新鲜事？</div>
    <form v-show="isInputShow" @submit.prevent="submitNewItem">
      <textarea
        v-model="newItemText"
        ref="textarea"
        @blur="hideInput"
        class="input-new-item-text"
        placeholder="有什么新鲜事？"
        title="new-item-text">
      </textarea>
      <div class="form-footer">
        <button class="btn btn-primary btn-sm" :disabled="!Boolean(newItemText.trim())">发送</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NewFeedItem',
  data() {
    return {
      isInputShow: false,
      newItemText: '',
    };
  },
  methods: {
    ...mapActions('home', [
      'addFeedItem',
    ]),
    showInput() {
      this.isInputShow = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    hideInput() {
      if (!this.newItemText.trim()) {
        this.newItemText = '';
        this.isInputShow = false;
      }
    },
    submitNewItem() {
      this.addFeedItem(this.newItemText);
      this.newItemText = '';
      this.isInputShow = false;
    },
  },
};
</script>

<style scoped>
.component-container {
  background: #EBF5FC;
  padding: 8px 10px;
}
.btn-new-item {
  line-height: 1.2;
  background: #FFFFFF;
  border: 1px solid #C6E7FB;
  border-radius: 8px;
  width: 100%;
  padding: 8px 6px;
  cursor: text;
  color: #1DA1F2;
  font-size: 14px;
}
.input-new-item-text {
  line-height: 1.2;
  background: #FFFFFF;
  border: 2px solid #C6E7FB;
  border-radius: 8px;
  width: 100%;
  height: 100px;
  padding: 8px 6px;
  cursor: text;
  color: #333333;
  font-size: 14px;
}
.input-new-item-text:focus {
  outline: none;
}
.input-new-item-text::placeholder {
  line-height: 1.2;
}
.form-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
