<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value) => value.includes('frontend')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
  }
}))

const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted')
}

const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <h1 class="heading-1">Inputs</h1>

    <form @submit.prevent="submitForm">
      <Input
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="v.nameField.$model"
        :error="v.nameField.$errors"/>
        
      <Input
        label="Your email"
        name="email"
        placeholder="Input your email"
        v-model:value="v.emailField.$model"
        :error="v.emailField.$errors"/>
        
      <Input
        label="Your lucky number"
        name="lucky"
        placeholder="Input your lucky number"
        v-model:value="v.luckyField.$model"
        :error="v.luckyField.$errors"/>
        
      <Input
        label="Your password"
        name="password"
        placeholder="Please input password"
        v-model:value="passwordField"
        type="password"/>
        
      <Input
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="v.confirmPasswordField.$model"
        :error="v.confirmPasswordField.$errors"
        type="password"/>

      <Input
        label="Frontend string"
        name="frontend"
        placeholder="Input string with frontend"
        v-model:value="v.frontendField.$model"
        :error="v.frontendField.$errors"/>

      <Button label="Submit" color="primary"></Button>
    </form>
  </div>
</template>

<style>
.sidebar {
  width: 250px;
  padding: 20px;
  position: absolute;
  top: calc(50% + 80px);
  left: 50%;
  z-index: 99;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translate(-50%,-150%);
  background: #fff;
}
.sidebar_isopen {
  transform: translate(-50%,-50%);
}
.sidebar__link {
  display: block;
  border-radius: 12px;
  border: 2px solid #fff;
  transition: 0.2s;
  font-weight: bold;
  margin-bottom: 10px;
}
.sidebar__link:hover {
  color: var(--primary);
}
</style>