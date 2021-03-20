<template>
  <div class="tags">
    <ion-badge
      v-for="tag in tags"
      :key="tag.id"
      color="primary"
      class="tags__item"
      >{{ tag.name }}</ion-badge
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonBadge } from "@ionic/vue";
import tags from "@/data/tags";

export default defineComponent({
  components: { IonBadge },
  data: () => ({
    tags,
  }),
});
</script>

<style scoped>
.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tags__item {
  padding: 8px 16px;
  margin: 3px 6px;
}
</style>