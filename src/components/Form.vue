<template>
  <v-sheet width="300">
    <v-form @submit.prevent="submit">
      <v-text-field v-model="name" :rules="rules" label="Nombre" />
      <v-text-field v-model="calories" :rules="rules" label="Calorias" />
      <v-btn class="mt-2" type="submit" block> Submit </v-btn>
    </v-form>
  </v-sheet>
  <v-snackbar v-model="snackbar">
    Calorias registradas con exito
    <template #actions>
      <v-btn color="success" variant="outlined" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const calories = ref("");
const snackbar = ref(false);

const rules = [
  (value) => {
    if (value) return true;
    return "*Campo requerido.";
  },
];

const submit = async (event) => {
  const results = await event;
  if (results.valid) snackbar.value = true;
};
</script>
