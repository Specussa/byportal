<script setup>
// import {ref, computed} from 'vue'
// import useVuelidate from '@vuelidate/core'
// import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

// import Input from '@/components/Validation.vue'
// import Button from '@/components/Button.vue'

// const nameField = ref('')
// const emailField = ref('')
// const luckyField = ref('')
// const passwordField = ref('')
// const confirmPasswordField = ref('')
// const frontendField = ref('')

// const mustBeFrontend = (value) => value.includes('frontend')

// const rules = computed(() => ({
//   nameField: {
//     minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
//   },
//   emailField: {
//     email: helpers.withMessage('Вы ввели неверный email', email)
//   },
//   luckyField: {
//     maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
//     numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
//   },
//   confirmPasswordField: {
//     sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
//   },
//   frontendField: {
//     frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
//   }
// }))

// const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

// const submitForm = () => {
//   v.value.$touch()
//   if (v.value.$error) return
//   alert('Form submitted')
// }

// const props = defineProps({
//   openLogin: {
//     type: Boolean,
//     required: true,
//   },
// });
</script>

<template>
  <!-- <div :class="['header__form', { active: openLogin }]">
    <div class="header__form_block">
      <h1 class="header__form_head">Войти</h1>

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
  </div> -->
</template>

<style>
.header__form {
  width: 100%;
  max-width: 560px;
  max-height: calc(var(--height) - 160px);
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;
  opacity: 0;
  border-radius: 25px;
  border: 1px solid var(--border);
  background-color: var(--bg);
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.4s;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.4s;
  -webkit-transform: translate(-50%,calc(-50vh - 80px - 100%));
  transform: translate(-50%,calc(-50vh - 80px - 100%));
  overflow: hidden;
}

.header__form.active {
  opacity: 1;
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.2s;
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.15s, opacity 0.2s linear 0.2s;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}

.header__form_block {
  display: flex;
  height: 100%;
  max-height: calc(var(--height) - 160px);
  padding: 50px 40px;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
}

.header__form_block::-webkit-scrollbar {
  display: none;
}

.header__form_block::-webkit-scrollbar-thumb {
  display: none;
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
</style>