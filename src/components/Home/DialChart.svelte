<script lang="ts">
  import { onMount } from 'svelte'
  export let total = 100
  export let value: number
  export let icon: string
  export let suffix = ''

  let valuePath: SVGPathElement

  onMount(() => {
    const length = valuePath.getTotalLength()
    const filledPercent = value / total

    const dashArray = length
    const dashOffset = length * (1 - filledPercent)

    valuePath.setAttribute('stroke-dasharray', `${dashArray}`)
    valuePath.setAttribute('stroke-dashoffset', `${dashOffset}`)
  })
</script>

<div class="w-20 relative flex justify-center">
  <span class="absolute bottom-0 left-1/2 -translate-x-1/2">{icon}</span>

  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    {value}{suffix}
  </span>

  <!-- chart -->
  <svg viewBox="0 0 96 96">
    <path
      class="stroke-slate-200"
      d="M21,84 C10.07,75.8,3,62.72,3,48C3,23.14,23.14,3,48,3s45,20.14,45,45c0,14.72-7.07,27.8-18,36"
    />

    <path
      bind:this={valuePath}
      class="stroke-slate-900"
      d="M21,84 C10.07,75.8,3,62.72,3,48C3,23.14,23.14,3,48,3s45,20.14,45,45c0,14.72-7.07,27.8-18,36"
    />
  </svg>
</div>

<style>
  path {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
  }
</style>
