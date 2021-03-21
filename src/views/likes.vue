<template>
  <div class="likes-page">
    <cedra-nav />
    <div class="segment">
      <span
        class="segment-label"
        :class="{ 'segment-label-active': activeSlide == 1 }"
        @click="activeSlide = 1"
        >Мне понравились</span
      >
      <span
        class="segment-label"
        :class="{ 'segment-label-active': activeSlide == 2 }"
        @click="activeSlide = 2"
        >{{
          user.genderId == 1
            ? "Я понравился"
            : user.genderId == 2
            ? "Я понравилась"
            : "Я понравился(-ась)"
        }}</span
      >
    </div>
    <cedra-likes-slider
      :activeSlide="activeSlide"
      @change-slide="activeSlide == 1 ? (activeSlide = 2) : (activeSlide = 1)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraLikesSlider from "@/components/likes/cedra-likes-slider.component.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
    CedraLikesSlider,
  },
  data: () => ({
    activeSlide: 1,
  }),

  computed: mapGetters(["user"]),
});
</script>

<style scoped>
.slide {
  width: 100%;
  height: 70vh;
}

.segment {
  margin: auto;
  width: 84%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.segment-label {
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
  color: #6c5ce7;
  border-radius: 10px;
  transition: 200ms ease-in-out;
}

.segment-label-active {
  border: 1px solid #6c5ce7;
  transition: 200ms ease-in-out;
}
</style>