<script setup lang="ts">
  const color = useColorMode();

  onMounted(() => {
    color.preference = "light";
  });
</script>

<template>
  <div class="grainy">
    <LandingNavbar />
    <slot />
    <LandingFooter />
  </div>
</template>
