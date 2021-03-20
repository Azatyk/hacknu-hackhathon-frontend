<template>
  <div class="profile">
    <cedra-nav />
    <div class="profile__content">
      <cedra-avatar url="#" />
      <h2 class="profile__name">
        {{ `${user.firstName || "Unknown"} ${user.lastName || ""}` }}, 14
      </h2>
      <p class="profile__description">
        {{ user.description }}
      </p>
    </div>
    <cedra-tags class="profile__tags" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraAvatar from "@/components/profile/cedra-avatar.component.vue";
import CedraTags from "@/components/profile/cedra-tags.component.vue";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
    "cedra-avatar": CedraAvatar,
    "cedra-tags": CedraTags,
  },
  computed: mapGetters(["user"]),
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