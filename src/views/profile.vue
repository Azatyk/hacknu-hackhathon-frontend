<template>
  <div class="profile">
    <cedra-nav />
    <div class="profile__content">
      <cedra-avatar url="#" />
      <h2 class="profile__name">Онласын Саяжанна, 14</h2>
      <p class="profile__description">
        Независимая женщина — это женщина, которая не нашла никого, кто хотел бы
        зависеть от нее. Мужчина может любить двух женщин, но лишь до тех пор,
        пока одна из них не поймет, в чем дело
      </p>
    </div>
    <cedra-tags class="profile__tags" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraAvatar from "@/components/profile/cedra-avatar.component.vue";
import CedraTags from "@/components/profile/cedra-tags.component.vue";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
    "cedra-avatar": CedraAvatar,
    "cedra-tags": CedraTags,
  },
});
</script>

<style scoped>
.profile {
  height: 100vh;
}

.profile__content {
  padding: 30px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile__name {
  margin: 30px 0 0;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
}

.profile__description {
  margin: 8px 0 0;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
}

.profile__tags {
  margin-top: 30px;
}
</style>