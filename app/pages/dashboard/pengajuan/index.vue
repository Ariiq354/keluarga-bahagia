<script setup lang="ts">
  import { json2Csv } from "~/utils";
  import { columns } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("Pengajuan Taaruf");
  });
  const user = useUser();

  const { data, status, refresh } = await useLazyFetch(
    `/api/taaruf/${user.value?.id}`
  );

  const tableSelected = ref<ExtractObjectType<typeof data.value>[]>([]);
  function clickDelete() {
    async function onDelete() {
      const bodyObject = tableSelected.value!.map((item) => {
        return {
          id: item.id,
          pemohonId: item.id,
          tujuanId: item.tujuanId,
        };
      });
      await $fetch("/api/taaruf", {
        method: "DELETE",
        body: bodyObject,
      });
      if (tableSelected.value) {
        tableSelected.value = [];
      }
      await refresh();
    }

    openConfirmModal(onDelete);
  }
</script>

<template>
  <main>
    <Title>Pengajuan Taaruf</Title>
    <UCard>
      <div
        class="mb-6 flex items-center justify-between gap-2 rounded-lg border border-gray-200 p-3 dark:border-gray-700"
      >
        <UButton
          icon="i-heroicons-trash"
          variant="soft"
          class="gap-2 text-xs text-black disabled:opacity-50 md:text-base dark:text-white"
          :disabled="tableSelected ? tableSelected.length === 0 : true"
          @click="clickDelete"
        >
          Hapus
        </UButton>
        <UButton
          icon="i-heroicons-arrow-up-tray"
          variant="soft"
          class="gap-2 text-xs text-black disabled:opacity-50 md:text-base dark:text-white"
          :disabled="!(data && data.length > 0)"
          @click="json2Csv(data!)"
        >
          Ekspor
        </UButton>
      </div>
      <AppTable
        v-model="tableSelected"
        label="Daftar Taaruf"
        :loading="status === 'pending'"
        :data="data"
        :columns="columns"
        :action="false"
      >
      </AppTable>
    </UCard>
  </main>
</template>
