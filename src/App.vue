<template>
  <v-responsive>
    <v-app>
      <v-app-bar>
        <h2 class="ms-8">Eglobal challenge</h2>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-card class="mt-6">
            <v-tabs
              v-model="tab"
              bg-color="primary"
            >
              <v-tab value="list">Lista</v-tab>
              <v-tab value="update">Edición</v-tab>
              <v-tab value="create">Registro</v-tab>
            </v-tabs>
            <v-card-text>
              <v-tabs-window v-model="tab">
                <v-tabs-window-item value="list">
                  <DataTable
                    :headers
                    :items
                    @edit="onEditItem"
                  />
                </v-tabs-window-item>
                <v-tabs-window-item value="update">
                  <Form
                    :initial-values="selectedItem"
                    @submit="updateItem"
                  />
                </v-tabs-window-item>
                <v-tabs-window-item value="create">
                  <Form
                    @submit="saveItem"
                    ref="formRef"
                  />
                </v-tabs-window-item>
              </v-tabs-window>
            </v-card-text>
          </v-card>
        </v-container>
        <v-snackbar
          v-model="snackbar"
          location="top"
        >
          Información {{ tab === 'update' ? 'actualizada' : 'registrada' }} con
          éxito
          <template #actions>
            <v-btn
              color="success"
              variant="outlined"
              @click="snackbar = false"
            >
              Cerrar
            </v-btn>
          </template>
        </v-snackbar>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from '@/components/DataTable.vue'
import Form from '@/components/WorldPyramidsForm.vue'

const tab = ref(null)
const selectedItem = ref(null)
const snackbar = ref(false)
const formRef = ref(null)

const onEditItem = (item) => {
  selectedItem.value = item
  tab.value = 'update'
}

const updateItem = (item) => {
  const index = items.value.findIndex(
    (item) => item.name === selectedItem.value.name
  )
  if (index !== -1) items.value[index] = { ...item }
  snackbar.value = true
  tab.value = 'list'
}

const saveItem = async (item) => {
  items.value.push(item)
  snackbar.value = true
  tab.value = 'list'
  await nextTick()
  formRef.value.reset()
}

const headers = [
  { title: 'Pyramid', value: 'name' },
  { title: 'Location', value: 'location' },
  { title: 'Construction Date', value: 'constructionDate' },
  { title: 'Actions', key: 'actions', sortable: false }
]

const items = ref([
  {
    name: 'Great Pyramid of Giza',
    location: 'Egypt',
    constructionDate: 'c. 2580–2560 BC'
  },
  {
    name: 'Pyramid of Khafre',
    location: 'Egypt',
    constructionDate: 'c. 2570 BC'
  },
  {
    name: 'Red Pyramid',
    location: 'Egypt',
    constructionDate: 'c. 2590 BC'
  },
  {
    name: 'Bent Pyramid',
    location: 'Egypt',
    constructionDate: 'c. 2600 BC'
  },
  {
    name: 'Pyramid of the Sun',
    location: 'Mexico',
    constructionDate: 'c. 200 CE'
  }
])
</script>
