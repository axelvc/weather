<script lang="ts">
  import type { Forecast } from '@/services/weather.service'
  import Time from '../common/Card/Time.svelte'

  export let data: Forecast[]
  export let formatOptions: Intl.DateTimeFormatOptions
</script>

<ol class="flex overflow-auto snap-x overscroll-x-contain snap-mandatory">
  {#each data as item}
    <li class="flex-1 snap-start">
      <article class="text-center w-20 p-1 space-y-2 mx-auto">
        <h2 class="text-sm">
          <Time date={item.date} {formatOptions} class="text-slate-500" />
        </h2>

        <img src={item.condition.icon} alt={item.condition.text} class="w-8 m-auto" />

        <div>{item.temp.c}°</div>
      </article>
    </li>
  {/each}
</ol>
