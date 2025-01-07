<script setup lang="ts">
  definePageMeta({
    layout: "landing",
  });
  const route = useRoute();
  const id = Number(route.params.id);

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
  <div class="my-12 flex flex-col gap-4">
    <div class="container w-full rounded-lg bg-eastern-blue-300 p-3">
      <div class="flex w-full gap-12 rounded-md bg-white p-4">
        <NuxtImg
          :src="carouselItem[id]!.image"
          alt="produk"
          width="300"
          class="rounded-md"
        />
        <div class="mt-auto flex flex-col gap-4 text-4xl">
          <h1 class="mb-4 font-bold">
            Rahasia Keluarga Bahagia: Keluarga, Anak
          </h1>
          <div class="mb-2 flex w-full justify-between gap-4">
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
      </div>
    </div>
    <div class="container rounded-lg bg-eastern-blue-300 p-4">
      <h1 class="mb-2 text-2xl font-bold text-eastern-blue-700">Tempat</h1>
      <p class="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit
      </p>
    </div>
    <div class="container flex flex-col gap-4 text-lg">
      <h1>Bootcamp Bogor</h1>
      <div class="w-[50%]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia harum
        dolorem cum veritatis. Fugiat aliquid eum voluptates eaque laboriosam
        laudantium ab nemo, perferendis impedit possimus exercitationem
        blanditiis, earum fugit molestiae.
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Exercitationem, magnam placeat, reiciendis ea alias, accusantium
        similique eaque quidem quisquam cum quae autem dolorum quia repellendus
        earum doloremque animi? Sit, perspiciatis.
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui impedit
        molestiae iusto, quasi velit enim, autem ad alias ratione illum, amet
        ipsum ut laborum mollitia et ea. Dolor, magni impedit?
      </div>
    </div>
  </div>
</template>
