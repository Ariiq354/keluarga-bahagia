<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    columns,
    getInitialFormData,
    schema,
    type Schema,
  } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("Jurusan");
  });

  const { data, status, refresh } = await useLazyFetch("/api/jurusan");
  const state = ref(getInitialFormData());

  const modalOpen = ref(false);
  const modalLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    modalLoading.value = true;
    try {
      await $fetch("/api/jurusan", {
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

  function clickAdd() {
    state.value = getInitialFormData();
    modalOpen.value = true;
  }

  const tableSelected = ref<ExtractObjectType<typeof data.value>[]>([]);
  function clickDelete() {
    async function onDelete() {
      const idArray = tableSelected.value!.map((item) => item.id);
      await $fetch("/api/taaruf", {
        method: "DELETE",
        body: {
          id: idArray,
        },
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
    state.value = itemData;
  }
</script>

<template>
  <Title>User</Title>
  <main>
    <UModal
      v-model:open="modalOpen"
      :title="state.id ? 'Edit User' : 'Tambah User'"
    >
      <template #body>
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormField label="Nama Jurusan" name="name">
            <UInput v-model="state.name" :disabled="modalLoading" />
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
        :add-function="clickAdd"
        :delete-function="clickDelete"
        :delete-disabled="tableSelected ? tableSelected.length === 0 : true"
      />
      <AppTable
        v-model="tableSelected"
        :loading="status === 'pending'"
        :data="data"
        :columns="columns"
        @edit-click="(e) => clickUpdate(e)"
      />
    </UCard>
  </main>
</template>
