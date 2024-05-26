import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const App = defineComponent({
  name: 'App',
  data: () => ({
    currentMeetupId: 1,
    meetupTitle: null,
  }),
  async mounted() {
    this.fetchMeetupById(this.currentMeetupId);
  },
  methods: {
    async fetchMeetupById(meetupId) {
      try {
        const response = await fetch(`${API_URL}/meetups/${meetupId}`);
        const data = await response.json();
        this.meetupTitle = data.title;
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    async currentMeetupId(newValue) {
      this.fetchMeetupById(newValue);
    },
  },
});

const app = createApp(App);
app.mount('#app');
