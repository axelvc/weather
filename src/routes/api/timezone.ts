import type { RequestEvent } from '@sveltejs/kit'
import api from '@/services/api.service'

export async function get(req: RequestEvent) {
  const { searchParams } = req.url
  const location = searchParams.get('location')

  if (!location) {
    return {
      status: 400,
    }
  }

  const res = await api.get(`timezone.json?q=${location}`)
  const json = await res.json()

  return {
    body: {
      timezone: json.location.tz_id,
    },
  }
}
