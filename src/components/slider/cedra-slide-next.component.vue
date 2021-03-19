<template>
  <div class="link">
    <span class="link-label"><slot></slot></span>
    <ion-icon name="arrow-forward-outline"></ion-icon>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
  },
};
</script>

<style scoped>
.link {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.link-label {
  font-size: 20px;
  color: --ion-color-primary;
}
</style>