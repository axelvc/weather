<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import Divisor from '@/components/common/Divisor.svelte'
  import ForecastItem from '@/components/Home/ForecastInfo/ForecastItem.svelte'
  export let weather: Weather

  const { forecast, location } = weather
  const { days, hours } = forecast
</script>

<Card title="Forecast">
  <CardSection title="Days" class="grid">
    <ForecastItem data={days} formatOptions={{ weekday: 'short', timeZone: 'UTC' }} />
  </CardSection>

  <Divisor />

  <CardSection title="Hours" class="grid">
    <ForecastItem data={hours} formatOptions={{ hour: 'numeric', timeZone: location.timezone }} />
  </CardSection>
</Card>
