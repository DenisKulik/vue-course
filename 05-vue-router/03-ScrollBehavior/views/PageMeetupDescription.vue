<template>
  <div>{{ meetup.description }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageMeetupDescription',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style></style>
