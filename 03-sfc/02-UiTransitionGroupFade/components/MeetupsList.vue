<template>
  <UiTransitionGroupFade class="meetups-list">
    <li v-for="meetup in meetups" :key="meetup.id" class="meetups-list__item">
      <a :href="`/meetups/${meetup.id}`" class="meetups-list__item-link" tabindex="0">
        <MeetupCard :meetup="meetup" />
      </a>
    </li>
  </UiTransitionGroupFade>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import MeetupCard from './MeetupCard.vue';
import UiTransitionGroupFade from './UiTransitionGroupFade.vue';

type Meetup = {
  id: number;
  title: string;
  image: string | undefined;
  description?: string;
  organizer: string;
  agenda?: any[];
  [key: string]: any;
};

export default defineComponent({
  name: 'MeetupsList',

  components: {
    UiTransitionGroupFade,
    MeetupCard,
  },

  props: {
    meetups: {
      type: Array as PropType<Meetup[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.meetups-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.meetups-list__item {
  margin: 0 0 32px 0;
  text-decoration: none;
}

.meetups-list__item-link {
  text-decoration: none;
  color: inherit;
}
</style>
