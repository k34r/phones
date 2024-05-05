<script lang="ts">
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([
            'CHANGE_CARD_TO_SHOW'
        ]),
        CountProduct(count: number) {
            this.$emit('sendCount', count)
            this.CHANGE_CARD_TO_SHOW(count)
        }
    }
}
</script>

<template>
    <div class="selection__container">
        <div class="caption__container">
            <h1 class="caption">Смартфоны</h1>
            <div class="selection__choice"> Отобразить товары:
                <button class="selection__but" @click="CountProduct(2)">2</button>
                <button class="selection__but" @click="CountProduct(3)">3</button>
                <button class="selection__but" @click="CountProduct(4)">4</button>
                <button class="selection__but" @click="CountProduct(5)">5</button>
                <button class="selection__but" @click="CountProduct(6)">6</button>
            </div>
        </div>
    </div>
</template>

<style>
.selection__container {
    width: 79%;
    margin: 0 auto;
}

.caption__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 20px;
}

.caption {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0.02em;
    color: #828286;
}

.selection__choice {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: #0D5ADC;
}

.selection__but {
    color: #0D5ADC;
    font-size: 18px;
    margin: 0 3px;
    border: none;
    background: transparent;
}

.selection__but:focus {
    border-bottom: 1px solid #0D5ADC;
}
</style>