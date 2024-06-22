<template>
  <div class="calendar-view">
    <div class="calendar-view__controls">
      <div class="calendar-view__controls-inner">
        <button
          class="calendar-view__control-left"
          type="button"
          aria-label="Previous month"
          @click.stop="prevMonth"
        ></button>
        <div class="calendar-view__date">{{ currentDateFormatted }}</div>
        <button
          class="calendar-view__control-right"
          type="button"
          aria-label="Next month"
          @click.stop="nextMonth"
        ></button>
      </div>
    </div>

    <div class="calendar-view__grid">
      <div
        v-for="(day, idx) in calendarDays"
        :key="idx"
        class="calendar-view__cell"
        :class="{ 'calendar-view__cell_inactive': day.inactive }"
        tabindex="0"
      >
        <div class="calendar-view__cell-day">{{ day.dayNumber }}</div>
        <div class="calendar-view__cell-content">
          <slot :year="day.year" :month="day.month" :day="day.dayNumber" :dateIso="day.dateIso"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

type DaysType = {
  date: Date;
  dayNumber: number;
  dateIso: string;
  inactive: boolean;
  year: number;
  month: number;
};

export default defineComponent({
  name: 'MeetupsCalendar',

  data: () => ({
    currentDate: new Date(),
  }),

  computed: {
    currentDateFormatted() {
      return this.currentDate.toLocaleDateString(navigator.language, {
        month: 'long',
        year: 'numeric',
      });
    },

    calendarDays() {
      const days: DaysType[] = [];
      const currentYear = this.currentDate.getFullYear();
      const currentMonth = this.currentDate.getMonth();

      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

      const firstDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7;
      const lastDayOfWeek = (lastDayOfMonth.getDay() + 6) % 7;

      for (let i = firstDayOfWeek; i > 0; i--) {
        const date = new Date(currentYear, currentMonth, 1 - i);
        const dayNumber = date.getDate();
        const dateIso = this.getIsoDate(currentYear, currentMonth, dayNumber);
        const month = currentMonth - 1 >= 0 ? currentMonth - 1 : 11;

        days.push({
          dayNumber,
          date,
          inactive: true,
          year: currentYear,
          month,
          dateIso,
        });
      }

      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dayNumber = date.getDate();
        const dateIso = this.getIsoDate(currentYear, currentMonth + 1, dayNumber);
        days.push({
          dayNumber,
          date,
          inactive: false,
          year: currentYear,
          month: currentMonth,
          dateIso,
        });
      }

      for (let i = 1; i < 7 - lastDayOfWeek; i++) {
        const date = new Date(currentYear, currentMonth + 1, i);
        const dayNumber = date.getDate();
        const dateIso = this.getIsoDate(currentYear, currentMonth + 2, dayNumber);
        const month = currentMonth + 1 <= 11 ? currentMonth + 1 : 0;
        days.push({
          dayNumber,
          date,
          inactive: true,
          year: currentYear,
          month,
          dateIso,
        });
      }

      return days;
    },
  },

  methods: {
    formatDate(date: Date) {
      return date.toLocaleDateString(navigator.language, {
        month: 'long',
        year: 'numeric',
      });
    },

    prevMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    },

    nextMonth() {
      this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    },

    getIsoDate(year: number, month: number, day: number) {
      return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    },
  },
});
</script>

<style scoped>
.calendar-view {
}

.calendar-view__controls {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: var(--blue);
  background-color: var(--blue-extra);
  padding: 24px;
  display: flex;
  justify-content: center;
}

.calendar-view__controls-inner {
  max-width: 325px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
}

.calendar-view__controls-inner button {
  border: none;
  padding: 0;
}

.calendar-view__control-left,
.calendar-view__control-right {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all;
  background: url('@/assets/icons/icon-pill-active.svg') left center no-repeat;
  background-size: cover;
}

.calendar-view__control-left:hover,
.calendar-view__control-right:hover {
  opacity: 0.8;
}

.calendar-view__control-right {
  transform: rotate(180deg);
}

.calendar-view__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.calendar-view__grid {
  border: 1px solid var(--grey);
  border-bottom: none;
}

.calendar-view__cell {
  position: relative;
  height: auto;
  padding: 6px 8px;
  background-color: var(--white);
  color: var(--grey-8);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid var(--grey);
  border-left: 1px solid var(--grey);
  text-align: right;
}

.calendar-view__cell.calendar-view__cell_inactive {
  background-color: var(--grey-light);
}

@media all and (max-width: 767px) {
  .calendar-view__cell:nth-child(5n + 1) {
    border-left: none;
  }
}

@media all and (min-width: 767px) {
  .calendar-view__grid {
    grid-template-columns: repeat(7, 1fr);
  }

  .calendar-view__cell {
    height: 144px;
  }

  .calendar-view__cell:nth-child(7n + 1) {
    border-left: none;
  }
}
</style>
