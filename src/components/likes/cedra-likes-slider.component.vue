<template>
  <ion-slides :options="slideOpts">
    <ion-slide class="slide liked-users">
      <cedra-liked-user
        v-for="user in likedByUser"
        :key="user.id"
        :avatar="
          user.avatar ||
          `/assets/images/avatars/avatar-${getRandomAvatarNumber()}.png`
        "
        :firstName="user.firstName"
        :age="getUserAge(user.birthday)"
      />
      <div v-if="likedByUser.length == 0" class="empty">
        <img
          src="/assets/images/empty.svg"
          alt="Ты ещё некого не лайкнул"
          class="empty-image"
        />
        <h1 class="empty-title">Вы ещё никого не лайкнули</h1>
        <p class="empty-description">
          Ставьте сердечки понравившимся вам людям и они будут отображаться
          здесь
        </p>
      </div>
    </ion-slide>
    <ion-slide class="slide liked-users">
      <cedra-liked-user
        v-for="user in likedToUser"
        :key="user.id"
        :avatar="
          user.avatar ||
          `/assets/images/avatars/avatar-${getRandomAvatarNumber()}.png`
        "
        :firstName="user.firstName"
        :age="getUserAge(user.birthday)"
      />
      <div v-if="likedToUser.length == 0" class="empty">
        <img
          src="/assets/images/empty.svg"
          alt="Ты ещё некого не лайкнул"
          class="empty-image"
        />
        <h1 class="empty-title">Вас ещё никто не лайкнул</h1>
        <p class="empty-description">
          Когда вас лайкнут вы сможете увидеть это здесь
        </p>
      </div>
    </ion-slide>
    <ion-slide class="slide">
      <div class="empty">
        <img
          src="/assets/images/soon.svg"
          alt="Ты ещё некого не лайкнул"
          class="empty-image"
        />
        <h1 class="empty-title">Ждёте эту страницу?</h1>
        <p class="empty-description">
          Мы выпустим её через пару мгновений, а пока вы можете познакомиться с
          новыми людьми в ленте
        </p>
      </div>
    </ion-slide>
  </ion-slides>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonSlide, IonSlides, toastController } from "@ionic/vue";
import CedraLikedUser from "@/components/likes/cedra-liked-user.component.vue";
import { getLikedByUserUsers, getLikedToUserUsers } from "@/requests/likes";
import { mapGetters, mapMutations } from "vuex";

export default defineComponent({
  props: {
    activeSlide: {
      type: Number,
      required: true,
    },
  },
  components: {
    IonSlides,
    IonSlide,
    CedraLikedUser,
  },
  computed: mapGetters(["user", "likedByUser", "likedToUser"]),
  watch: {
    activeSlide() {
      if (this.activeSlide == 1) {
        this.$el.lockSwipes(false);
        this.$el.slideTo(-1);
        this.$el.lockSwipes(true);
      } else if (this.activeSlide == 2) {
        this.$el.lockSwipes(false);
        this.$el.slideTo(1);
        this.$el.lockSwipes(true);
      }
    },
  },
  mounted() {
    this.$el.slideTo(-1);
    this.$el.lockSwipes(true);
    getLikedByUserUsers(this.user.phoneNumber)
      .then((content) => {
        this.setLikedByUser(content.users);
      })
      .catch(this.openErrorToast);

    getLikedToUserUsers(this.user.phoneNumber)
      .then((content) => {
        this.setLikedToUser(content.users);
      })
      .catch(this.openErrorToast);
  },
  methods: {
    ...mapMutations(["setLikedByUser", "setLikedToUser"]),
    getUserAge(birthday: string) {
      const birthdayDate = new Date(Date.parse(birthday));
      const currentDate = new Date(Date.now());
      return currentDate.getFullYear() - birthdayDate.getFullYear();
    },

    getRandomAvatarNumber() {
      return Math.floor(Math.random() * 5) + 1;
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
  },
  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };
    return { slideOpts };
  },
});
</script>

<style scoped>
.slide {
  padding: 10% 0;
  height: 80vh;
  overflow: scroll;
}

.liked-users {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.empty {
  margin: auto;
  margin-top: 50px;
  width: 80%;
  text-align: center;
}

.empty-image {
  margin-bottom: 30px;
  height: 240px;
}

.empty-title {
  margin: 0;
  margin-bottom: 16px;
  font-size: 26px;
  font-weight: 500;
}

.empty-description {
  font-size: 16px;
  line-height: 1.4;
  opacity: 0.7;
}
</style>