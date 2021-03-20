<template>
  <ion-slides class="slider" :options="sliderOptions">
    <ion-slide>
      <cedra-welcome-slide @next="navigateToNextSlide" />
    </ion-slide>
    <ion-slide>
      <cedra-age-slide
        @birthday-change="handleBirthdayChange"
        @next="navigateToNextSlide"
      />
    </ion-slide>
    <ion-slide>
      <cedra-gender-slide
        :genders="genders"
        @gender-change="handleGenderChange"
        @next="navigateToNextSlide"
      />
    </ion-slide>
    <ion-slide>
      <cedra-orientation-slide
        :orientations="orientations"
        @orientation-change="handleOrientationChange"
        @next="navigateToNextSlide"
      />
    </ion-slide>
    <ion-slide>
      <cedra-description-slide
        @description-change="handleDescriptionChange"
        @next="createAndEnterUser"
      />
    </ion-slide>
  </ion-slides>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapGetters } from "vuex";
import {
  IonSlides,
  IonSlide,
  loadingController,
  toastController,
} from "@ionic/vue";
import aituBridge from "@btsd/aitu-bridge";
import { createUserRequest } from "@/requests/users";
import { fetchOptionsRequest } from "@/requests/options";
import { CreateUserDto } from "@/dto/create-user.dto";
import CedraWelcomeSlide from "@/components/slider/cedra-welcome-slide.component.vue";
import CedraAgeSlide from "@/components/slider/cedra-age-slide.component.vue";
import CedraGenderSlide from "@/components/slider/cedra-gender-slide.component.vue";
import CedraOrientationSlide from "@/components/slider/cedra-orientation-slide.component.vue";
import CedraDescriptionSlide from "@/components/slider/cedra-description-slide.component.vue";

export default defineComponent({
  components: {
    IonSlides,
    IonSlide,
    "cedra-welcome-slide": CedraWelcomeSlide,
    "cedra-age-slide": CedraAgeSlide,
    "cedra-gender-slide": CedraGenderSlide,
    "cedra-orientation-slide": CedraOrientationSlide,
    "cedra-description-slide": CedraDescriptionSlide,
  },
  data: () => ({
    user: {
      phoneNumber: "",
      firstName: "",
      lastName: "",
      birthday: "",
      description: "",
      avatar: "",
      avatarPreview: "",
      genderId: 0,
      orientationId: 0,
    },
  }),
  computed: mapGetters(["genders", "orientations"]),
  methods: {
    navigateToNextSlide() {
      this.lockSlider(false);
      this.$el.slideNext();
      this.lockSlider(true);
    },
    lockSlider(lock: boolean) {
      this.$el.lockSwipes(lock);
    },
    async loadUser() {
      const res = await aituBridge.getMe();
      this.user.firstName = res.name;
      this.user.lastName = res.lastname;
    },
    async loadPhoneNumber() {
      const res = await aituBridge.getPhone();
      this.user.phoneNumber = res.phone;
    },
    handleBirthdayChange(birthday: string) {
      this.user.birthday = birthday;
    },
    handleGenderChange(genderId: number) {
      this.user.genderId = genderId;
    },
    handleOrientationChange(orientationId: number) {
      this.user.orientationId = orientationId;
    },
    handleDescriptionChange(description: string) {
      this.user.description = description;
    },
    async createAndEnterUser() {
      const loading = await this.createLoading();
      await loading.present();
      const user: CreateUserDto = this.user;
      createUserRequest(user)
        .then(() => this.$router.push({ name: "feed" }))
        .catch(this.openErrorToast)
        .finally(() => loading.dismiss());
    },
    createLoading() {
      return loadingController.create({
        message: "Почти закончили...",
      });
    },
    loadOptions() {
      fetchOptionsRequest()
        .then((content) => {
          const { genders, orientations } = content;
          this.setGenders(genders);
          this.setOrientations(orientations);
        })
        .catch(this.openErrorToast);
    },
    async openErrorToast() {
      const toast = await toastController.create({
        message: "Ошибка при загрузке данных",
        position: "top",
        color: "danger",
        duration: 1000,
      });
      return toast.present();
    },
    ...mapMutations(["setGenders", "setOrientations"]),
  },
  setup() {
    const sliderOptions = {
      initialSlide: 0,
      speed: 400,
    };
    return { sliderOptions };
  },
  beforeMount() {
    if (aituBridge.isSupported()) {
      this.loadUser();
      this.loadPhoneNumber();
    }
    this.loadOptions();
  },
  mounted() {
    this.lockSlider(true);
  },
});
</script>

<style scoped>
.slider {
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
}
</style>