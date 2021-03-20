<template>
  <button class="feed-button">
    <i
      v-if="type == 'like'"
      class="bx bxs-heart button-icon button-icon-like"
    ></i>
    <i
      v-else-if="type == 'dislike'"
      class="bx bx-x button-icon button-icon-dislike"
    ></i>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: String,
  },
});
</script>

<style scoped>
.feed-button {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 80px;
  outline: none;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}

.button-icon {
  font-size: 45px;
}

.button-icon-like {
  color: #6c5ce7;
  font-size: 40px;
}

.button-icon-dislike {
  color: #e74c3c;
}
</style>