<template>
  <div class="page-auth">
    <UiContainer>
      <h2 class="title page-auth__title">Вход</h2>
      <form class="form" @submit.prevent="handleSubmit">
        <UiFormGroup label="Email">
          <div class="input-group">
            <input name="email" type="email" placeholder="demo@email" class="form-control" />
          </div>
        </UiFormGroup>
        <UiFormGroup label="Пароль">
          <div class="input-group">
            <input name="password" type="password" placeholder="password" class="form-control" />
          </div>
        </UiFormGroup>
        <div class="form__buttons">
          <button type="submit" class="button button_primary button_block">Войти</button>
        </div>
        <div class="form__append">
          Нет аккаунта? <RouterLink to="/register" class="link">Зарегистрируйтесь</RouterLink>
        </div>
      </form>
    </UiContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiFormGroup from '../components/UiFormGroup.vue';
import UiContainer from '../components/UiContainer.vue';

export default defineComponent({
  name: 'PageLogin',

  components: {
    UiFormGroup,
    UiContainer,
  },

  methods: {
    handleSubmit(): void {
      const route = (this.$route.query.from as string) || '/';
      this.$router.push(route);
    },
  },
});
</script>

<style></style>
