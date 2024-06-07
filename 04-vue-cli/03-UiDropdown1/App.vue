<template>
  <div class="sample container">
    <h2>With icons</h2>
    <p>selectedType = {{ selectedType }}</p>
    <p><button @click="selectedType = 'registration'">Set registration</button></p>
    <p><button @click="updateOptions">Remove last option</button></p>
    <p>
      <UiDropdown v-model="selectedType" :options="agendaItemTypes" title="Событие" />
    </p>

    <h2>Without icons</h2>
    <p>selectedLang = {{ selectedLang }}</p>
    <p>
      <UiDropdown v-model="selectedLang" :options="langOptions" title="Язык" />
    </p>

    <h2>Mixed icons</h2>
    <UiDropdown v-model="selectedMixed" :options="mixedIconsOptions" title="Mixed icons" />
    <p></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiDropdown from './components/UiDropdown.vue';

const agendaIconMap = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
} as const;

type AgendaItemType = keyof typeof agendaIconMap;

type AgendaItem = {
  value: AgendaItemType;
  text: string;
  icon?: string;
};

const baseAgendaItemTypes: Omit<AgendaItem, 'icon'>[] = [
  {
    value: 'registration',
    text: 'Регистрация',
  },
  {
    value: 'opening',
    text: 'Открытие',
  },
  {
    value: 'break',
    text: 'Перерыв',
  },
  {
    value: 'coffee',
    text: 'Coffee Break',
  },
  {
    value: 'closing',
    text: 'Закрытие',
  },
  {
    value: 'afterparty',
    text: 'Afterparty',
  },
  {
    value: 'talk',
    text: 'Доклад',
  },
  {
    value: 'other',
    text: 'Другое',
  },
];

const agendaItemTypes: AgendaItem[] = baseAgendaItemTypes.map((item) => ({
  ...item,
  icon: agendaIconMap[item.value],
}));

export default defineComponent({
  name: 'App',
  components: { UiDropdown },
  data() {
    return {
      agendaItemTypes,

      langOptions: [
        { value: 'EN', text: 'EN' },
        { value: 'RU', text: 'RU' },
      ],

      mixedIconsOptions: [
        { value: 'with-icon', text: 'With icon', icon: 'tv' },
        { value: 'without-icon', text: 'Without icon' },
      ],

      selectedLang: 'EN',
      selectedType: undefined as AgendaItemType | undefined,
      selectedMixed: undefined,
    };
  },

  methods: {
    updateOptions() {
      this.agendaItemTypes.pop();
    },
  },
});
</script>

<style></style>
