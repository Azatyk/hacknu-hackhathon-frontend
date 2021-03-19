<template>
  <ion-slides
    ref="slider"
    class="slides"
    pager="true"
    :options="slideOpts"
    :class="{ 'slider-open': isSliderOpen }"
  >
    <ion-slide>
      <SlideContent
        :img="'/assets/slide1-image.svg'"
        v-bind:title="`Привет, ${data?.name ?? ''}. Мы рады, что ты с нами`"
        v-bind:description="'Cedra поможет найти твою вторую половинку. Давай покажу, что дальше'"
        v-bind:button-label="'Начать'"
        v-on:next-click="next"
        v-on:close-slider="closeSlider()"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide2-image.svg'"
        v-bind:title="'Добавь фотографию'"
        v-bind:description="'Нужна лишь одна фотография, ее будут видеть все остальные'"
        v-bind:button-label="'Дальше'"
        v-on:next-click="next"
        v-on:close-slider="closeSlider()"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide3-image.svg'"
        v-bind:title="'Ставьте лайки понравившимся людям'"
        v-bind:description="'Ставьте лайки людям, которые вам по душе и ждите от них взаимности'"
        v-bind:button-label="'Дальше'"
        v-on:next-click="next"
        v-on:close-slider="closeSlider()"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide4-image.svg'"
        v-bind:title="'Создавайте пары и общайтесь'"
        v-bind:description="'Получайте взаимные лайки и создавайте лимонные пары'"
        v-bind:button-label="'Понятно'"
        :needButtonArrow="false"
        v-on:close-slider="closeSlider()"
      ></SlideContent>
    </ion-slide>
  </ion-slides>
</template>

<script lang="ts">
import { IonSlides, IonSlide } from "@ionic/vue";
import { defineComponent } from "vue";
import aituBridge from "@btsd/aitu-bridge";
import SlideContent from "@/components/slider/cedra-slide-content.component.vue";

export default defineComponent({
  name: "Slider",

  props: {
    isSliderOpen: Boolean,
  },

  components: { SlideContent, IonSlides, IonSlide },

  methods: {
    next() {
      this.$el.slideNext();
    },

    closeSlider() {
      this.$emit("close-slider");
    },
  },

  async data() {
    try {
      const data = await aituBridge.getMe();
      return { data };
    } catch (e) {
      console.log(e);
    }
  },

  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    return { slideOpts };
  },
});
</script>

<style scoped>
.slides {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 5;
  transform: translateY(100vh);
  transition: 400ms ease-in-out;
}

.slider-open {
  transform: translateY(0);
  transition: 400ms ease-in-out;
}
</style>
