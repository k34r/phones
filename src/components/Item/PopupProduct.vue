<script lang="ts">
import { useStore } from 'vuex';

export default {
  props: {
    PopupItem_id: Number,
    itemId: Number
  },
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  data() {
    
    return {
      ItemPhoneName: this.store.state.products[this.PopupItem_id].name,
      ItemPhoneImage: this.store.state.products[this.PopupItem_id].picture,
      PopupItemId: this.store.state.products[this.PopupItem_id].id,
    };
  },
   methods: {
    ReplacePhone() {
      this.ItemPhoneName = this.store.state.products[this.itemId].name
      this.ItemPhoneImage = this.store.state.products[this.itemId].picture
      this.$emit('dataToParent', this.PopupItemId)
    }
  }
}
</script>


<template>
  <div class="popup__wrapper">
    <button class="popup__but" @click="ReplacePhone"></button>
    <img class="popup__img" :src="ItemPhoneImage">
    <p class="popup__productName">{{ ItemPhoneName }}</p>
  </div>
</template>



<style>
.popup__wrapper {
  display: flex;
  align-items: center;
}

.popup__but {
  width: 20px;
  height: 20px;
  background: url('../../pictures/popup_but.svg');
  border: none;
}

.popup__but:hover {
  cursor: pointer;
}

.popup__img {
  width: 24px;
  height: 50px;
  margin-left: 18px;
}

.popup__productName {
  margin-left: 23px;
  font-size: 18px;
  font-weight: 400;
}
</style>