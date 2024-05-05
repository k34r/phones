<script lang="ts">
export default {

}
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="#" class="header__catalog">Каталог</a>
      <ul class="header__menu">
        <li>
          <a href="#" class="header__comparsion">Сравнение</a>
        </li>
        <li>
          <a href="#" class="header__cabinet">Личный кабинет</a>
        </li>
        <li>
          <img src="/src/pictures/avatar.svg" alt="avatar">
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
 border-bottom: 1px solid #A6A5A9;
  }

.container {
  width: 79%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;
}

.header__menu {
  display: flex;
}

.header__catalog,
.header__comparsion,
.header__cabinet {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
}

.header__comparsion,
.header__cabinet {
  color: #3B4157;
  font-size: 12px;
}

.header__catalog {
  color: #0D5ADC;
  font-size: 18px;
}

.header__comparsion {
  text-transform: uppercase;
  padding-right: 48px;
}

.header__cabinet {
  padding-right: 19px;
}
</style>