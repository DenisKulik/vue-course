import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from "../../06-MeetupView/components/MeetupView";

export default defineComponent({
  name: 'PageMeetup',

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data: () => ({
    meetup:null,
    isLoading: true,
    isError: false,
    errorMessage: ''
  }),

  created() {
    this.getMeetup(this.meetupId);
  },

  methods : {
    async getMeetup(meetupId) {
      try {
        this.isLoading = true;
        this.isError = false;
        this.meetup = await fetchMeetupById(meetupId);
      } catch(e) {
        this.isError = true;
        this.errorMessage = e.message;
      } finally {
        this.isLoading = false;
      }
    }
  },

  watch: {
    meetupId(newValue) {
      this.getMeetup(newValue);
    }
  },

  template: `
    <div class="page-meetup">
      <MeetupView v-if="!isLoading && !isError" :meetup="meetup"/>

      <UiContainer v-if="isLoading">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="isError">
        <UiAlert>{{errorMessage}}</UiAlert>
      </UiContainer>
    </div>`,
});
