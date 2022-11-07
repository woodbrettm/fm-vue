<script setup lang="ts">

  import DetailsCard from '../DetailsCard.vue';
  import DetailsGridItem from './DetailsGridItem.vue';

</script>

<template>

  <ul 
    class="DetailsGrid"
    s:display="flex"
    s:rounded="full"
    s:max-w="screen-lg"
    s:flex="wrap"
  >

    <DetailsGridItem>
      <DetailsCard
        headingText="Sedans"
        cardStyle="orange"
      >
        Choose a sedan for its affordability and excellent fuel economy.
        Ideal for cruising in the city or on your next road trip.
      </DetailsCard>
    </DetailsGridItem>

    <DetailsGridItem>
      <DetailsCard
        headingText="SUVs"
        cardStyle="skobeloff"
      >
        Take an SUV for its spacious interior, power, and versatility.
        Perfect for your next family vacation and off-road adventures.
      </DetailsCard>
    </DetailsGridItem>

    <DetailsGridItem>
      <DetailsCard
        headingText="Luxury"
        cardStyle="green"
      >
        Cruise in the best car brands without the bloated prices.
        Enjoy the enhanced comfort of a luxury rental and arrive
        in style.
      </DetailsCard>
    </DetailsGridItem>

  </ul>

</template>
