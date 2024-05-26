import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',
  data: () => ({
    operator: null,
    firstValue: 0,
    secondValue: 0,
  }),
  computed: {
    result() {
      if (this.operator === 'sum') {
        return this.firstValue + this.secondValue;
      }
      if (this.operator === 'subtract') {
        return this.firstValue - this.secondValue;
      }
      if (this.operator === 'multiply') {
        return this.firstValue * this.secondValue;
      }
      if (this.operator === 'divide') {
        return this.firstValue / this.secondValue;
      }
      return 0;
    },
  },
});

const app = createApp(App);
app.mount('#app');
