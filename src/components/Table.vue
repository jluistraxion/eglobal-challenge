<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nombre</th>
        <th class="text-left">Calorias</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
        <td>editar</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const desserts = [
  { name: "Frozen Yogurt", calories: 159 },
  { name: "Ice cream sandwich", calories: 237 },
  { name: "Cupcake", calories: 305 },
];
</script>
