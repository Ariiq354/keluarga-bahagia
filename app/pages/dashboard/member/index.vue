<script setup lang="ts">
  onMounted(() => {
    defineTopbarTitle("Pencarian member");
  });
  const user = useUser();

  const { data } = useLazyFetch("/api/member");
  const { data: dataTaaruf } = useLazyFetch(`/api/taaruf/${user.value?.id}`);

  const modalState = ref<ExtractObjectType<typeof data.value>>();
  const modalOpen = ref(false);

  function handleClick(id: number) {
    modalOpen.value = true;
    modalState.value = data.value?.find((item) => item.id === id);
  }

  const isLoading = ref(false);
  async function handleSubmit(id: number) {
    isLoading.value = true;
    try {
      await $fetch("/api/taaruf", {
        method: "POST",
        body: {
          pemohonId: user.value?.id,
          tujuanId: id,
        },
      });
      modalOpen.value = false;
      useToastSuccess("Permohonan Berhasil", "Proses akan segera diurus admin");
    } catch (error: any) {
      useToastError(String(error.statusCode), error.data.message);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <main>
    <Title>Pencarian Member</Title>
    <UModal v-model="modalOpen" :ui="{ width: 'sm:max-w-xl' }" prevent-close>
      <div class="px-4 py-5">
        <div
          class="mb-4 flex items-center justify-between border-b-2 border-gray-200 pb-4 dark:border-gray-700"
        >
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Detail Member
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1 rounded-full"
            @click="modalOpen = false"
          />
        </div>

        <div class="mt-12 flex flex-col p-6">
          <div class="flex gap-4">
            <div
              class="flex aspect-square w-32 items-center justify-center bg-gray-300"
            >
              <NuxtImg :src="modalState?.detail.foto" />
            </div>
            <div class="flex flex-col justify-center">
              <h1 class="text-lg font-bold">{{ modalState?.namaLengkap }}</h1>
              <h2 class="text-primary">{{ modalState?.detail.deskripsi }}</h2>
            </div>
          </div>

          <div class="mt-6 flex gap-12">
            <div class="flex items-center gap-2">
              <UIcon
                name="i-heroicons-information-circle"
                size="40"
                class="text-primary"
              />
              <div class="flex flex-col">
                <h1 class="text-primary">Status</h1>
                <h2 class="font-bold">{{ modalState?.detail.statusKawin }}</h2>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <UIcon
                name="i-heroicons-calendar-date-range"
                size="40"
                class="text-primary"
              />
              <div class="flex flex-col">
                <h1 class="text-primary">Tanggal Lahir</h1>
                <h2 class="font-bold">{{ modalState?.detail.tanggalLahir }}</h2>
              </div>
            </div>
          </div>

          <table class="mt-12 w-full text-sm">
            <tbody>
              <tr>
                <td class="whitespace-nowrap py-2 font-bold">Nama Ayah:</td>
                <td class="text-primary text-right capitalize">
                  {{ modalState?.detail.namaAyah }}
                </td>
              </tr>
              <tr>
                <td class="py-2 font-bold">Suku:</td>
                <td class="text-primary text-right capitalize">
                  {{ modalState?.detail.suku }}
                </td>
              </tr>
              <tr>
                <td class="py-2 font-bold">Pendidikan:</td>
                <td class="text-primary text-right capitalize">
                  {{ modalState?.detail.pendidikan }}
                </td>
              </tr>
              <tr>
                <td class="py-2 font-bold">Pekerjaan:</td>
                <td class="text-primary text-right capitalize">
                  {{ modalState?.detail.pekerjaan }}
                </td>
              </tr>
              <tr>
                <td class="py-2 font-bold">TB / BB:</td>
                <td class="text-primary text-right capitalize">
                  {{ modalState?.detail.tinggi }} /
                  {{ modalState?.detail.berat }}
                </td>
              </tr>
              <tr>
                <td class="py-2 font-bold">Hobi:</td>
                <td class="text-primary text-right capitalize">
                  {{ modalState?.detail.hobi }}
                </td>
              </tr>
              <tr>
                <td class="font-bold">Alamat:</td>
                <td class="text-primary text-right">
                  {{ modalState?.detail.provinsi }} /
                  {{ modalState?.detail.kota }} /
                  {{ modalState?.detail.kecamatan }} /
                  {{ modalState?.detail.kelurahan }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="mt-12 text-purple-900 dark:text-purple-200">
            <h1 class="font-bold">Kriteria Pasangan</h1>
            <p class="mt-2 text-sm">
              {{ modalState?.detail.kriteria }}
            </p>
          </div>
          <div class="mt-12 flex w-full justify-end gap-2">
            <UButton variant="soft" @click="modalOpen = false"> Tutup </UButton>
            <UButton
              :disabled="
                isLoading ||
                dataTaaruf?.some((item) => item.tujuanId === modalState?.id)
              "
              @click="handleSubmit(modalState!.id)"
            >
              Ajukan Taaruf
            </UButton>
          </div>
        </div>
      </div>
    </UModal>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <UCard v-for="(item, index) in data" :key="index">
        <div class="flex flex-col">
          <div class="flex gap-4">
            <div>
              <div
                class="flex aspect-square w-32 items-center justify-center overflow-hidden bg-gray-300 dark:bg-gray-700"
              >
                <NuxtImg :src="item.detail.foto" />
              </div>
              <p
                class="mt-4 rounded-md bg-eastern-blue-100 p-2 text-center text-lg font-bold shadow-lg"
              >
                {{ item.detail.kodeUser }}
              </p>
            </div>
            <div class="flex flex-col justify-center">
              <h1 class="text-lg font-bold">{{ item.namaLengkap }}</h1>
              <h2 class="text-primary">{{ item.detail.deskripsi }}</h2>
            </div>
          </div>
          <div class="mt-4">
            <table class="w-full">
              <tbody>
                <tr class="border-y border-gray-200 dark:border-gray-700">
                  <td>Status</td>
                  <td>:</td>
                  <td class="py-2 pl-4">{{ item.detail.statusKawin }}</td>
                </tr>
                <tr class="border-y border-gray-200 dark:border-gray-700">
                  <td>Tanggal Lahir</td>
                  <td>:</td>
                  <td class="py-2 pl-4">{{ item.detail.tanggalLahir }}</td>
                </tr>
                <tr class="border-y border-gray-200 dark:border-gray-700">
                  <td>Suku</td>
                  <td>:</td>
                  <td class="py-2 pl-4">{{ item.detail.suku }}</td>
                </tr>
                <tr class="border-y border-gray-200 dark:border-gray-700">
                  <td class="py-2">Pendidikan / Pekerjaan</td>
                  <td>:</td>
                  <td class="py-2 pl-4">
                    {{ item.detail.pendidikan }} / {{ item.detail.pekerjaan }}
                  </td>
                </tr>
                <tr class="border-y border-gray-200 dark:border-gray-700">
                  <td>TB / BB</td>
                  <td>:</td>
                  <td class="py-2 pl-4">
                    {{ item.detail.tinggi }} / {{ item.detail.berat }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <UButton
            variant="soft"
            class="mt-12 flex w-full justify-center"
            @click="handleClick(item.id)"
          >
            Lihat Detail
          </UButton>
        </div>
      </UCard>
    </div>
  </main>
</template>
