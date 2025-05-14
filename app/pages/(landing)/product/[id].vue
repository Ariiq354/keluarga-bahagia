<script setup lang="ts">
import DOMPurify from "dompurify";

definePageMeta({
  layout: "landing",
});
const route = useRoute();
const id = Number(route.params.id);

const { data } = await useFetch(() =>
  `/api/bootcamp/${id}`
);

 const sanitizedHtml = computed(() =>
    import.meta.client && data.value
      ? DOMPurify.sanitize(data.value.description || "")
      : data.value?.description || ""
  );

</script>

<template>
  <div class="container my-8 grid h-full items-center justify-center gap-12 md:grid-cols-2">
    <NuxtImg :src="data!.foto" alt="produk" class="max-h-[640px] rounded-md" />
    <div class="flex h-full flex-col gap-6">
      <div>
        <h1 class="text-center text-left text-5xl font-bold md:text-6xl">
          {{data?.title}}
        </h1>
        <h2 class="mt-4 text-3xl font-semibold text-amber-500">
          {{ formatRupiah(data?.price) }}
        </h2>
      </div>
      <div>
        <h2 class="mt-2 text-2xl font-semibold">Deskripsi</h2>
        
        <ul class="ml-2 flex list-disc flex-col gap-4 px-4 text-xl">
          <div
            class="tiptap prose prose-base w-full max-w-none"
            v-html="sanitizedHtml"
            >
        </div></ul>
      </div>
      <div>
        <h2 class="mt-2 text-2xl font-semibold">Waktu & Tempat</h2>
        <ul class="ml-2 flex list-disc flex-col gap-4 px-4 text-xl">
          <li>{{data?.place}}</li>
          <li>{{data?.time}}</li>
        </ul>
      </div>
      <div>
        <h2 class="mt-2 text-2xl font-semibold">Pemateri</h2>
        <ul class="ml-2 flex list-disc flex-col gap-4 px-4 text-xl">
          <li>{{data?.speaker}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
