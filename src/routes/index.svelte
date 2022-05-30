<script lang="ts">
  import Card from '@/components/common/Card/Card.svelte'
  import CardSection from '@/components/common/Card/CardSection.svelte'
  import DialChart from '@/components/Home/DialChart.svelte'
  import Compass from '@/components/Home/Compass.svelte'
</script>

<Card title="Today">
  <div class="grid gap-[inherit] grid-cols-2 grid-rows-2">
    <CardSection title="Cloud Cover" titleClass="text-center" class="w-24">
      <DialChart value={90} icon="☁️" suffix="%" />
    </CardSection>

    <CardSection title="Humidity" titleClass="text-center" class="w-24">
      <DialChart value={65} icon="💧️" suffix="%" />
    </CardSection>

    <CardSection title="UV Index" titleClass="text-center" class="w-24">
      <DialChart value={2} total={11} icon="💡" />
    </CardSection>

    <CardSection title="Wind" titleClass="text-center" class="w-24">
      <Compass velocity={22} direction={'N'} />
    </CardSection>
  </div>
</Card>
