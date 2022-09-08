import { Ref, ref } from 'vue'
import { useToast } from 'vue-toastification'
import * as Toast from 'vue-toastification'
import axios from 'axios'

type QueryResult = {
  fields: string[],
  values: Record<string, any>[]
}

export const useQuery = () => {
  const query = ref('')
  const submitting = ref(false)
  const response: Ref<QueryResult | undefined> = ref()
  const { error } = useToast()

  const submitQuery = async () => {
    submitting.value = true

    try {
      const res = await axios
        .post('/.netlify/functions/query', { query: query.value })
        .then(({ data }) => data)

      response.value = res
    } catch (err: any) {
      error(err.message || 'Sorry. We couldn\'t complete your request', {
        position: Toast.POSITION.TOP_RIGHT,
        timeout: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        icon: true
      })
    } finally {
      submitting.value = false
    }
  }

  return {
    query,
    response,
    submitting,
    submitQuery
  }
}
