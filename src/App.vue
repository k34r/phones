<script lang="ts">
import HeaderApp from './components/HeaderApp.vue'
import Item from './components/Item/Item.vue'
import ItemsHeader from './components/ItemsHeader.vue'
import Selection from './components/Selection.vue'
import { mapActions, useStore } from 'vuex'

export default {
 
  data() {
    return {
      phonesOnPage: 3
    }
  },
  setup() {
    const store = useStore()
    return {
      store
    }
  },
  methods: 
  {
    ...mapActions ([
      'GET_PRODUCTS_FROM_API'
    ]),
    ShowCountProducts(countPhones: number) {
      this.phonesOnPage = countPhones
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
    }
  },

  components: {
    HeaderApp,
    Selection,
    ItemsHeader,
    Item
  }
}
</script>

<template>
  <div class="root">
    <HeaderApp />
    <Selection @sendCount="ShowCountProducts" />
    <div class="products">
      <ItemsHeader />
      <template v-for="(product, index) in store.state.products ">
        <Item
          v-if="index < phonesOnPage"
          v-bind:product_id="product.id"
            />
      </template>
    </div>
  </div>
</template>

<style>
.products {
  width: 79%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
</style>
