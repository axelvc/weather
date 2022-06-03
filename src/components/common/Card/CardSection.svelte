<script lang="ts">
  import Skeleton from '@/components/common/Skeleton.svelte'
  export let title: string = ''
  export let loading = false
</script>

<section class={$$props.class}>
  {#if loading}
    <Skeleton class="w-24 h-4 mt-1 mb-2" />
    <slot><Skeleton class="w-full h-5" /></slot>
  {:else}
    <h3 class="mb-1 text-sm font-semibold text-slate-500">{title}</h3>
    <slot />
  {/if}
</section>
