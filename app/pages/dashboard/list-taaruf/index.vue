<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    columns,
    getInitialFormData,
    schema,
    statusOptions,
    type Schema,
  } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("Daftar Pengajuan Taaruf");
  });

  const { data, status, refresh } = await useLazyFetch("/api/taaruf");
  const state = ref(getInitialFormData());

  const modalLoading = ref(false);
  const modalOpen = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    modalLoading.value = true;
    try {
      await $fetch("/api/taaruf/edit", {
        method: "POST",
        body: event.data,
      });
      modalOpen.value = false;
      await refresh();
    } catch (error: any) {
      useToastError(String(error.statusCode), error.data.message);
    } finally {
      modalLoading.value = false;
    }
  }

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

  function clickUpdate(itemData: ExtractObjectType<typeof data.value>) {
    modalOpen.value = true;
    state.value.statusPersetujuan = itemData.status;
    state.value.id = itemData.id;
    state.value.pemohonId = itemData.pemohonId;
    state.value.tujuanId = itemData.tujuanId;
  }
</script>

<template>
  <Title>Pengajuan Taaruf</Title>
  <main>
    <UModal v-model:open="modalOpen" title="Edit Status">
      <template #body>
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormField label="Status Taaruf" name="statusPersetujuan">
            <USelectMenu
              v-model="state.statusPersetujuan"
              :items="statusOptions"
              placeholder="Pilih Status Taaruf"
            />
          </UFormField>

          <div class="flex w-full justify-end gap-2">
            <UButton
              icon="i-heroicons-x-mark-16-solid"
              variant="ghost"
              :disabled="modalLoading"
              @click="modalOpen = false"
            >
              Batal
            </UButton>
            <UButton
              type="submit"
              icon="i-heroicons-check-16-solid"
              :loading="modalLoading"
            >
              Simpan
            </UButton>
          </div>
        </UForm>
      </template>
    </UModal>
    <UCard>
      <CrudCard
        :data="data"
        :delete-disabled="tableSelected ? tableSelected.length === 0 : true"
        :add-button="false"
        :delete-function="clickDelete"
      />
      <AppTable
        v-model="tableSelected"
        :loading="status === 'pending'"
        :data="data"
        :columns="columns"
        @edit-click="clickUpdate"
      />
    </UCard>
  </main>
</template>
