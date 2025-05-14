<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { data } = await useLazyFetch(`/api/bootcamp`);

// Pagination logic
const currentPage = ref(1);
const itemsPerPage = 4;

const paginatedBootcamps = computed(() => {
  if (!data.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return data.value.slice(start, start + itemsPerPage);
});

const itemRangeText = computed(() => {
  if (!data.value) return '';
  const total = data.value.length;
  const start = (currentPage.value - 1) * itemsPerPage + 1;
  const end = Math.min(start + itemsPerPage - 1, total);
  return `Menampilkan ${start}-${end} dari ${total} item`;
});


</script>

<template>
  <div class="bg-eastern-blue-200 bg-cover px-12 py-12">
    <div class="px-8 text-4xl font-semibold">Daftar Bootcamp</div>
  </div>
  <main class="mb-8 px-12">
    <div class="mt-8 mb-4 px-8"><span>{{itemRangeText}}</span></div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
      <UCard
        v-for="item in paginatedBootcamps"
        :key="item.id"
        class="flex h-full min-w-[64px] flex-col rounded-none p-0 text-black"
      >
        <div class="flex h-full flex-col justify-between gap-4">
          <NuxtLink :to="`/product/${item.id}`" class="flex flex-col gap-4 transition hover:opacity-80">
            <NuxtImg :src="item.foto" alt="produk" class=" max-h-64 h-64" />
            <h1 class="text-lg font-bold">{{ item.title }}</h1>
            <h3 class="font-semibold">{{ formatRupiah(item.price) }}</h3>
          </NuxtLink>

          <UButton class="bg-primary w-max px-4 py-2 text-black">
            Tambahkan ke keranjang
          </UButton>
        </div>
      </UCard>
    </div>
    <div class="mt-8 flex justify-center">
      <UPagination
        v-model:page="currentPage"
        :total="data?.length || 0"
        :page-count="itemsPerPage"
      />
    </div>
  </main>
</template>
