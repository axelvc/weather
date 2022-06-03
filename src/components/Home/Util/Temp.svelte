<script lang="ts">
  import AnimatedNumber from '@/components/common/AnimatedNumber.svelte'
  export let temp: number
</script>

<span class={`inline-block after:content-['°'] ${$$props.class || ''}`}>
  <AnimatedNumber value={temp} />
</span>
