<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import getWeather from '@/services/weather.service'
  import ForecastInfo from '@/components/Home/ForecastInfo/ForecastInfo.svelte'
  import LoadingSkeleton from '@/components/Home/LoadingSkeleton.svelte'
  import MoreInfo from '@/components/Home/MoreInfo.svelte'
  import CurrentInfo from '@/components/Home/CurrentInfo.svelte'
  import AstroInfo from '@/components/Home/AstroInfo.svelte'
  import TodayInfo from '@/components/Home/TodayInfo/TodayInfo.svelte'

  const weatherData = new Promise<Weather>((resolve, reject) => {
    function fetchWeather(location: string) {
      getWeather(location).then(resolve).catch(reject)
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        fetchWeather(`${coords.latitude},${coords.longitude}`)
      },
      () => {
        fetchWeather('auto:ip')
      },
    )
  })
</script>

<svelte:head>
  <title>Weather</title>
</svelte:head>

<main class="md:flex">
  {#await weatherData}
    <LoadingSkeleton />
  {:then weather}
    <CurrentInfo {weather} />

    <div class="md:max-w-lg -translate-y-20 sm:translate-y-0 bg-slate-100">
      <TodayInfo {weather} />
      <ForecastInfo {weather} />
      <AstroInfo {weather} />
      <MoreInfo {weather} />
    </div>
  {/await}
</main>
