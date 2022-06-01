<script lang="ts">
  import type { ForecastData } from '@/components/Home/types'
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import DialChart from '@/components/Home/DialChart.svelte'
  import Compass from '@/components/Home/Compass.svelte'
  import Forecast from '@/components/Home/Forecast.svelte'

  const forecastData: Record<string, ForecastData[]> = {
    days: Array(7)
      .fill(Date.now())
      .map((today, i) => ({
        title: new Date(today + 8.64e7 * i).toLocaleString('en', { weekday: 'short' }),
        date: new Date(today + 8.64e7 * i),
        temperature: Number((Math.random() * 14 + 12).toFixed(1)),
        icon: '☀️',
      })),
    hours: Array(24)
      .fill(Date.now())
      .map((today, i) => ({
        title: new Date(today + 3.6e6 * i).toLocaleString('en', { hour: 'numeric' }),
        date: new Date(today + 3.6e6 * i),
        temperature: Number((Math.random() * 14 + 12).toFixed(1)),
        icon: '☀️',
      })),
  }
</script>

<section class="sticky top-0 -z-10 grid place-items-center min-h-screen">
  <div class="absolute top-2 left-3 ">
    <p class="text-lg">Location</p>
    <p class="text-sm text-slate-500">Last update at 12:30</p>
  </div>

  <div class="text-center my-16">
    <span class="text-[10rem] leading-none font-semibold">
      13<span class="text-8xl align-top">°</span>
    </span>
    <p>Feels like 12.8°</p>
    <p>Partly cloudy ☁️</p>
    <span>🔽 12°</span>
    <span>🔼 14°</span>
  </div>
</section>

<div class="-translate-y-20 bg-slate-100">
  <Card title="Today" class="grid-cols-2 shadow-[0_-20px_50px_-15px]">
    <div slot="pre" class="col-span-full h-8">
      <div class="w-16 h-0.5 mx-auto mb-2 rounded bg-slate-300 " />
      <div class="w-8 h-0.5 mx-auto rounded bg-slate-300" />
    </div>

    <CardSection title="Cloud Cover" class="grid gap-1 justify-center text-center">
      <DialChart value={90} icon="☁️" suffix="%" />
    </CardSection>

    <CardSection title="Humidity" class="grid gap-1 justify-center text-center">
      <DialChart value={65} icon="💧️" suffix="%" />
    </CardSection>

    <CardSection title="UV Index" class="grid gap-1 justify-center text-center">
      <DialChart value={2} total={11} icon="💡" />
    </CardSection>

    <CardSection title="Wind" class="grid gap-1 justify-center text-center">
      <Compass velocity={22} direction={'N'} />
    </CardSection>
  </Card>

  <Card title="Forecast">
    <CardSection title="Next Days" class="grid">
      <Forecast data={forecastData.days} />
    </CardSection>

    <hr class="border-slate-200" />

    <CardSection title="Next Hours" class="grid">
      <Forecast data={forecastData.hours} />
    </CardSection>
  </Card>

  <Card title="Sun & Moon" class="grid-cols-2">
    <CardSection title="Sunrise">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
    <CardSection title="Sunset">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>

    <hr class="col-span-full border-slate-200" />

    <CardSection title="Monrise">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
    <CardSection title="Moonset">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
    <CardSection title="Moon Illumination">15%</CardSection>
    <CardSection title="Moon Phase">Warning crecent</CardSection>
  </Card>

  <Card title="More info" class="grid-cols-2">
    <CardSection title="Dew point">9°</CardSection>
    <CardSection title="Visibility">16.10km</CardSection>
    <CardSection title="Pressure">1023mb</CardSection>
    <CardSection title="Precipitation ">0mm</CardSection>
    <CardSection title="Chance of snow">0%</CardSection>
    <CardSection title="Chance of rain">0%</CardSection>
  </Card>
</div>
