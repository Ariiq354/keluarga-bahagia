<script setup lang="ts">
  definePageMeta({
    layout: "landing",
  });
  const router = useRouter();
  const route = useRoute();
  const id = route.query.bootcampId;
  const quantity = Number(route.query.quantity || 1);
  const phone = ref("");
  const paymentMethod = ref("bank_transfer");

  const totalPrice = computed(() => (data.value?.price || 0) * quantity);

  const { data } = await useFetch(() => `/api/bootcamp/${id}`);

  function bookNow() {
    router.push({
      path: "/booking", // ganti dengan path halaman booking kamu
      query: {
        bootcampId: id,
        quantity: quantity,
      },
    });
  }

  function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
    return arr.reduce(
      (acc, item) => {
        const group = item[key] as string;
        acc[group] = acc[group] || [];
        acc[group].push(item);
        return acc;
      },
      {} as Record<string, T[]>
    );
  }

  const paymentOptions = [
    {
      label: "QRIS",
      value: "qris",
      logo: "/icons/qris.png",
      group: "QRIS",
      note: "Pembayaran melalui BCA dan Bank Lainnya bisa menggunakan QRIS.",
    },
    {
      label: "Bank BRI",
      value: "bri",
      logo: "/icons/bri.png",
      group: "Transfer Bank (Virtual Account)",
    },
    {
      label: "Bank BNI",
      value: "bni",
      logo: "/icons/bni.png",
      group: "Transfer Bank (Virtual Account)",
    },
    {
      label: "Bank Mandiri",
      value: "mandiri",
      logo: "/icons/mandiri.png",
      group: "Transfer Bank (Virtual Account)",
    },
    {
      label: "Gopay",
      value: "gopay",
      logo: "/icons/gopay.png",
      group: "E-Wallet",
    },
  ];
</script>

<template>
  <div
    class="container my-8 grid h-full items-center justify-center gap-12 md:grid-cols-2"
  >
    <NuxtImg :src="data!.foto" alt="produk" class="max-h-[640px] rounded-md" />
    <div class="flex h-full flex-col gap-6">
      <div>
        <h1 class="text-left text-5xl font-bold md:text-6xl">Pesan Tiket</h1>
        <h1 class="text-left text-5xl font-bold md:text-6xl">
          {{ data?.title }}
        </h1>
        <h2 class="mt-4 text-3xl font-semibold text-amber-500">
          {{ formatRupiah(data?.price) }}
        </h2>
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
              class="text-gray-600 hover:text-gray-800"
            >
              <Icon name="heroicons:map-pin-solid" size="28" />
            </a>
          </li>

          <li>{{ data?.time }}</li>
        </ul>
      </div>
      <div class="mt-2 space-y-4">
        <div>
          <label class="block text-lg font-medium">Nomor HP</label>
          <input
            v-model="phone"
            type="tel"
            placeholder="Contoh: 081234567890"
            class="mt-1 w-full rounded border px-4 py-2 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div class="space-y-6">
          <div
            v-for="(group, index) in groupBy(paymentOptions, 'group')"
            :key="index"
          >
            <h3 class="mb-1 text-lg font-medium">{{ group[0]?.group }}</h3>
            <p v-if="group[0]?.note" class="mb-2 text-sm text-gray-500">
              {{ group[0].note }}
            </p>

            <div class="grid gap-3">
              <label
                v-for="option in group"
                :key="option.value"
                class="flex cursor-pointer items-center gap-4 rounded border p-3 hover:border-amber-500"
                :class="{
                  'border-amber-500 bg-amber-50':
                    paymentMethod === option.value,
                  border: paymentMethod !== option.value,
                }"
              >
                <input
                  type="radio"
                  class="hidden"
                  v-model="paymentMethod"
                  :value="option.value"
                />
                <img
                  :src="option.logo"
                  :alt="option.label"
                  class="h-6 w-auto"
                />
                <span class="text-lg font-medium">{{ option.label }}</span>
                <span class="ml-auto">
                  <div
                    class="h-5 w-5 rounded-full border-2"
                    :class="{
                      'border-amber-500 bg-amber-500':
                        paymentMethod === option.value,
                      'border-gray-400 bg-white':
                        paymentMethod !== option.value,
                    }"
                  />
                </span>
              </label>
            </div>
          </div>
        </div>
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
