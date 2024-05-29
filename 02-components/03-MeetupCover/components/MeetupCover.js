import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },

  computed: {
    backgroundImage() {
      return this.image ? `url(${this.image})` : '';
    },
  },

  template: `
    <div class="meetup-cover" :style="{ '--bg-url': backgroundImage }">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
