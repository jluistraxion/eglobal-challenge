<template>
  <v-form
    ref="formRef"
    @submit.prevent="submit"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.name"
            :rules="rules"
            label="Nombre"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.location"
            :rules="rules"
            label="Ubicación"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.constructionDate"
            :rules="rules"
            label="Fecha de Construcción"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      class="mt-4 ms-4"
      variant="outlined"
      type="submit"
    >
      Guardar
    </v-btn>
  </v-form>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

const initialState = {
  name: '',
  location: '',
  constructionDate: ''
}

const emit = defineEmits(['submit'])

const props = defineProps({
  initialValues: Object
})

const form = reactive({
  ...initialState
})

const formRef = ref()

watch(
  () => props.initialValues,
  (newValues) => {
    if (newValues) {
      Object.assign(form, newValues)
    }
  },
  { deep: true, immediate: true }
)

const rules = [
  (value) => {
    if (value) return true
    return '*Campo requerido'
  }
]

const submit = async (event) => {
  const results = await event
  if (results.valid) emit('submit', form)
}

const reset = () => formRef.value.reset()

defineExpose({ reset })
</script>
