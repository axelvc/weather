<script lang="ts">
  export let title: string
</script>

<section class={`grid gap-6 mx-3 my-6 p-6 rounded-lg bg-slate-50 shadow-lg shadow-slate-200 ${$$props.class || ''}`}>
  <slot name="pre" />
  <h2 class="col-span-full text-xl font-semibold">{title}</h2>
  <slot />
</section>
