<script lang="ts">


export default {

}
</script>

<template>
    <div class="items__title">
        <div class="differences__container">
            <input class="differences__checkbox" type="checkbox">
            <div class="differences__text">Показать различия</div>
        </div>
        <div class="title__make ">
            <p class="title__text">Производитель</p>
        </div>
        <div class="title__year">
            <p class="title__text">год релиза</p>
        </div>
        <div class="title__diagonal">
            <p class="title__text">Диагональ экрана (дюйм)</p>
        </div>
        <div class="title__country">
            <p class="title__text">Страна-производитель</p>
        </div>
        <div class="title__memory">
            <p class="title__text">Объем памяти</p>
        </div>
        <div class="title__frequency">
            <p class="title__text">Частота обновления экрана</p>
        </div>
        <div class="title__nfc">
            <p class="title__text">NFC</p>
        </div>
        <div class="title__nfc">
            <p class="title__text">Поддержка eSIM</p>
        </div>
        <div class="title__charge">
            <p class="title__text">Поддержка беспроводной зарядки</p>
        </div>
        <div class="title__price">
            <p class="title__text">Стоимость</p>
        </div>
        
    </div>
    
</template>

<style>
.items__title {
    width: 100%;
}

.items__title>div {
    height: 113px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #CDCFD2;
}

.title__text {
    width: 205px;
    font-size: 18px;
    color: #A4A9B9;
    text-transform: uppercase;
}

.items__title div:first-child {
    display: flex;
    align-items: center; 
    height: 225px; 
}

.differences__text {
    font-size: 18px;
    font-weight: 400;
    color: #0d5adc;
    margin-left: 20px;
}

.differences__checkbox {
    width: 25px;
    height: 25px;
    border-radius: 4px;
}
</style>