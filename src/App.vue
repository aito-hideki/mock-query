<template>
  <main class="flex h-screen p-4">
    <div class="w-full flex-shrink flex flex-col">
      <textarea
        v-model="query"
        class="flex-grow textarea"
      />
      <div class="flex items-center">
        <button
          class="button mt-4"
          @click="showConnectDialog = true"
        >
          <i class="mdi mdi-cog mr-1" />
          Connect Database
        </button>
        <button
          class="button mt-4 ml-auto"
          :disabled="submitting"
          @click="submitQuery"
        >
          <i class="mdi mdi-database-search mr-1" />
          {{ submitting ? 'Submitting' : 'Submit' }}
        </button>
      </div>
    </div>
    <div
      v-if="response"
      class="w-full flex-shrink textarea overflow-hidden p-2 ml-4"
    >
      <div class="h-full overflow-auto">
        <table style="border-collapse: separate; border-spacing: 12px;">
          <thead>
            <th
              v-for="field in response.fields"
              :key="field"
              class="bg-primary/30 rounded-md px-4 py-2"
            >
              {{ field }}
            </th>
          </thead>
          <tbody>
            <tr
              v-for="(value, idx) in response.values"
              :key="idx"
            >
              <!-- Using idx as key because we cannot make sure if value.id is unique or exists -->
              <td
                v-for="field in response.fields"
                :key="idx + '-' + field"
                class="px-4"
              >
                {{ value[field] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <transition>
    <connect-dialog v-model="showConnectDialog" />
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from './use/query'

const { query, response, submitting, submitQuery } = useQuery()

const showConnectDialog = ref(true)
</script>
