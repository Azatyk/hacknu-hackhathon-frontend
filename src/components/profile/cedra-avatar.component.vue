<template>
  <div class="avatar">
    <img
      src="https://i.pinimg.com/originals/f7/bf/c2/f7bfc2c9ef487bf92eb7f3f2fe868a05.jpg"
      class="avatar__image"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    url: String,
  },
});
</script>

<style scoped>
.avatar {
  height: 100px;
  width: 100px;
}

.avatar__image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>