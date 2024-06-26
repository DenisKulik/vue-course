<template>
  <form class="meetup-form" @submit.prevent="onSubmit">
    <div class="meetup-form__content">
      <fieldset class="meetup-form__section">
        <UiFormGroup label="Название">
          <UiInput v-model="localMeetup.title" name="title" />
        </UiFormGroup>
        <UiFormGroup label="Дата">
          <UiInputDate v-model="localMeetup.date" type="date" name="date" />
        </UiFormGroup>
        <UiFormGroup label="Место">
          <UiInput v-model="localMeetup.place" name="place" />
        </UiFormGroup>
        <UiFormGroup label="Описание">
          <UiInput v-model="localMeetup.description" multiline rows="3" name="description" />
        </UiFormGroup>
        <UiFormGroup label="Изображение">
          <!--
               Предлагается сохранять файл для будущей загрузки во временное поле imageToUpload
               и передавать в объекте со всеми данными формы
          -->
          <ui-image-uploader
            name="image"
            :preview="localMeetup.image || ''"
            @select="onSelectImage"
            @remove="onRemoveImage"
          />
        </UiFormGroup>
      </fieldset>

      <h3 class="meetup-form__agenda-title">Программа</h3>

      <meetup-agenda-item-form
        v-for="(agendaItem, index) in localMeetup.agenda"
        :key="agendaItem.id"
        :agenda-item="agendaItem"
        class="meetup-form__agenda-item"
        @update:agendaItem="updateAgendaItem(index, $event)"
        @remove="onRemoveAgendaItem(index)"
      />

      <div class="meetup-form__append">
        <button
          class="meetup-form__append-button"
          type="button"
          data-test="addAgendaItem"
          @click.stop="onAddAgendaItem"
        >
          + Добавить этап программы
        </button>
      </div>
    </div>

    <div class="meetup-form__aside">
      <div class="meetup-form__aside-stick">
        <!-- data-test атрибуты используются для поиска нужного элемента в тестах, не удаляйте их -->
        <ui-button
          variant="secondary"
          block
          class="meetup-form__aside-button"
          data-test="cancel"
          @click.stop="$emit('cancel')"
          >Отмена</ui-button
        >
        <ui-button variant="primary" block class="meetup-form__aside-button" data-test="submit" type="submit">
          {{ submitText }}
        </ui-button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MeetupAgendaItemForm from './MeetupAgendaItemForm.vue';
import UiButton from './UiButton.vue';
import UiFormGroup from './UiFormGroup.vue';
import UiImageUploader from './UiImageUploader.vue';
import UiInput from './UiInput.vue';
import UiInputDate from './UiInputDate.vue';
import { createAgendaItem } from '../meetupService.js';

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
  name: 'MeetupForm',

  components: {
    MeetupAgendaItemForm,
    UiButton,
    UiFormGroup,
    UiImageUploader,
    UiInput,
    UiInputDate,
  },

  props: {
    meetup: {
      type: Object as () => MeetupType,
      required: true,
    },

    submitText: {
      type: String,
      default: '',
    },
  },

  emits: ['submit', 'cancel'],

  data: () => ({
    localMeetup: {} as MeetupType,
  }),

  mounted() {
    this.localMeetup = this.cloneObject(this.meetup) as MeetupType;
  },

  methods: {
    onSubmit(): void {
      this.$emit('submit', this.cloneObject(this.localMeetup) as MeetupType);
    },

    onAddAgendaItem(): void {
      const agendaItem = createAgendaItem();
      if (this.localMeetup.agenda.length) {
        agendaItem.startsAt = this.localMeetup.agenda[this.localMeetup.agenda.length - 1].endsAt;
      }

      this.localMeetup.agenda.push(agendaItem);
    },

    updateAgendaItem(index: number, newAgendaItem: AgendaItemType): void {
      this.localMeetup.agenda[index] = newAgendaItem;
    },

    onRemoveAgendaItem(index: number): void {
      this.localMeetup.agenda.splice(index, 1);
    },

    onSelectImage(image: File | null): void {
      this.localMeetup.imageToUpload = image;
    },

    onRemoveImage(): void {
      this.localMeetup.imageToUpload = null;
    },

    cloneObject(object: any): object {
      return JSON.parse(JSON.stringify(object));
    },
  },
});
</script>

<style scoped>
.meetup-form__section {
  border: none;
}

.meetup-form__agenda-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: var(--body-color);
  margin: 0 0 24px 0;
}

.meetup-form__aside {
  margin: 48px 0;
}

.meetup-form__aside-button {
  margin: 0 0 12px 0;
}

.meetup-form__agenda-item + .meetup-form__agenda-item {
  margin-top: 24px;
}

.meetup-form__append {
  margin-top: 24px;
}

.meetup-form__append-button {
  box-shadow: none;
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  color: var(--blue);
  cursor: pointer;
  font-size: 20px;
  line-height: 28px;
}

.meetup-form__append-button:hover {
  text-decoration: underline;
}

@media all and (min-width: 992px) {
  .meetup-form {
    display: flex;
    flex-direction: row;
  }

  .meetup-form__content {
    flex: 1 0 calc(100% - 320px);
  }

  .meetup-form__aside {
    flex: 1 0 320px;
    max-width: 320px;
    width: 100%;
    padding-left: 137px;
    margin: 0;
  }

  .meetup-form__aside-stick {
    position: sticky;
    top: 32px;
  }
}
</style>
