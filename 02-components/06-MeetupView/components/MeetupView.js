import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from "../../02-MeetupDescription/components/MeetupDescription";
import MeetupCover from "../../03-MeetupCover/components/MeetupCover";
import MeetupAgenda from "../../05-MeetupAgenda/components/MeetupAgenda";
import MeetupInfo from "../../04-MeetupInfo/components/MeetupInfo";

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupInfo,
    MeetupAgenda,
    MeetupCover,
    MeetupDescription,
    UiAlert,
    UiContainer,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image"/>
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description"/>
            <h3>Программа</h3>
            <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda"/>
            <UiAlert v-else>Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :date="meetup.date" :place="meetup.place" :organizer="meetup.organizer"/>
          </div>
        </div>
      </UiContainer>
    </div>`,
});
