<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import DialChart from '@/components/Home/DialChart.svelte'
  import Compass from '@/components/Home/Compass.svelte'
  import Forecast from '@/components/Home/Forecast.svelte'
  import getWeather from '@/services/weather.service'
  import Time from '@/components/common/Time.svelte'
  import Temp from '@/components/Home/Temp.svelte'
  import Skeleton from '@/components/common/Skeleton.svelte'

  const weatherData = new Promise<Weather>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      getWeather(`${coords.latitude},${coords.longitude}`).then(resolve).catch(reject)
    }, reject)
  })
</script>

<main class="md:flex">
  {#await weatherData}
    <p class="sr-only">Loading</p>

    <div class="relative grid place-items-center md:w-screen h-screen">
      <div class="absolute top-3 left-3 space-y-2">
        <Skeleton class="w-48 h-5" />
        <Skeleton class="w-36 h-4" />
      </div>

      <div class="space-y-2 grid justify-items-center">
        <Skeleton class="w-64 h-40" />
        <Skeleton class="w-52 h-5" />
        <Skeleton class="w-56 h-5" />
        <Skeleton class="w-52 h-5" />
      </div>
    </div>
  {:then { current, location, forecast }}
    <section class="sticky top-0 grid place-items-center md:w-screen h-screen">
      <div class="absolute top-2 left-3 ">
        <p class="text-lg">{location.country}, {location.name}</p>
        <p class="text-sm text-slate-500">
          Last update at: <Time date={current.lastUpdated} />
        </p>
      </div>

      <div class="text-center sm:w-96">
        <Temp class="text-[10rem] leading-none font-semibold after:absolute after:text-8xl after:align-top">
          {current.temp.real.c}
        </Temp>

        <p>
          Feels like
          <Temp>{current.temp.feels.c}</Temp>
        </p>

        <div>
          <p class="inline">{current.condition.text}</p>
          <img src={current.condition.icon} alt="" class="inline w-6" />
        </div>

        <span>
          🔽
          <Temp>{forecast.today.temp.min.c}</Temp>
        </span>

        <span>
          🔼
          <Temp>{forecast.today.temp.max.c} /></Temp>
        </span>
      </div>
    </section>
  {/await}

  <div class=" w-full md:max-w-lg -translate-y-20 sm:translate-y-0">
    {#await weatherData}
      <Skeleton class="aspect-video mx-3 my-6" />
      <Skeleton class="aspect-video mx-3 my-6" />
      <Skeleton class="aspect-video mx-3 my-6" />
      <Skeleton class="aspect-video mx-3 my-6" />
    {:then { current, forecast }}
      <Card title="Today" class="grid-cols-2 shadow-[0_-20px_50px_-15px]">
        <div slot="pre" class="md:hidden col-span-full h-8">
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
        <CardSection title="Moon Phase">
          {forecast.today.astro.moonPhase}
        </CardSection>
        <CardSection title="Moon Illumination">
          {forecast.today.astro.moonIllumination}%
        </CardSection>
      </Card>

      <Card title="More info" class="grid-cols-2">
        <CardSection title="Dew point">
          <Temp>{forecast.today.temp.dewPoint.c}</Temp>
        </CardSection>
        <CardSection title="Visibility">
          {current.visibility.km} km
        </CardSection>
        <CardSection title="Pressure">
          {current.pressure.mb} mb
        </CardSection>
        <CardSection title="Precipitation ">
          {current.precipitation.mm} mm
        </CardSection>
        <CardSection title="Chance of snow">
          {forecast.today.snowChange}%
        </CardSection>
        <CardSection title="Chance of rain">
          {forecast.today.rainChange}%
        </CardSection>
      </Card>
    {/await}
  </div>
</main>
