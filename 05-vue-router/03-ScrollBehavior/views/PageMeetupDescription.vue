<template>
  <div>{{ meetup.description }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

type AgendaItem = {
  id: number;
  startsAt: string;
  endsAt: string;
  title: string;
  description: string;
};

type Meetup = {
  id: number;
  title: string;
  image: string | null;
  description?: string;
  agenda: AgendaItem[];
  [key: string]: any;
};

export default defineComponent({
  name: 'PageMeetupDescription',

  props: {
    meetup: {
      type: Object as PropType<Meetup>,
      required: true,
    },
  },
});
</script>

<style></style>
