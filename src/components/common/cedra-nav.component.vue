<template>
  <nav class="nav">
    <router-link :to="{ name: 'feed' }" exact class="nav__link">
      <i class="bx bxs-dice-5"></i>
    </router-link>
    <router-link :to="{ name: 'likes' }" class="nav__link">
      <i class="bx bxs-category"></i>
    </router-link>
    <router-link :to="{ name: 'questions' }" class="nav__link">
      <i class="bx bxs-message-rounded"></i>
    </router-link>
    <router-link :to="{ name: 'profile' }" class="nav__link">
      <i class="bx bxs-user"></i>
    </router-link>
  </nav>
</template>

<style scoped>
.nav {
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__link {
  color: #bdc3ce;
  font-size: 26px;
}

.nav__link.router-link-active {
  color: #f48b29;
}
</style>