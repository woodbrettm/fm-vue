<script setup lang="ts">

  const props = defineProps<{
    href?: string,
    text?: string,
    textColor?: 'orange' | 'skobeloff' | 'green',
  }>();

</script>

<template>

  <!-- safelist.vue -->

  <!-- 
    <div
      s:text="orange"
      s:text="skobeloff"
      s:text="green"
    >
  -->

  <a
    class="BaseButton"
    :href="href"
    s:font="lexend regular"
    :s:text="textColor"
    s:display="inline-block"
    s:bg="gray"
    s:px="8"
    s:py="3"
    s:rounded="full"
    s:mt="auto"
  >
    {{ text }}
  </a>

</template>