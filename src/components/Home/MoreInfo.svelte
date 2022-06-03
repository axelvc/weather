<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import AnimatedNumber from '@/components/common/AnimatedNumber.svelte'
  import Card from '@/components/common/Card/Card.svelte'
  import CardDetail from '@/components/Home/Util/CardDetail.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import Divisor from '@/components/common/Divisor.svelte'
  import Icon from '@/components/common/Icon.svelte'
  import Temp from '@/components/Home/Util/Temp.svelte'
  export let weather: Weather

  const { current, forecast } = weather
  const { visibility, pressure, precipitation } = current
  const { temp, rainChange, snowChange } = forecast.today
</script>

<Card title="More info" class="grid-cols-2">
  <CardSection title="Dew point">
    <CardDetail>
      <Icon name="drop" />
      <Temp temp={temp.dewPoint.c} />
    </CardDetail>
  </CardSection>

  <CardSection title="Visibility">
    <CardDetail>
      <Icon name="eye" />
      <AnimatedNumber value={visibility.km} />
      km
    </CardDetail>
  </CardSection>

  <CardSection title="Pressure">
    <CardDetail>
      <Icon name="measure" />
      <AnimatedNumber value={pressure.mb} />
      mb
    </CardDetail>
  </CardSection>

  <CardSection title="Precipitation">
    <CardDetail>
      <Icon name="drop" />
      <AnimatedNumber value={precipitation.mm} />
      mm
    </CardDetail>
  </CardSection>

  <Divisor />

  <CardSection title="Chance of rain">
    <CardDetail>
      <Icon name="water" />
      {rainChange}%
    </CardDetail>
  </CardSection>

  <CardSection title="Chance of snow">
    <CardDetail>
      <Icon name="snow" />
      <AnimatedNumber value={snowChange} />%
    </CardDetail>
  </CardSection>
</Card>
