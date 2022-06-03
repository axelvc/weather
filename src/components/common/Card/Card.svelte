<script lang="ts">
  import Skeleton from '@/components/common/Skeleton.svelte'
  export let title: string = ''
  export let loading = false
</script>

<section
  class={`grid gap-6 mx-3 md:mx-6 my-6 p-6 rounded-lg bg-slate-50 shadow-lg shadow-slate-200 ${$$props.class || ''}`}
>
  <slot name="pre" />

  {#if loading}
    <Skeleton class="col-span-full w-28 h-6" />
  {:else}
    <h2 class="col-span-full text-xl font-semibold">{title}</h2>
  {/if}

  <slot />
</section>
