<template>
  <div class="meetups-calendar">Календарь</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

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
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array as PropType<Meetup[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
