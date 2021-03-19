<template>
  <nav class="nav">
    <router-link :to="{ name: 'feed' }" exact class="nav__link">
      <i class="bx bxs-dice-5 nav__link-icon"></i>
    </router-link>
    <router-link :to="{ name: 'likes' }" class="nav__link">
      <i class="bx bxs-heart nav__link-icon"></i>
    </router-link>
    <router-link :to="{ name: 'questions' }" class="nav__link">
      <i class="bx bxs-message-detail nav__link-icon"></i>
    </router-link>
    <router-link :to="{ name: 'profile' }" class="nav__link">
      <i class="bx bxs-user nav__link-icon"></i>
    </router-link>
  </nav>
</template>

<style scoped>
.nav {
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__link {
  color: #bdc3ce;
  font-size: 26px;
}

.nav__link.router-link-active {
  color: #6c5ce7;
}

.nav__link-icon {
  font-size: 30px;
}
</style>