<script lang="ts">
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'
  import AnimatedNumber from '@/components/common/AnimatedNumber.svelte'
  import Icon from '@/components/common/Icon.svelte'
  export let total = 100
  export let value: number
  export let icon: string
  export let suffix = ''

  let valuePath: SVGPathElement
  let strokeLength = 0
  let strokeOffset = tweened(0, {
    duration: 1500,
    easing: cubicOut,
  })

  $: if (valuePath) {
    strokeLength = valuePath.getTotalLength()
    const filledPercent = value / total
    const offset = strokeLength * (1 - filledPercent)

    strokeOffset.set(strokeLength, { duration: 0 })
    strokeOffset.set(offset)
  }
</script>

<div class="w-20 relative flex justify-center">
  <span class="absolute bottom-0 left-1/2 -translate-x-1/2">
    <Icon name={icon} />
  </span>

  <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <AnimatedNumber {value} />{suffix}
  </span>

  <!-- chart -->
  <svg viewBox="0 0 96 96">
    <path
      class="stroke-slate-200"
      d="M21,84 C10.07,75.8,3,62.72,3,48C3,23.14,23.14,3,48,3s45,20.14,45,45c0,14.72-7.07,27.8-18,36"
    />

    <path
      bind:this={valuePath}
      stroke-dasharray={strokeLength}
      stroke-dashoffset={$strokeOffset}
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
