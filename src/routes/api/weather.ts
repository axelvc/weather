import type { RequestEvent } from '@sveltejs/kit'

const API_URL = 'weatherapi-com.p.rapidapi.com'
const API_KEY = import.meta.env.VITE_API_KEY
const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': API_URL,
    'X-RapidAPI-Key': API_KEY,
    'sec-fetch-mode': 'navigate',
  },
}

export async function get(req: RequestEvent) {
  const { searchParams } = req.url
  const location = searchParams.get('location')

  if (!location) {
    return {
      status: 400,
    }
  }

  const res = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=7`, FETCH_OPTIONS)
  const json = await res.json()

  return {
    body: json,
  }
}
