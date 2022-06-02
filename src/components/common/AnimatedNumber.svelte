<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  export let value: number
  export let initial = 0

  const renderVal = tweened(initial, {
    duration: 1000,
    easing: cubicOut,
  })

  $: renderVal.set(value)
</script>

{$renderVal.toFixed(1).replace('.0', '')}
