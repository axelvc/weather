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

<Card title="Today">
  <div class="grid gap-[inherit] grid-cols-2">
    <CardSection title="Cloud Cover" titleClass="text-center" class="w-24">
      <DialChart value={90} icon="☁️" suffix="%" />
    </CardSection>

    <CardSection title="Humidity" titleClass="text-center" class="w-24">
      <DialChart value={65} icon="💧️" suffix="%" />
    </CardSection>

    <CardSection title="UV Index" titleClass="text-center" class="w-24">
      <DialChart value={2} total={11} icon="💡" />
    </CardSection>

    <CardSection title="Wind" titleClass="text-center" class="w-24">
      <Compass velocity={22} direction={'N'} />
    </CardSection>
  </div>
</Card>

<Card title="Forecast">
  <Forecast title="Next Days" data={forecastData.days} />
  <hr class="border-slate-200" />
  <Forecast title="Next Hours" data={forecastData.hours} />
</Card>

<Card title="Sun & Moon">
  <div class="grid gap-[inherit] grid-cols-2">
    <CardSection title="Sunrise">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
    <CardSection title="Sunset">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
  </div>

  <hr class="border-slate-200" />

  <div class="grid gap-[inherit] grid-cols-2">
    <CardSection title="Monrise">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
    <CardSection title="Moonset">
      ☀️ <time datetime={new Date().toISOString()}>6:57 AM</time>
    </CardSection>
  </div>

  <div class="grid gap-[inherit] grid-cols-2">
    <CardSection title="Moon Illumination">15%</CardSection>
    <CardSection title="Moon Phase">Warning crecent</CardSection>
  </div>
</Card>
