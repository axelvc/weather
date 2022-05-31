<script lang="ts">
  export let title: string
</script>

<section {...$$props}>
  <h3 class="mb-1 text-sm font-semibold text-slate-500">{title}</h3>
  <slot />
</section>
