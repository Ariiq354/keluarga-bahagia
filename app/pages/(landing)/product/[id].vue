<script setup lang="ts">
  import DOMPurify from "dompurify";

  definePageMeta({
    layout: "landing",
  });
  const router = useRouter();
  const route = useRoute();
  const id = Number(route.params.id);
  const quantity = ref(1);
  const totalPrice = computed(() => (data.value?.price || 0) * quantity.value);

  const { data } = await useFetch(() => `/api/bootcamp/${id}`);

  const sanitizedHtml = computed(() =>
    import.meta.client && data.value
      ? DOMPurify.sanitize(data.value.description || "")
      : data.value?.description || ""
  );

  function bookNow() {
    router.push({
      path: "/booking", // ganti dengan path halaman booking kamu
      query: {
        bootcampId: id,
        quantity: quantity.value,
      },
    });
  }
</script>

<template>
  <div
    class="container my-8 grid h-full items-center justify-center gap-12 md:grid-cols-2"
  >
    <NuxtImg :src="data!.foto" alt="produk" class="max-h-[640px] rounded-md" />
    <div class="flex h-full flex-col gap-6">
      <div>
        <h1 class="text-center text-left text-5xl font-bold md:text-6xl">
          {{ data?.title }}
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
          ></div>
        </ul>
      </div>
      <div>
        <h2 class="mt-2 text-2xl font-semibold">Waktu & Tempat</h2>
        <ul class="ml-2 flex list-disc flex-col gap-4 px-4 text-xl">
          <li class="justify-center">
            {{ data?.place }}
            <a
              :href="data?.gmaps || ''"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:text-blue-800"
            >
              <Icon name="heroicons:map-pin-solid" size="28" />
            </a>
          </li>

          <li>{{ data?.time }}</li>
        </ul>
      </div>
      <div>
        <h2 class="mt-2 text-2xl font-semibold">Pemateri</h2>
        <ul class="ml-2 flex list-disc flex-col gap-4 px-4 text-xl">
          <li>{{ data?.speaker }}</li>
        </ul>
      </div>
      <div class="mt-6 rounded-lg border p-4 shadow-sm dark:border-gray-700">
        <h2 class="text-2xl font-semibold">Booking Tiket</h2>
        <div class="mt-4 flex flex-col gap-4">
          <label class="text-lg font-medium">
            Jumlah Tiket:
            <input
              type="number"
              v-model.number="quantity"
              min="1"
              class="mt-1 w-full rounded-md border px-4 py-2 dark:bg-gray-800 dark:text-white"
            />
          </label>
          <div class="text-xl font-semibold">
            Total Harga: {{ formatRupiah(totalPrice) }}
          </div>
          <button
            @click="bookNow"
            class="rounded-md bg-amber-500 px-6 py-3 text-white hover:bg-amber-600"
          >
            Booking Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
