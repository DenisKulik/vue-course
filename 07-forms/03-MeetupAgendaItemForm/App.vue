<template>
  <div class="sample wrapper bg-grey page">
    <div class="container">
      <pre><code>{{ agendaItem }}</code></pre>
      <MeetupAgendaItemForm v-model:agenda-item="agendaItem" @remove="handleRemove"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MeetupAgendaItemForm from './components/MeetupAgendaItemForm.vue';

type AgendaItemType = {
  id: number;
  startsAt: string;
  endsAt: string;
  type: string;
  title: string | null;
  description: string | null;
  speaker: string | null;
  language: string | null;
};

export default defineComponent({
  name: 'App',

  components: {MeetupAgendaItemForm},

  data() {
    return {
      agendaItem: {
        id: 0,
        startsAt: '00:00',
        endsAt: '00:00',
        type: 'other',
        title: null,
        description: null,
        speaker: null,
        language: null,
      } as AgendaItemType,
    };
  },

  methods: {
    handleRemove() {
      alert('removed');
    },
  },
});
</script>

<style>
@import '@/assets/styles/_layout.css';
@import '@/assets/styles/_container.css';
</style>
