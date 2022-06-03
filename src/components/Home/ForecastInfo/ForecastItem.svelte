<script lang="ts">
  import type { Forecast } from '@/services/weather.service'
  import Icon from '@/components/common/Icon.svelte'
  import Temp from '@/components/Home/Util/Temp.svelte'
  import Time from '@/components/common/Time.svelte'

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

        <Icon name={item.condition.icon} alt={item.condition.text} class="!block !w-8 !h-8 m-auto" />

        <Temp temp={item.temp.c} />
      </article>
    </li>
  {/each}
</ol>

<style>
  ol::-webkit-scrollbar {
    @apply h-2;
  }
  ol::-webkit-scrollbar-track {
    @apply bg-slate-200;
  }
</style>
