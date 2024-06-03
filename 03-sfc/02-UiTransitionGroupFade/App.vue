<template>
  <PageMeetups />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageMeetups from './components/PageMeetups.vue';

export default defineComponent({
  name: 'App',

  components: {
    PageMeetups,
  },
});
</script>

<style>
@import '@/assets/styles/_fonts.css';
@import '@/assets/styles/_variables.css';
@import '@/assets/styles/_common.css';
</style>
