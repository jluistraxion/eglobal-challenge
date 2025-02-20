<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-key="name"
    items-per-page="10"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="ms-4"
        size="small"
        @click="$emit('edit', item)"
      >
        mdi-pencil
      </v-icon>
    </template>
  </v-data-table>
</template>

<script setup>
defineProps(['headers', 'items'])
</script>
