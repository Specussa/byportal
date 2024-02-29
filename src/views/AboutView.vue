<template>
  ...
  <div class="mb-3">
    <input
      v-model="formData.name"
      className="form-control"
      placeholder="Insert your name.."
    />
  </div>

  <span v-for="error in v$.name.$errors" :key="String(error.$uid)">
    <span class="text-danger">{{ error.$message }}</span>
  </span>

  <div class="mt-5 submit">
    <button class="btn btn-primary btn-sm" type="button" @click="submitForm">
      Next
    </button>
  </div>
  ...
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@/i18n/translation";

export default defineComponent({
  name: "InitialDataForm",
  setup() {
    const formData = reactive({
      name: "",
    });
    const rules = {
      name: { required },
    };
    const v$ = useVuelidate(rules, formData);
    return {
      formData,
      v$,
    };
  },
  methods: {
    async submitForm() {
      const result = await this.v$.$validate();
      if (result) {
        alert("validation passed");
      }
    },
  },
});
</script>