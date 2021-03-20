<template>
  <div class="feed-page">
    <cedra-nav />
    <cedra-feed-card
      class="feed-card-component"
      imagePath="https://mensby.com/wp-content/uploads/2020/02/pochemu-devushka-ne-cenit-01.jpg"
      name="Аяулым"
      :birthday="20"
    />
    <div class="feed-buttons">
      <cedra-feed-button type="dislike" @click="handleDislikeButton" />
      <cedra-feed-button type="like" @click="handleLikeButton" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraFeedCard from "@/components/feed/cedra-feed-card.component.vue";
import CedraFeedButton from "@/components/feed/cedra-feed-button.component.vue";

export default defineComponent({
  components: {
    CedraNav,
    CedraFeedCard,
    CedraFeedButton,
  },

  methods: {
    handleDislikeButton() {
      console.log("dislike button clicked");
    },
    handleLikeButton() {
      console.log("like button clicked");
    },
  },
});
</script>

<style scoped>
.feed-card-component {
  margin-top: 10px;
}

.feed-buttons {
  margin: auto;
  margin-top: 25px;
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>