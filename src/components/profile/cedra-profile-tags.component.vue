<template>
  <div class="tags">
    
  <ion-badge :key="index" v-for="(tag, index) in tags" class="tags__item" color="primary">{{tag.tag}}</ion-badge>
  </div>
</template>

<script>
import { IonBadge } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonBadge },
  data: ()=> ({
    tags: [
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
      {
        id: 0,
        tag: "Замужем"
      },
      {
        id: 0,
        tag: "Свободные отношения"
      },
      {
        id: 0,
        tag: "milf"
      },
    ]
  })
});
</script>

<style scoped>
.tags {
  padding: 0 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tags__item {
  padding: 4px 8px;
  margin: 3px 6px;
}
</style>