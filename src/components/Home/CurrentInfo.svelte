<script lang="ts">
  import type { Weather } from '@/services/weather.service'
  import Icon from '@/components/common/Icon.svelte'
  import Temp from '@/components/Home/Util/Temp.svelte'
  import Time from '@/components/common/Time.svelte'
  export let weather: Weather

  const { current, location, forecast } = weather
  const { temp, condition } = current
</script>

<section class="sticky top-0 grid place-items-center md:w-full h-screen">
  <div class="absolute top-2 left-3">
    <p class="text-lg">{location.country}, {location.name}</p>
    <p class="text-sm text-slate-500">
      Last update at: <Time date={current.lastUpdated} />
    </p>
  </div>

  <div class="text-center md:w-96 space-y-2">
    <Temp
      temp={temp.real.c}
      class="text-[10rem] leading-none font-semibold after:absolute after:text-8xl after:align-top"
    />

    <p>
      Feels like
      <Temp temp={temp.feels.c} />
    </p>

    <p>
      {condition.text}
      <Icon name={condition.icon} />
    </p>

    <div>
      <span>
        <Icon name="down" />
        <Temp temp={forecast.today.temp.min.c} />
      </span>

      <span>
        <Icon name="up" />
        <Temp temp={forecast.today.temp.max.c} />
      </span>
    </div>
  </div>
</section>
