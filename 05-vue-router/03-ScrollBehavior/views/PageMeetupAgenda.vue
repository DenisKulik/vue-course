<template>
  <ul>
    <li v-for="agendaItem in meetup.agenda" :key="agendaItem.key">
      <p>{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</p>
      <p>{{ agendaItem.title }}</p>
      <p>{{ agendaItem.description }}</p>
      <hr />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

type AgendaItem = {
  id: number;
  key: string;
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
  name: 'PageMeetupAgenda',

  props: {
    meetup: {
      type: Object as PropType<Meetup>,
      required: true,
    },
  },
});
</script>

<style></style>
