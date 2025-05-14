<template>
  <div class="h-[400px] w-full">
    <GoogleMap
      api-key="AIzaSyDcJTgmnxZFsV4ar-qu-bpQLjmoDIhWJvI"
      :center="center"
      :zoom="14"
      style="width: 100%; height: 100%"
      @click="onMapClick"
    >
      <Marker v-if="marker" :options="{ position: marker }" />
    </GoogleMap>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";

  const emit = defineEmits<{
    (e: "picked", link: string): void;
  }>();

  const center = ref({ lat: -6.2, lng: 106.816666 }); // Jakarta
  const marker = ref<{ lat: number; lng: number } | null>(null);

  function onMapClick(e: google.maps.MapMouseEvent) {
    if (e.latLng) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      marker.value = { lat, lng };
      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      emit("picked", link);
    }
  }
</script>
