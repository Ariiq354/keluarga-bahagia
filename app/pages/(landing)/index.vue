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
  <main class="font-sans">
    <Title>Keluarga Bahagia</Title>
    <div class="relative h-screen bg-[url('/header1.webp')] bg-cover">
      <div class="container relative z-20 grid h-full grid-cols-2">
        <div class="flex h-full w-full flex-col justify-center gap-8 p-16">
          <h1 class="text text-6xl font-bold text-black">
            Temukan Rahasia
            <span class="text-eastern-blue-500">Keluarga </span>Bahagia
          </h1>
          <p class="text-xl font-semibold text-eastern-blue-700">
            Bergabunglah dengan seminar kami dan jelajahi buku-buku unggulan
            kami untuk mempelajari cara menciptakan keluarga yang kuat dan penuh
            kasih sayang.
          </p>
          <div class="flex gap-4">
            <UButton class="shadow-lg" href="/about">Learn More</UButton>
            <UButton variant="soft" class="shadow-lg" href="/login">
              Sign Up
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white">
      <div
        class="container flex h-full flex-col items-center justify-center gap-12 py-12"
      >
        <h1 class="mb-12 text-4xl font-bold">Kami Menyediakan Beberapa Jasa</h1>
        <div class="flex gap-12">
          <div
            class="flex h-[25rem] w-[25rem] flex-col justify-end rounded-2xl bg-[url('/square2.webp')] bg-[length:42rem] bg-[center_calc(50%+50px)] p-12 shadow-xl"
          >
            <h1 class="mb-2 text-center text-2xl font-bold">Bootcamp</h1>
            <p class="text-center">
              Program ini bertujuan untuk memberikan bekal pengetahuan &
              keterampilan yang di perlukan dalam membangun kehidupan rumah
              tangga yang bahagia & harmonis.
            </p>
          </div>
          <div
            class="bg[top:20px] flex h-[25rem] w-[25rem] flex-col justify-end rounded-2xl bg-[url('/square1.webp')] bg-[length:42rem] bg-[center_calc(50%+50px)] p-12 shadow-xl"
          >
            <h1 class="mb-2 text-center text-2xl font-bold">Jodoh</h1>
            <p class="text-center">
              Banyak yang percaya bahwa jodoh adalah cerminan dari diri kita
              sendiri, jodoh adalah sebuah perjalanan yan penuh dengan kejutan &
              pembelajaran.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-12 text-white">
      <div
        class="container flex flex-col items-center justify-center gap-4 rounded-xl bg-eastern-blue-900 px-20 py-8 shadow-2xl"
      >
        <h1
          class="my-4 w-full border-b-2 py-4 text-center text-4xl font-semibold"
        >
          Daftar Bootcamp
        </h1>
        <UCarousel
          v-slot="{ item, index }"
          :items="carouselItem"
          arrows
          class="w-full"
          :ui="{
            item: 'basis-1/4 snap-start',
            container: 'rounded-lg',
          }"
          :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-start-12',
          }"
          :next-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-right-20-solid',
            class: '-end-12',
          }"
        >
          <UCard
            :ui="{
              body: {
                padding: 'sm:p-1',
              },
            }"
            class="mx-2 w-full rounded-lg bg-eastern-blue-100 text-black"
          >
            <div class="flex flex-col items-center justify-center gap-4 p-2">
              <NuxtImg :src="item.image" alt="produk" class="rounded-md" />
              <UButton
                class="bg-primary flex w-full justify-center py-2"
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
        </UCarousel>
        <UButton class="w-fit" to="/product">Lihat Semua Event</UButton>
      </div>
    </div>
    <div class="h-screen bg-[url('/header2.webp')] bg-cover">
      <div class="container flex h-full justify-end">
        <div class="flex h-full w-[50%] flex-col justify-center gap-12">
          <h1 class="text-6xl font-bold">Seminar Pranikah</h1>
          <ul class="flex list-disc flex-col gap-4 text-xl">
            <li>
              Membantu Anda memahami esensi pernikahan sebagai ibadah dan
              separuh agama yang sempurna
            </li>
            <li>
              Mempersiapkan Anda untuk membangun rumah tangga yang kokoh dan
              bahagia
            </li>
            <li>
              Memberikan bekal ilmu dan keterampilan praktis untuk menghadapi
              berbagai tantangan dalam pernikahan
            </li>
            <li>Memperkuat komitmen dan komunikasi dengan pasangan</li>
          </ul>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              - [ Rino Amri, SE, M.Pd, chc] Konsultan Jelajah Diri
            </div>
            <div class="flex items-center gap-2">
              <div />
              - [ Andri setiawan ] Guru Besar ponpes Dahlan ikhsan
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-eastern-blue-700 px-12 py-12 text-eastern-blue-100">
      <p class="container w-2/3 text-center text-2xl leading-loose">
        "Menikah adalah perjalanan yang indah, namun membutuhkan persiapan yang
        matang. Bangunlah fondasi pernikahan yang kokoh dan bahagia. Jangan ragu
        untuk mendaftar dan persiapkan diri Anda untuk menyambut masa depan yang
        indah bersama pasangan tercinta."
      </p>
    </div>
  </main>
</template>
