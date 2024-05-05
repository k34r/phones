<script lang="ts">
import PopupProduct from './PopupProduct.vue'
import { useStore } from 'vuex'

export default {
    props: {
        itemId: Number
    },
    data() {
        return {
            dataFromChild: ''
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    },
    components: {
        PopupProduct
    },
    methods: {
        getDataFromChild(PopupProductId: Number) {
            this.dataFromChild = PopupProductId;
            this.$emit('dataToParent', this.dataFromChild);
        }
    }
}
</script>

<template>
    <div class="item__popup">
        <input class="popup__input" type="text">
        <template v-for="(product, index) in store.state.products ">
            <PopupProduct class="popup__product"
                         v-if="index >= store.state.phonesOnPage"
                         v-bind:PopupItem_id="product.id"
                         v-bind:itemId="itemId"
                        @dataToParent="getDataFromChild" />
        </template>
    </div>
</template>

<!-- <template>
    <div class="item__popup">
        <input class="popup__input" type="text">
        <template v-for="(product, index) in this.$store.state.products ">
            <PopupProduct class="popup__product" v-if="index < 3" v-bind:product_data="product" />
        </template>
    </div>
</template> -->

<style>
.item__popup {
    position: absolute;
    top: 67px;
    left: -214px;
    width: 421px;
    /* display: none; */
    z-index: 2;
    border: 1px solid #D9D9D9;
    background-color: #fff;
}

.popup__input {
    width: 364px;
    height: 47px;
    margin-top: 34px;
    margin-left: 18px;
    margin-bottom: 18px;
    border: 1px solid #C1C1C1;
}

.popup__product {
    margin-left: 18px;
    margin-bottom: 32px;
}
</style>