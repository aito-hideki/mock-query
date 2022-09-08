import { HandlerEvent } from '@netlify/functions'

import mock from '../../common/mock.json'

export const handler = async (evt: HandlerEvent) => {
  const fields = [
    'id',
    'first_name',
    'last_name'
  ]

  // Shuffle first names, last names and pick 20 of them
  const firstNames = mock.firstNames.sort(() => 0.5 - Math.random()).slice(0, 20)
  const lastNames = mock.lastNames.sort(() => 0.5 - Math.random()).slice(0, 20)

  const values = [] as any[]

  for (let idx = 0; idx < 20; idx++) {
    values.push({
      id: Math.floor(Math.random() * 5000),
      first_name: firstNames[idx],
      last_name: lastNames[idx]
    })
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      fields,
      values: values.sort((a, b) => a.id - b.id)
    })
  }
}
