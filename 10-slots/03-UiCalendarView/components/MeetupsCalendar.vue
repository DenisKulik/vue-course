<template>
  <UiCalendarView v-slot="{ dateIso }">
    <UiCalendarEvent
      v-for="meetup in meetupsByDates[dateIso]"
      :key="meetup.id"
      tag="a"
      :href="`/meetups/${meetups.id}`"
    >
      {{ meetup.title }}
    </UiCalendarEvent>
  </UiCalendarView>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from './UiCalendarEvent.vue';

type MeetupsType = {
  id: number;
  date: number;
  title: string;
  __dateForDebug: string;
};

export default defineComponent({
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  props: {
    meetups: {
      type: Array as PropType<MeetupsType[]>,
      required: true,
    },
  },

  computed: {
    meetupsByDates() {
      const meetupsByDates = {};
      this.meetups.forEach((meetup) => {
        const date = new Date(meetup.date);

        const dateKey = this.getIsoDate(date.getFullYear(), date.getMonth(), date.getDate());
        if (!meetupsByDates[dateKey]) meetupsByDates[dateKey] = [];
        meetupsByDates[dateKey].push(meetup);
      });

      return meetupsByDates;
    },
  },

  methods: {
    getIsoDate(year: number, month: number, day: number) {
      return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    },
  },
});
</script>

<style scoped></style>
