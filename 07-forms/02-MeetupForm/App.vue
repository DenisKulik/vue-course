<template>
  <div class="wrapper bg-grey page">
    <div class="container">
      <p>
        <button @click="fill">Показать заполненную</button>
      </p>
      <MeetupForm
        :key="meetup.id"
        :meetup="meetup"
        submit-text="Сохранить"
        @submit="handleSubmit"
        @cancel="handleCancel"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MeetupForm from './components/MeetupForm.vue';
import { createAgendaItem, createMeetup } from './meetupService.js';

type AgendaItemType = {
  id: number;
  startsAt: string;
  endsAt: string;
  type: string;
  title: string;
  description: string;
  speaker: string;
  language: string;
};

type MeetupType = {
  id: number;
  title: string;
  date: number;
  place: string;
  description: string;
  image: string | null;
  imageToUpload?: File | null;
  agenda: AgendaItemType[];
};

export default defineComponent({
  name: 'App',

  components: { MeetupForm },

  data() {
    return {
      meetup: createMeetup(),
      filled: false,
    };
  },

  methods: {
    handleSubmit(meetup: MeetupType): void {
      this.meetup = meetup;
      alert(JSON.stringify(this.meetup, null, 2));
    },

    handleCancel(): void {
      this.meetup = createMeetup();
      alert('Cancel');
    },

    fill(): void {
      this.filled = true;
      this.meetup = {
        id: 42,
        title: 'Demo Title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, beatae corporis dignissimos esse, facere, fugiat laudantium maxime minus nam natus odit optio perferendis quae quisquam quos soluta veritatis voluptate?',

        image: 'https://course-vue.javascript.ru/api/images/2',
        date: Date.UTC(2022, 4 - 1, 4),
        place: 'Meetup Place',
        agenda: [createAgendaItem(), createAgendaItem()],
      };
    },
  },
});
</script>

<style>
@import '@/assets/styles/_container.css';
</style>
