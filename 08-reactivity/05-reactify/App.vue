<template>
  <div class="sample container">
    <p>foo = <input v-model="foo.value" type="number" /></p>
    <p>bar = {{ bar }}</p>
    <p>sqr(foo) = {{ computedSqrFoo.value }}</p>
    <p>sum(foo, bar) = {{ computedSumFooBar.value }}</p>
    <p>minutesToHHMM(foo) = {{ computedMinutesToHHMMFoo.value }}</p>
    <p>minutesToHHMM(sqr(foo)) = {{ computedMinutesToHHMMSqrFoo.value }}</p>
    <p></p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { reactify } from './utils/reactify';

export default defineComponent({
  name: 'App',

  created() {
    const sum = (a: number, b: number) => a + b; // (a, b) => a + b;
    const sqr = (num: number) => num ** 2;
    const minutesToHHMM = (minutes: number) =>
      `${Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}`;

    // Реактивные версии исходных функций
    const reactiveSqr = reactify(sqr);
    const reactiveSum = reactify(sum);
    const reactiveMinutesToHHMM = reactify(minutesToHHMM);

    // Значения для тестрования
    this.foo = ref(0);
    this.bar = 10;

    // Вычисляемые свойства в результате использования реактивных функций
    this.computedSqrFoo = reactiveSqr(this.foo);
    this.computedSumFooBar = reactiveSum(this.foo, this.bar);
    this.computedMinutesToHHMMFoo = reactiveMinutesToHHMM(this.foo);
    this.computedMinutesToHHMMSqrFoo = reactiveMinutesToHHMM(this.computedSqrFoo);
  },
});
</script>

<style></style>
