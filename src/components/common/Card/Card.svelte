<script lang="ts">
  export let title: string
</script>

<section class="flex flex-col gap-6 m-3 p-6 rounded-lg bg-slate-50 shadow-lg shadow-slate-200">
  <slot name="pre" />
  <h2 class="text-2xl font-semibold">{title}</h2>
  <slot />
</section>
