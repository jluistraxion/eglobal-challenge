<template>
  <div class="d-flex flex-column ga-5 pa-6">
    <h2>Eglobal Challenge</h2>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one"> Consulta </v-tab>
      <v-tab value="two"> Edición </v-tab>
      <v-tab value="three"> Registro </v-tab>
    </v-tabs>
    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          <Table />
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          <Form />
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          <Form />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Table from "@/components/Table.vue";
import Form from "@/components/Form.vue";

const tab = ref();
</script>
