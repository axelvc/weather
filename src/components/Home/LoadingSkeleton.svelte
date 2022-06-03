<script lang="ts">
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import Divisor from '@/components/common/Divisor.svelte'
  import Skeleton from '@/components/common/Skeleton.svelte'
  import SwipeIndicator from '@/components/Home/Util/SwipeIndicator.svelte'
</script>

<p class="sr-only">Loading</p>

<div class="sticky top-0 grid place-items-center md:flex-1 h-screen">
  <div class="absolute top-3 left-3 space-y-2">
    <Skeleton class="w-48 h-5" />
    <Skeleton class="w-36 h-4" />
  </div>

  <div class="space-y-2 grid justify-items-center md:mx-16">
    <Skeleton class="w-64 h-40" />
    <Skeleton class="w-52 h-5" />
    <Skeleton class="w-56 h-5" />
    <Skeleton class="w-52 h-5" />
  </div>
</div>

<div class="w-full md:max-w-lg -translate-y-20 sm:translate-y-0 bg-slate-100">
  <Card loading class="grid grid-cols-2">
    <SwipeIndicator slot="pre" />

    <CardSection loading class="m-auto">
      <Skeleton class="w-20 h-20 m-auto !rounded-full" />
    </CardSection>

    <CardSection loading class="m-auto">
      <Skeleton class="w-20 h-20 m-auto !rounded-full" />
    </CardSection>

    <CardSection loading class="m-auto">
      <Skeleton class="w-20 h-20 m-auto !rounded-full" />
    </CardSection>

    <CardSection loading class="m-auto">
      <Skeleton class="w-20 h-20 m-auto !rounded-full" />
    </CardSection>
  </Card>

  <Card loading class="overflow-hidden">
    <CardSection loading>
      <div class="flex gap-1">
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
      </div>
    </CardSection>

    <Divisor />

    <CardSection loading>
      <div class="flex gap-1">
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
        <Skeleton class="flex-1 h-28" />
      </div>
    </CardSection>
  </Card>

  <Card loading class="grid grid-cols-2">
    <CardSection loading />
    <CardSection loading />

    <Divisor />

    <CardSection loading />
    <CardSection loading />
    <CardSection loading />
    <CardSection loading />
  </Card>

  <Card loading class="grid grid-cols-2">
    <CardSection loading />
    <CardSection loading />
    <CardSection loading />
    <CardSection loading />

    <Divisor />

    <CardSection loading />
    <CardSection loading />
  </Card>
</div>
