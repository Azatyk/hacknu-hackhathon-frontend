<template>
  <ion-page>
    <div class="content">
      <router-view />
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.content {
  min-height: 100vh;
  background-color: #f9f6fb;
  z-index: 2;
}
</style>