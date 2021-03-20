<template>
  <ion-slides ref="slider" class="slides" pager="true" :options="slideOpts">
    <ion-slide>
      <SlideContent
        :img="'/assets/slide1-image.svg'"
        v-bind:title="`Привет, ${userName || 'друг'}. Мы рады, что ты с нами`"
        v-bind:description="'Мы в Цедре хотим помочь тебе тебе найти человека с которым можно выпить стакан лимонада'"
        v-bind:button-label="'Начать'"
        v-on:next-click="next()"
        v-on:close-slider="closeSlider()"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:button-label="'Дальше'"
        v-on:next-click="next()"
        v-on:close-slider="closeSlider()"
      >
        <div class="choices">
          <h1 class="choices-title">Расскажи о себе</h1>
          <choice
            question="Какой твой пол?"
            :variants="genderArray"
            @radio-change="handleGendersChoice"
          />
          <choice
            question="Твои предпочтения"
            :variants="preferencesArray"
            @checkbox-change="handlePreferencesChoice"
            type="checkbox"
          />
          <choice
            question="Какая у тебя ориентация?"
            :variants="orientationArray"
            @radio-change="handleGendersChoice"
          />
        </div>
      </SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide3-image.svg'"
        v-bind:title="'Ставь лайки понравившимся людям'"
        v-bind:description="'Ставьте лайки людям, которые вам по душе и ждите от них взаимности'"
        v-bind:button-label="'Дальше'"
        v-on:next-click="next()"
        v-on:close-slider="closeSlider()"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide4-image.svg'"
        v-bind:title="'Создавай пары и общайся'"
        v-bind:description="'Получайте взаимные лайки и создавайте лимонные пары'"
        v-bind:button-label="'Понятно'"
        :nextSlideLink="false"
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
import choice from "@/components/slider/cedra-choice.component.vue";

export default defineComponent({
  name: "Slider",

  props: {
    isSliderOpen: Boolean,
  },

  components: { SlideContent, IonSlides, IonSlide, choice },

  data() {
    return {
      userName: "",
      genderArray: [
        {
          name: "Мужской",
        },
        {
          name: "Женский",
        },
        {
          name: "Не определился",
        },
      ],

      preferencesArray: [
        {
          name: "Мужчины",
        },
        {
          name: "Женщины",
        },
        {
          name: "Другое",
        },
      ],

      orientationArray: [
        {
          name: "Гетеросекусал",
        },
        {
          name: "Гомосексуал",
        },
        {
          name: "Бисексуал",
        },
        {
          name: "Не определился",
        },
      ],
    };
  },

  async mounted() {
    await this.getUser();
  },

  methods: {
    next() {
      this.$el.slideNext();
    },

    closeSlider() {
      this.$emit("close-slider");
    },

    async getUser() {
      const res = await aituBridge.getMe();
      this.userName = res.name;
    },

    handleGendersChoice(event: any) {
      console.log(event);
    },

    handlePreferencesChoice(event: any) {
      event.forEach((element: any) => {
        console.log(element);
      });
    },
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
  height: 100vh;
  width: 100%;
  z-index: 5;
}

.choices {
  padding: 0 50px;
  width: 100vw;
  box-sizing: border-box;
  text-align: start;
}

.choices-title {
  margin: 0;
  margin-bottom: 60px;
  color: #3c3c3c;
  font-size: 26px;
  font-weight: bold;
}
</style>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
