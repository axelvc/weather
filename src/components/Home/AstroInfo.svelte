<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import Card from '@/components/common/Card/Card.svelte'
  import CardDetail from '@/components/Home/Util/CardDetail.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import Divisor from '@/components/common/Divisor.svelte'
  import Icon from '@/components/common/Icon.svelte'
  export let weather: Weather

  const { sunrise, sunset, moonrise, moonset, moonPhase, moonIllumination } = weather.forecast.today.astro
</script>

<Card title="Sun & Moon" class="grid-cols-2">
  <CardSection title="Sunrise">
    <CardDetail>
      <Icon name="sunrise" />
      {sunrise}
    </CardDetail>
  </CardSection>

  <CardSection title="Sunset">
    <CardDetail>
      <Icon name="sunset" />
      {sunset}
    </CardDetail>
  </CardSection>

  <Divisor />

  <CardSection title="Monrise">
    <CardDetail>
      <Icon name="moonrise" />
      {moonrise}
    </CardDetail>
  </CardSection>

  <CardSection title="Moonset">
    <CardDetail>
      <Icon name="moonset" />
      {moonset}
    </CardDetail>
  </CardSection>

  <CardSection title="Moon Phase">
    <CardDetail>
      <Icon name={moonPhase.icon} />
      {moonPhase.name}
    </CardDetail>
  </CardSection>

  <CardSection title="Moon Illumination">
    <CardDetail>
      <Icon name="bulb" />
      {moonIllumination}%
    </CardDetail>
  </CardSection>
</Card>
