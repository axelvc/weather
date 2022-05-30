<script lang="ts">
  export let titleClass = ''
  export let title: string
</script>

<section {...$$props}>
  <h3 class={'mb-1 font-semibold text-slate-500 ' + titleClass}>{title}</h3>

  <slot />
</section>
