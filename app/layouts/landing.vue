<script setup lang="ts">
  const color = useColorMode();

  onMounted(() => {
    color.preference = "light";
  });
</script>

<template>
  <LandingNavbar />
  <slot />
  <LandingFooter />
</template>
