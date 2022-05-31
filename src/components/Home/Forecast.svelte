<script lang="ts">
  import type { ForecastData } from '@/components/Home/types'
  import CardSection from '../common/Card/CardSection.svelte'
  export let title: string
  export let data: ForecastData[]
</script>

<CardSection {title}>
  <ol class="flex overflow-auto -mx-6 snap-x overscroll-x-contain snap-mandatory">
    {#each data as item}
      <li class="flex-1 snap-start first:pl-6 last:pr-6">
        <article class="text-center w-20 p-1 space-y-2 mx-auto">
          <h2 class="text-sm">
            <time datetime={item.date.toISOString()} class="text-slate-500">
              {item.title}
            </time>
          </h2>

          <div>{item.icon}</div>

          <div>{item.temperature}°</div>
        </article>
      </li>
    {/each}
  </ol>
</CardSection>
