<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import Input from '@/components/Validation.vue'

const emailField = ref('')
const passwordField = ref('')

const rules = computed(() => ({
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
}))

const v = useVuelidate(rules, {emailField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}

const props = defineProps({
  openLogin: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="['header__form_block', { active: openLogin }]">
    <div class="header__form_top">
      <h4 class="header__form_head">Войти</h4>
      <p class="header__form_desc text_five">Добро пожаловать на блог-платформу By-portal!</p>
    </div>
    <form @submit.prevent="submitForm">
      <Input
        label="Your email"
        name="email"
        placeholder="Input your email"
        v-model:value="v.emailField.$model"
        :error="v.emailField.$errors"/>
        
      <Input
        label="Your password"
        name="password"
        placeholder="Please input password"
        v-model:value="passwordField"
        type="password"/>

      <button type="submit" class="btn btn__primary btn__login">Войти</button>

      <a class="btn__forgot">Забыли пароль?</a>

      <div class="header__form_bottom">
        <p class="header__form_desc text_five">Нет аккаунта?</p>
        <a class="header__registration">Зарегистрироваться</a>
      </div>
    </form>
  </div>
</template>

<style>
.header__form_block {
  display: flex;
  height: 100%;
  max-height: calc(var(--height) - 160px);
  padding: 50px 40px;
  flex-direction: column;
  gap: 40px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.header__form_block::-webkit-scrollbar {
  display: none;
}

.header__form_block::-webkit-scrollbar-thumb {
  display: none;
}

.header__form_top {
  display: flex;
  padding: 0 0 30px;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid var(--border);
}

.header__form_bottom {
  display: flex;
  padding: 40px 0 0;
  margin: 40px 0 0;
  flex-wrap: wrap;
  gap: 20px;
  border-top: 1px solid var(--border);
}

.btn__forgot {
  display: block;
  padding: 30px 0 0;
}

.header__form_link {
  display: block;
  border-radius: 12px;
  border: 2px solid #fff;
  transition: 0.2s;
  font-weight: bold;
  margin-bottom: 10px;
}

.header__form_link:hover {
  color: var(--primary);
}

.btn__login {
  width: 100%;
  margin: 10px 0 0;
}
</style>