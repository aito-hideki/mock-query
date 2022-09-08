import { reactive, ref } from 'vue'

const database = reactive({
  host: '',
  username: '',
  password: '',
  connected: false
})

export const useDatabase = () => {
  const connecting = ref(false)

  const connectDB = (): Promise<boolean> => {
    connecting.value = true

    return new Promise((resolve) => {
      setTimeout(() => {
        connecting.value = false
        database.connected = true

        resolve(true)
      }, 2000)
    })
  }

  return {
    connectDB,
    connecting,
    database
  }
}
