<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    columns,
    getInitialFormData,
    schema,
    type Schema,
  } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("Daftar Bootcamp");
  });

  const { data, status, refresh } = await useLazyFetch(`/api/bootcamp`);

  console.log(data);

  const state = ref(getInitialFormData());

  const bootcampDetail = ref();

  const modalOpen = ref(false);
  const modalLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    modalLoading.value = true;
    try {
      await $fetch("/api/bootcamp", {
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
    const { ...rest } = itemData;
    state.value = {
      ...rest,
    };
  }
</script>

<template>
  <Title>Daftar Bootcamp</Title>
  <main>
    <div
      v-if="modalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div
        class="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900"
      >
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">
            {{ state.id ? "Edit Bootcamp" : "Tambah Bootcamp" }}
          </h2>
          <UButton
            icon="i-heroicons-x-mark"
            variant="ghost"
            @click="modalOpen = false"
          />
        </div>

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormField label="Title" name="title">
            <UInput v-model="state.title" :disabled="modalLoading" />
          </UFormField>

          <UFormField label="Deskripsi" name="deskripsi">
            <TipTapEditor
              v-model="state.description"
              :disabled="modalLoading"
            />
          </UFormField>

          <UFormField label="Harga" name="price">
            <UInput v-model.number="state.price" :disabled="modalLoading" />
          </UFormField>

          <UFormField label="Tempat" name="place">
            <UInput v-model="state.place" :disabled="modalLoading" />
          </UFormField>

          <UFormField label="Sampai" name="timeTo">
            <UInput v-model="state.time" :disabled="modalLoading" />
          </UFormField>

          <UFormField label="Upload Foto diri" name="foto">
            <ImageUpload
              :disabled="false"
              :url="state.foto ? state.foto : ''"
              @change="(url) => (state.foto = url)"
              @remove="() => (state.foto = '')"
            />
          </UFormField>

          <UFormField label="Pembicara" name="speaker">
            <UInput v-model="state.speaker" :disabled="modalLoading" />
          </UFormField>

          <hr />

          <div>
            Detail Bootcamp
            <table v-if="bootcampDetail" class="mt-2 w-full text-sm">
              <tbody>
                <tr
                  v-for="(item, index) in Object.entries(bootcampDetail)"
                  :key="index"
                >
                  <td class="font-bold capitalize">
                    {{ camelToCamelCase(item[0]) }}
                  </td>
                  <td class="text-right">{{ item[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>

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
      </div>
    </div>
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
