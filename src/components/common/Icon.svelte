<script lang="ts">
  export let name: string
  export let alt = ''
</script>

<img class={`inline-block h-6 w-6 align-bottom ${$$props.class || ''}`} src={`icons/${name}.svg`} {alt} />
