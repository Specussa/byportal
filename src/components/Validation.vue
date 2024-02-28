<script setup>
const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div class="form__control">
    <input
      class="form__input"
      :type="type"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue">
    <label :for="name" class="form__label">{{label}}</label>
    <TransitionGroup>
      <div
        class="form-error"
        v-for="element of error"
        :key="element.$uid">
        <div class="form-error__message">{{element.$message}}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="css" scoped>
.form__control {
  margin-bottom: 30px;
  position: relative;
}
.form-error {
  padding: 5px;
  margin-top: 4px;
  color: var(--white);
  background-color: var(--error);
}

.form__input {
  width: 100%;
  height: 50px;
  padding: 15px;
  position: relative;
  z-index: 1;
}
.form__input:focus + .form__label {
  top: -20px;
  z-index: 1;
  opacity: 1;
}
.form__input:not(:placeholder-shown) + .form__label {
  top: -20px;
  z-index: 1;
  opacity: 1;
}
.form__label {
  display: block;
  position: absolute;
  top: 20px;
  opacity: 0;
  z-index: -1;
  color: var(--primary);
  -webkit-transition: top 0.3s linear;
  transition: top 0.3s linear;
}

.form-error.v-enter-active,
.form-error.v-leave-active {
  transition: opacity 0.5s ease;
}

.form-error.v-enter-from,
.form-error.v-leave-to {
  opacity: 0;
}
</style>