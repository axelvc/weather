<script lang="ts">
  export let date: Date
  export let formatOptions: Intl.DateTimeFormatOptions | undefined

  const isoDate = date.toISOString()
  const localeTime = date.toLocaleString(navigator.language, formatOptions)
</script>

<time {...$$restProps} datetime={isoDate}>{localeTime}</time>
