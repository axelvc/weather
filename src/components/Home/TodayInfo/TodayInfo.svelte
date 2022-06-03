<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import Compass from '@/components/Home/TodayInfo/Compass.svelte'
  import DialChart from '@/components/Home/TodayInfo/DialChart.svelte'
  import SwipeIndicator from '@/components/Home/Util/SwipeIndicator.svelte'
  export let weather: Weather

  const { current } = weather
  const { cloud, humidity, uvIndex, wind } = current
</script>

<Card title="Today" class="grid-cols-2 shadow-[0_-20px_50px_-15px]">
  <SwipeIndicator slot="pre" />

  <CardSection title="Cloud Cover" class="grid gap-1 justify-center text-center">
    <DialChart value={cloud} icon="cloud" suffix="%" />
  </CardSection>

  <CardSection title="Humidity" class="grid gap-1 justify-center text-center">
    <DialChart value={humidity} icon="drop" suffix="%" />
  </CardSection>

  <CardSection title="UV Index" class="grid gap-1 justify-center text-center">
    <DialChart value={uvIndex} total={11} icon="bulb" />
  </CardSection>

  <CardSection title="Wind" class="grid gap-1 justify-center text-center">
    <Compass velocity={wind.kph} direction={wind.direction} />
  </CardSection>
</Card>
