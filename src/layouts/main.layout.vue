<template>
  <ion-page>
    <div class="content">
      <router-view />
    </div>
  <slider :isSliderOpen="isSliderOpen" @close-slider="isSliderOpen = false" />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import slider from "@/views/slider.vue";

export default defineComponent({
  components: {
    slider,
  },

  data() {
    return {
      isSliderOpen: true,
    };
  },
});
</script>

<style>
.content {
  z-index: 2;
}
</style>