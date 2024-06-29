<template>
  <div v-if="!sensors">Loading...</div>
  <template v-else>
    <SensorsDataRow v-for="sensor in sensors" :key="sensor.id" :sensor="sensor" />
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { SensorsDataController } from '../services/SensorsDataController';
import { SensorsDataStreamingService } from '../services/SensorsDataStreamingService';
import SensorsDataRow from './SensorsDataRow';

type SensorType = {
  id: number,
  label: string,
  value: number,
  unit: string
}

export default defineComponent({
  name: 'SensorsDataView',

  components: { SensorsDataRow },

  data() {
    return {
      sensors: null as null | { [key: number]: SensorType },
      sensorsDataController: null as null | SensorsDataController,
    };
  },

  mounted() {
    this.sensorsDataController = new SensorsDataController(new SensorsDataStreamingService());
    this.sensorsDataController.addDataCallback(this.callback);

    // Раз в секунду запрашиваем и выводим новые данные сенсоров
    setInterval(() => {
      const data = this.sensorsDataController?.getData();
    }, 1000);
  },

  beforeUnmount() {
    this.sensorsDataController?.removeDataCallback(this.callback);
    this.sensorsDataController?.close();
  },

  methods: {
    callback(data: { [key: number]: SensorType }) {
      this.setData(data);
    },

    setData(sensors: { [key: number]: SensorType }) {
      this.sensors = {};

      for (const sensorId in sensors) {
        this.sensors[sensorId] = { ...sensors[sensorId] };
      }
    },
  },
});
</script>

<style scoped></style>
