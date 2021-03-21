<template>
  <div class="likes-page">
    <cedra-nav />
    <ion-segment
      class="likes-segment"
      type="ios"
      @ionChange="changeActiveSlide($event)"
      :value="activeSlide"
    >
      <ion-segment-button :value="1">
        <ion-label>Понравились</ion-label>
      </ion-segment-button>
      <ion-segment-button :value="2">
        <ion-label>Понравился</ion-label>
      </ion-segment-button>
      <ion-segment-button :value="3">
        <ion-label>Совпадения</ion-label>
      </ion-segment-button>
    </ion-segment>
    <cedra-likes-slider
      :activeSlide="activeSlide"
      @change-slide="changeActiveSlide"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import { IonSegment, IonSegmentButton } from "@ionic/vue";
import CedraLikesSlider from "@/components/likes/cedra-likes-slider.component.vue";

export default defineComponent({
  components: {
    "cedra-nav": CedraNav,
    IonSegment,
    IonSegmentButton,
    CedraLikesSlider,
  },
  data: () => ({
    activeSlide: 1,
  }),

  methods: {
    changeActiveSlide(event: CustomEvent) {
      const { detail } = event;
      if (detail) {
        this.activeSlide = detail;
        console.log(this.activeSlide);
      }
    },
  },
});
</script>

<style scoped>
.likes-segment {
  margin: auto;
  margin-top: 20px;
  width: 90%;
}

.slide {
  width: 100%;
  height: 70vh;
}
</style>