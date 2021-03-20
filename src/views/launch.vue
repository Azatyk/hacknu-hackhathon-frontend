<template>
  <div class="launch">
    <img src="/assets/images/logo.svg" alt="Логотип" class="launch__logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import aituBridge from "@btsd/aitu-bridge";
import { detailUserRequest } from "@/requests/users";

export default defineComponent({
  methods: {
    navigateToSlider() {
      this.$router.push({ name: "slider" });
    },
    navigateToFeed() {
      this.$router.push({ name: "feed" });
    },
    async getUserPhoneNumber() {
      const res = await aituBridge.getPhone();
      return res.phone;
    },
    ...mapMutations(["setUser"]),
  },
  async beforeMount() {
    if (aituBridge.isSupported()) {
      const phoneNumber = await this.getUserPhoneNumber();
      detailUserRequest(phoneNumber)
        .then((content) => {
          this.setUser(content.user);
          this.navigateToFeed();
        })
        .catch(this.navigateToSlider);
    } else {
      this.navigateToSlider();
    }
  },
});
</script>

<style scoped>
.launch {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.launch__logo {
  width: 60px;
}
</style>