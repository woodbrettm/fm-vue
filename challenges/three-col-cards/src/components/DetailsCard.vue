<script setup lang="ts">

  import cardIcon from '../assets/car.svg';
  import BaseParagraph from './BaseParagraph.vue';
  import BaseButton from './BaseButton.vue';

  const props = defineProps<{
    headingText?: string,
    cardStyle?: 'orange' | 'skobeloff' | 'green',
  }>();

</script>

<template>

  <!-- safelist.vue -->

  <!-- 
    <div
      s:bg="orange"
      s:bg="skobeloff"
      s:bg="green"
    >
  -->

  <div 
    class="DetailsCard"
    :s:bg="cardStyle"
    s:p="12"
    s:h="full"
    s:display="flex"
    s:flex="col"
    s:items="start"
  >

    <img
      class="DetailsCard-icon"
      :src="cardIcon"
      alt=""
    >

    <h3
      class="DetailsCard-title"
      s:font="bold shoulders"
      s:text="5xl uppercase gray"
      s:my="8"
    >
      {{ headingText }}
    </h3>

    <BaseParagraph>
      <slot></slot>
    </BaseParagraph>

    <BaseButton
      text="Learn More"
      :textColor="cardStyle"
      href="/"
    />

  </div>

</template>
