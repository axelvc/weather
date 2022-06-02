<script lang="ts">
  export let date: Date
  export let formatOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' }

  const isoDate = date.toISOString()
  const localeTime = date.toLocaleString('en', formatOptions)
</script>

<time {...$$restProps} datetime={isoDate}>{localeTime}</time>
