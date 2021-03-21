<template>
  <div class="liked-user">
    <div
      :style="{ 'background-image': `url(${avatar})` }"
      class="liked-user-avatar"
    ></div>
    <h2 class="liked-user-name">
      {{ firstName }}, <span class="liked-user-age">{{ age }}</span>
    </h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    avatar: String,
    firstName: String,
    age: Number,
  },
});
</script>

<style scoped>
.liked-user {
  margin: auto;
  padding: 5% 0;
  width: 85%;
  height: 75px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #bdc3c770;
}

.liked-user-avatar {
  margin-right: 15px;
  height: 50px;
  width: 50px;
  border-radius: 30px;
  background-position: center;
  background-size: contain;
}

.liked-user-name {
  font-size: 20px;
  font-weight: 500;
}

.liked-user-age {
  font-weight: 400;
}
</style>