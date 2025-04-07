<script setup lang="ts">
  definePageMeta({
    layout: "landing",
  });

  const carouselItem = [
    {
      image: "/1.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
    {
      image: "/2.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
    {
      image: "/3.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
    {
      image: "/4.webp",
      title: "lorem ipsum",
      waktu: "30 Juni 2024",
      tempat: "bogor",
    },
  ];
</script>

<template>
  <main class="px-4">
    <div
      class="bg-eastern-blue-200 container my-12 flex flex-col items-center justify-center gap-4 rounded-xl p-4 shadow-2xl md:px-20 md:py-8"
    >
      <h1
        class="my-4 w-full border-b-2 py-4 text-center text-4xl font-semibold"
      >
        Daftar Bootcamp
      </h1>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UCard
          v-for="(item, index) in carouselItem"
          :key="index"
          class="bg-eastern-blue-100 w-full rounded-lg text-black md:mx-2"
        >
          <div class="flex flex-col items-center justify-center gap-4 p-2">
            <NuxtImg :src="item.image" alt="produk" class="rounded-md" />
            <UButton
              class="bg-primary flex w-full justify-center py-2 text-black"
              :to="`/product/${index}`"
            >
              Klik Untuk Pesan Event ini
            </UButton>
            <h1 class="text-lg font-bold">
              Rahasia Keluarga Bahagia: Keluarga, Anak
            </h1>
            <div class="mb-2 flex w-full justify-between gap-4 text-sm">
              <div class="flex flex-col gap-2">
                <h1 class="text-primary font-serif font-light">Waktu</h1>
                <p class="font-bold">30 Juni 2024</p>
              </div>
              <div class="flex flex-col gap-2">
                <h1 class="text-primary font-serif font-light">Tempat</h1>
                <p class="font-bold">Bogor</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </main>
</template>
