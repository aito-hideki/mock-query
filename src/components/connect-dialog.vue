<template>
  <div
    v-if="value"
    class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50"
    @click="closeDialog"
  >
    <div
      class="flex flex-col w-90 bg-dark border-2 border-primary rounded-lg p-4 mx-4"
      @click.stop
    >
      <label
        class="opacity-70 pl-2 mt-4 mb-2"
        for="server"
      >
        Server Address
      </label>
      <input
        v-model="database.host"
        class="textarea"
        name="server"
        type="text"
        :disabled="connecting"
      >

      <label
        class="opacity-70 pl-2 mt-4 mb-2"
        for="username"
      >
        Username
      </label>
      <input
        v-model="database.username"
        class="textarea"
        name="username"
        type="text"
        :disabled="connecting"
      >

      <label
        class="opacity-70 pl-2 mt-4 mb-2"
        for="password"
      >
        Password
      </label>
      <input
        v-model="database.password"
        class="textarea"
        name="password"
        type="password"
        :disabled="connecting"
      >
      <div class="bg-success rounded-md p-3 mt-4">
        <i class="mdi mdi-information-outline mr-1" />
        No worries. You can just enter dummy data here.
        We're not actually connecting to the server.
      </div>
      <div class="flex items-center justify-between mt-4">
        <button
          v-if="database.connected"
          class="ghost-button"
          @click="closeDialog"
        >
          Cancel
        </button>
        <button
          class="button ml-auto"
          :disabled="connecting || !validForm"
          @click="onConnect"
        >
          {{ connecting ? 'Connecting...' : 'Connect' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDatabase } from '../use/server'

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()
const props = defineProps<{
  modelValue: boolean
}>()

const { database, connecting, connectDB } = useDatabase()

const value = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
})

const validForm = computed(() => database.host && database.username && database.password)

const closeDialog = () => {
  if (!database.connected) { return }
  value.value = false
}

const onConnect = async () => {
  await connectDB()
  value.value = false
}
</script>
