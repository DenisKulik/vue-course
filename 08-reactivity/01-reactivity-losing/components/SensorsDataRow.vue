<template>
  <div class="sensor-data">
    <div>#{{ sensor.id }}</div>
    <div>
      <span class="sensor-data__label">{{ sensor.label }}: </span>
      <span class="sensor-data__value">{{ sensor.value.toFixed(1) }}</span>
      <span class="sensor-data__unit">{{ sensor.unit }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

type SensorType = {
  id: number,
  label: string,
  value: number,
  unit: string
}

export default defineComponent({
  name: 'SensorsDataRow',

  props: {
    sensor: Object as PropType<SensorType>,
  },
});
</script>

<style>
.sensor-data {
  display: flex;
  gap: 1rem;
  font-family: monospace;
  font-size: 16px;
}

.sensor-data__label {
}

.sensor-data__value {
  font-weight: bold;
}

.sensor-data__unit {
  color: #999999;
}
</style>
