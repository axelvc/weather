const API_URL = 'https://weatherapi-com.p.rapidapi.com'
const API_HOST = 'weatherapi-com.p.rapidapi.com'
const API_KEY = import.meta.env.VITE_API_KEY
const FETCH_OPTIONS = {
  headers: {
    'X-RapidAPI-Host': API_HOST,
    'X-RapidAPI-Key': API_KEY,
    'sec-fetch-mode': 'navigate',
  },
}

async function get(url: string) {
  return await fetch(`${API_URL}/${url}`, FETCH_OPTIONS)
}

export default { get }
