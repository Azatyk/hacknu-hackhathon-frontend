<template>
  <div>
    <cedra-nav />
    <cedra-feed-card
      imagePath="https://mensby.com/wp-content/uploads/2020/02/pochemu-devushka-ne-cenit-01.jpg"
      name="Аяулым"
      :birthday="20"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraFeedCard from "@/components/feed/cedra-feed-card.component.vue";

export default defineComponent({
  components: {
    CedraNav,
    CedraFeedCard,
  },
});
</script>

<style scoped>
</style>