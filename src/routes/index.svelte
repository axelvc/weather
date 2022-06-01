<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import DialChart from '@/components/Home/DialChart.svelte'
  import Compass from '@/components/Home/Compass.svelte'
  import Forecast from '@/components/Home/Forecast.svelte'
  import getWeather from '@/services/weather.service'
  import Time from '@/components/common/Card/Time.svelte'

  function fetchWeather(): Promise<Weather> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        getWeather(`${coords.latitude},${coords.longitude}`).then(resolve).catch(reject)
      }, reject)
    })
  }
</script>

{#await fetchWeather()}
  <p class="sr-only">Loading</p>

  <div class="relative animate-pulse grid place-items-center min-h-screen">
    <div class="absolute top-3 left-3 space-y-2">
      <div class="rounded-sm w-48 h-5 bg-slate-300" />
      <div class="rounded-sm w-36 h-4 bg-slate-300" />
    </div>

    <div class="space-y-2 grid justify-items-center">
      <div class="w-56 h-40 rounded-md bg-slate-300" />
      <div class="w-56 h-5 rounded-sm bg-slate-300" />
      <div class="w-56 h-5 rounded-sm bg-slate-300" />
      <div class="w-56 h-5 rounded-sm bg-slate-300" />
    </div>
  </div>
{:then { current, location, forecast }}
  <section class="sticky top-0 grid place-items-center min-h-screen">
    <div class="absolute top-2 left-3 ">
      <p class="text-lg">{location.country}, {location.name}</p>
      <p class="text-sm text-slate-500">
        Last update at: <Time date={current.lastUpdated} />
      </p>
    </div>

    <div class="text-center my-16">
      <span class="text-[10rem] leading-none font-semibold">
        {current.temp.real.c}<span class="text-8xl align-top">°</span>
      </span>
      <p>Feels like {current.temp.feels.c}°</p>
      <div>
        <p class="inline">{current.condition.text}</p>
        <img src={current.condition.icon} alt="" class="inline w-6" />
      </div>
      <span>🔽 {forecast.today.temp.min.c}°</span>
      <span>🔼 {forecast.today.temp.max.c}°</span>
    </div>
  </section>

  <div class="-translate-y-20 bg-slate-100">
    <Card title="Today" class="grid-cols-2 shadow-[0_-20px_50px_-15px]">
      <div slot="pre" class="col-span-full h-8">
        <div class="w-16 h-0.5 mx-auto mb-2 rounded bg-slate-300 " />
        <div class="w-8 h-0.5 mx-auto rounded bg-slate-300" />
      </div>

      <CardSection title="Cloud Cover" class="grid gap-1 justify-center text-center">
        <DialChart value={current.cloud} icon="☁️" suffix="%" />
      </CardSection>

      <CardSection title="Humidity" class="grid gap-1 justify-center text-center">
        <DialChart value={current.humidity} icon="💧️" suffix="%" />
      </CardSection>

      <CardSection title="UV Index" class="grid gap-1 justify-center text-center">
        <DialChart value={current.uvIndex} total={11} icon="💡" />
      </CardSection>

      <CardSection title="Wind" class="grid gap-1 justify-center text-center">
        <Compass velocity={current.wind.kph} direction={current.wind.direction} />
      </CardSection>
    </Card>

    <Card title="Forecast">
      <CardSection title="Next Days" class="grid">
        <Forecast data={forecast.days} formatOptions={{ weekday: 'short' }} />
      </CardSection>

      <hr class="border-slate-200" />

      <CardSection title="Next Hours" class="grid">
        <Forecast data={forecast.hours} formatOptions={{ hour: 'numeric' }} />
      </CardSection>
    </Card>

    <Card title="Sun & Moon" class="grid-cols-2">
      <CardSection title="Sunrise">
        ☀️
        <Time date={forecast.today.astro.sunrise} />
      </CardSection>
      <CardSection title="Sunset">
        ☀️
        <Time date={forecast.today.astro.sunset} />
      </CardSection>

      <hr class="col-span-full border-slate-200" />

      <CardSection title="Monrise">
        ☀️
        <Time date={forecast.today.astro.moonrise} />
      </CardSection>
      <CardSection title="Moonset">
        ☀️
        <Time date={forecast.today.astro.moonset} />
      </CardSection>
      <CardSection title="Moon Phase">{forecast.today.astro.moonPhase}</CardSection>
      <CardSection title="Moon Illumination">{forecast.today.astro.moonIllumination}%</CardSection>
    </Card>

    <Card title="More info" class="grid-cols-2">
      <CardSection title="Dew point">{forecast.today.temp.dewPoint.c}°</CardSection>
      <CardSection title="Visibility">{current.visibility.km}km</CardSection>
      <CardSection title="Pressure">{current.pressure.mb}mb</CardSection>
      <CardSection title="Precipitation ">{current.precipitation.mm}mm</CardSection>
      <CardSection title="Chance of snow">{forecast.today.snowChange}%</CardSection>
      <CardSection title="Chance of rain">{forecast.today.rainChange}%</CardSection>
    </Card>
  </div>
{/await}
