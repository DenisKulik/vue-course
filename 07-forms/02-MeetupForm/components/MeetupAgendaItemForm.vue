<!-- STUB: ЭТО ЗАГЛУШКА ДЛЯ РУЧНОГО ТЕСТИРОВАНИЯ -->

<template>
  <fieldset class="agenda-item-form">
    <button type="button" class="agenda-item-form__remove-button" @click="$emit('remove')">
      <UiIcon icon="trash" />
    </button>

    <div class="agenda-item-form__row">
      <div class="agenda-item-form__col">
        <UiFormGroup label="Начало">
          <UiInput
            name="startsAt"
            type="time"
            placeholder="00:00"
            :model-value="agendaItem.startsAt"
            @change="
              $emit('update:agendaItem', {
                ...agendaItem,
                startsAt: $event.target.value,
              })
            "
          />
        </UiFormGroup>
      </div>
      <div class="agenda-item-form__col">
        <UiFormGroup label="Окончание">
          <UiInput
            name="endsAt"
            type="time"
            placeholder="00:00"
            :model-value="agendaItem.endsAt"
            @change="
              $emit('update:agendaItem', {
                ...agendaItem,
                endsAt: $event.target.value,
              })
            "
          />
        </UiFormGroup>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import UiFormGroup from './UiFormGroup.vue';
import UiIcon from './UiIcon.vue';
import UiInput from './UiInput.vue';

type AgendaItem = {
  startsAt: string;
  endsAt: string;
  title: string;
  description: string;
};

export default defineComponent({
  name: 'MeetupAgendaItemForm',

  components: { UiInput, UiIcon, UiFormGroup },

  props: {
    agendaItem: {
      type: Object as PropType<AgendaItem>,
      required: true,
    },
  },

  emits: ['update:agendaItem', 'remove'],
});
</script>

<style scoped>
.agenda-item-form {
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  position: relative;
  padding: 20px 10% 0 16px;
}

.agenda-item-form__remove-button {
  position: absolute;
  top: 4px;
  right: 0;
  box-shadow: none;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 4px;
  cursor: pointer;
  transition: 0.2s opacity;
}

.agenda-item-form__remove-button:hover {
  opacity: 0.6;
}

.agenda-item-form__row {
  display: flex;
  flex-direction: column;
}

.agenda-item-form__col + .agenda-item-form__col {
  margin-top: 16px;
}

.agenda-item-form__col:first-child {
  margin-left: 0;
}

@media all and (min-width: 992px) {
  .agenda-item-form {
    padding: 28px 25% 4px 24px;
  }

  .agenda-item-form__remove-button {
    top: 20px;
    right: 20px;
  }

  .agenda-item-form__row {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 -12px;
  }

  .agenda-item-form__col {
    flex: 1 1 auto;
    padding: 0 12px;
  }

  .agenda-item-form__col + .agenda-item-form__col {
    margin-top: 0;
  }

  .agenda-item-form__col:first-child {
    margin-left: 0;
  }
}
</style>
