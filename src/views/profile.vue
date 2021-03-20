<template>
  <div class="profile">
    <cedra-nav />
    <cedra-profile-img />
    <h2 class="profile__name">
      Онласын Саяжанна, 14
    </h2>
    <p class="profile__desc">
      Независимая женщина — это женщина, которая не нашла никого, кто хотел бы зависеть от нее. Мужчина может любить двух женщин, но лишь до тех пор, пока одна из них не поймет, в чем дело
    </p>
    <cedra-profile-tags />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraProfileImg from "@/components/profile/cedra-profile-img.component.vue";
import CedraProfileTags from "@/components/profile/cedra-profile-tags.component.vue";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
    "cedra-profile-img": CedraProfileImg,
    "cedra-profile-tags": CedraProfileTags,
  },
});
</script>

<style scoped>
.profile {
  width: 100vw;
  height: 100vh;
}

.profile__name {
  padding: 0 10%;
  color: rgb(71, 71, 71);
  font-size: 25px;
  font-weight: 700;
  text-align: center;
}

.profile__desc {
  padding: 0 5%;
  text-align: center;
}
</style>