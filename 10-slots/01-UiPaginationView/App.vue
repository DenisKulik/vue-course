<template>
  <div class="sample container">
    <div class="pagination-buttons">
      <UiButton v-for="i in pagesCount" :key="i" :variant="page === i ? 'primary' : 'secondary'" @click="page = i">
        {{ i }}
      </UiButton>
    </div>

    <UiPaginationView v-slot="{ item }" :items="meetups" :page="page" :per-page="perPage">
      <MeetupCard :meetup="item" class="list-item" />
    </UiPaginationView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiPaginationView from './components/UiPaginationView.vue';
import UiButton from './components/UiButton.vue';
import MeetupCard from './components/MeetupCard.vue';
import meetups from './meetups.json';

export default defineComponent({
  name: 'App',

  components: { MeetupCard, UiButton, UiPaginationView },

  data() {
    return {
      page: 1,
      perPage: 2,
      meetups,
    };
  },

  computed: {
    pagesCount() {
      return Math.ceil(this.meetups.length / this.perPage);
    },
  },
});
</script>

<style scoped>
.pagination-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.list-item {
  margin: 0 0 32px 0;
}
</style>
