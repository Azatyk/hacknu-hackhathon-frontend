<template>
  <div class="feed-card" :style="{ 'background-image': `url(${imagePath})` }">
    <div class="card-shadow"></div>
    <h2 class="card-name">
      {{ name }}, <span class="card-age">{{ birthday }}</span>
    </h2>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    imagePath: String,
    name: String,
    birthday: String,
  },
});
</script>

<style scoped>
.feed-card {
  position: relative;
  margin: auto;
  margin-top: 10px;
  width: 94%;
  height: 70vh;
  border-radius: 10px;
  background-color: grey;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.card-shadow {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  border-radius: 10px;
  background: linear-gradient(to bottom, #00000001, #00000080);
  z-index: 2;
}

.card-name {
  position: absolute;
  bottom: 25px;
  left: 30px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  z-index: 3;
}

.card-age {
  font-weight: 400;
}
</style>