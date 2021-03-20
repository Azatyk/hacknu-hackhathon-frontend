<template>
  <ion-page>
    <div class="content">
      <router-view />
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage } from "@ionic/vue";

export default defineComponent({
  components: {
    IonPage,
  },
});
</script>

<style>
.content {
  min-height: 100vh;
  background-color: #f9f6fb;
  z-index: 2;
}
</style>