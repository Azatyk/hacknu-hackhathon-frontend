<template>
  <div class="feed-page">
    <cedra-nav />
    <cedra-feed-card
      v-for="user in currentUsers.slice().reverse()"
      :key="user.id"
      :id="user.id"
      class="feed-card-component"
      :imagePath="user.avatar"
      :name="user.firstName"
      :birthday="getUserAge(user.birthday)"
    />
    <transition name="fade">
      <div v-if="currentUsers.length == 0" class="empty">
        <img
          src="/assets/images/empty.svg"
          alt="Больше никого нету"
          class="empty-image"
        />
        <h1 class="empty-title">Нам больше не с кем тебя знакомить</h1>
        <p class="empty-description">
          Ты уже просмотрел(а) всех подходящих людей, но как только появятся
          новые — мы тебе обязательно сообщим
        </p>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="currentUsers.length != 0" class="feed-buttons">
        <cedra-feed-button type="dislike" @click="handleDislikeButton" />
        <cedra-feed-button type="like" @click="handleLikeButton" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CedraNav from "@/components/common/cedra-nav.component.vue";
import CedraFeedCard from "@/components/feed/cedra-feed-card.component.vue";
import CedraFeedButton from "@/components/feed/cedra-feed-button.component.vue";
import users from "@/data/feed";

interface User {
  id: number;
  firstName: string;
  avatar: string;
}

export default defineComponent({
  components: {
    CedraNav,
    CedraFeedCard,
    CedraFeedButton,
  },
  data: () => ({
    users,
    currentUsers: new Array<User>(),
    lastCurrentUserIndex: 0,
    activeUserId: 0,
  }),
  mounted() {
    for (let i = 0; i < 5; i++) {
      this.currentUsers.push(this.users[this.lastCurrentUserIndex]);
      this.lastCurrentUserIndex++;
      this.activeUserId = this.currentUsers[0].id;
    }
  },

  methods: {
    handleDislikeButton() {
      console.log("dislike button clicked");
      const activeUserCard = document.getElementById(
        String(this.currentUsers[0].id)
      );
      activeUserCard?.classList.add("feed-card-disliked");
      setTimeout(() => {
        this.currentUsers.shift();
        if (this.users[this.lastCurrentUserIndex]) {
          this.currentUsers.push(this.users[this.lastCurrentUserIndex]);
          this.lastCurrentUserIndex++;
        }
      }, 500);
    },
    handleLikeButton() {
      console.log("like request");
      const activeUserCard = document.getElementById(
        String(this.currentUsers[0].id)
      );
      activeUserCard?.classList.add("feed-card-liked");
      setTimeout(() => {
        this.currentUsers.shift();
        if (this.users[this.lastCurrentUserIndex]) {
          this.currentUsers.push(this.users[this.lastCurrentUserIndex]);
          this.lastCurrentUserIndex++;
        }
      }, 500);
    },

    getUserAge(birthday: string) {
      const birthdayDate = new Date(Date.parse(birthday));
      const currentDate = new Date(Date.now());
      return currentDate.getFullYear() - birthdayDate.getFullYear();
    },
  },
});
</script>

<style scoped>
.feed-card-component {
  position: absolute;
  left: 0;
  right: 0;
  transition: 0.5s ease-out;
}

.feed-card-liked {
  transform: translateX(100vw);
}

.feed-card-disliked {
  transform: translateX(-100vw);
}

.empty {
  margin: auto;
  margin-top: 50px;
  width: 80%;
  height: 70vh;
  text-align: center;
}

.empty-image {
  margin-bottom: 30px;
  height: 240px;
}

.empty-title {
  margin: 0;
  margin-bottom: 16px;
  color: #3c3c3c;
  font-size: 26px;
  font-weight: 500;
}

.empty-description {
  color: #3c3c3c;
  font-size: 16px;
  line-height: 1.4;
  opacity: 0.7;
}

.feed-buttons {
  position: absolute;
  top: 87vh;
  left: 0;
  right: 0;
  margin: auto;
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>