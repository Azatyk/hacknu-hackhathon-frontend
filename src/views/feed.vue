<template>
  <div>
    <cedra-nav />
    Home
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
  },
});
</script>

<style scoped>
</style>