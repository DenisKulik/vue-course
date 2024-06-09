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

export default defineComponent({
  name: 'PageMeetupAgenda',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style></style>
