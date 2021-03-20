<template>
  <nav class="nav">
    <router-link :to="{ name: 'feed' }" exact class="nav__link">
      <i class="fas fa-lemon nav__link-icon nav__link-icon_lemon"></i>
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>


<style scoped>
.nav {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}

.nav__link {
  padding: 10px 20px;
  color: #bdc3ce;
  font-size: 26px;
}

.nav__link.router-link-active {
  color: #6c5ce7;
}

.nav__link-icon {
  font-size: 30px;
}

.nav__link-icon_lemon {
  margin-bottom: 6px;
  font-size: 26px;
}
</style>