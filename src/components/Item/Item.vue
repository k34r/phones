<script lang="ts">
import type { VueElement } from 'vue'
import ItemPopup from './ItemPopup.vue'
import { useStore } from 'vuex'

export default {
    props: {
        product_id: Number
    },
    setup() {
    const store = useStore()
    return {
      store
    }
  },
    data() {
        return {
            isVisible: false,
            ItemId: this.product_id,
            IdFromPopupItem: ''
        }
    },
    methods: {
        // CallPopup(button: HTMLElement) {
        //     const popup = button.nextElementSibling as HTMLElement
        //     if (popup.classList.contains('item__popup')) {
        //         popup.style.display = 'block'
        //     }
        // },
        // @click="CallPopup($event.target as HTMLElement)"
        showComponent() {
            this.isVisible = true
        },
        //  hideComponent() {
        //     this.isVisible = false
        // }
        hideComponent(event: MouseEvent) {
            if (!event.relatedTarget || !this.$el.contains(event.relatedTarget as Node)) {
                this.isVisible = false;
            }
        },
        getDataFromChild(PopupProductId: Number) {
            this.ItemId = PopupProductId;
        }

    },
    components: {
        ItemPopup
    }
}
</script>

<template>
    <div class="item">
        <div>
            <div class="item__img__container">
                <img class="item__img" :src="store.state.products[ItemId].picture">
                <button class="item__but" type="button" @click="showComponent"></button>
                <ItemPopup v-show="isVisible"
                           @mouseout="hideComponent"
                           @dataToParent="getDataFromChild" 
                           v-bind:itemId="store.state.products[ItemId].id"
                           />
            </div>
            <h3 class="item__caption">{{ store.state.products[ItemId].name }}</h3>
        </div>
        <div class="item__make ">
            <p class="item__text">{{ store.state.products[ItemId].make }}</p>
        </div>
        <div class="item__year">
            <p class="item__text">{{ store.state.products[ItemId].year }}</p>
        </div>
        <div class="item__diagonal">
            <p class="item__text">{{ store.state.products[ItemId].diag }}</p>
        </div>
        <div class="item__country">
            <p class="item__text">{{ store.state.products[ItemId].country }}</p>
        </div>
        <div class="item__memory">
            <p class="item__text">{{ store.state.products[ItemId].memory }}</p>
        </div>
        <div class="item__frequency">
            <p class="item__text">{{ store.state.products[ItemId].freq }}</p>
        </div>
        <div class="item__nfc">
            <img class="item__image" :src="store.state.products[product_id].NFC">
        </div>
        <div class="item__nfc">
            <img class="item__image" :src="store.state.products[ItemId].ESIM">
        </div>
        <div class="item__charge">
            <img class="item__text" :src="store.state.products[ItemId].wireles">
        </div>
        <div class="item__price">
            <p class="item__text">{{ store.state.products[ItemId].price }}</p>
        </div>
    </div>
</template>

<style>
.item {
    width: 100%;
}

.item__img {
    width: 65px;
    height: 120px;
}

.item>div:first-child {
    height: 225px;
    border-bottom: 1px solid #CDCFD2;
    display: flex;
    flex-direction: column;
}

.item>div {
    height: 113px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #CDCFD2;
}

.item__but {
    width: 32px;
    height: 70px;
    margin-left: 20px;
    background: url(../../pictures/item_but.svg) no-repeat center;
    border: none;
}

.item__but:hover {
    cursor: pointer;
}

.item__img__container {
    position: relative;
}
</style>