<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    columns,
    genderOptions,
    getInitialFormData,
    schema,
    type Schema,
  } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("User");
  });

  const { data, status, refresh } = await useLazyFetch("/api/users");
  const state = ref(getInitialFormData());

  const userDetail = ref();

  const modalOpen = ref(false);
  const modalLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    modalLoading.value = true;
    try {
      await $fetch("/api/users", {
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
    const { detail, ...rest } = itemData;
    userDetail.value = detail;
    state.value = {
      ...rest,
      password: "",
    };
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
          <UFormField label="Username" name="username">
            <UInput v-model="state.username" :disabled="modalLoading" />
          </UFormField>

          <UFormField v-if="!state.id" label="Password" name="password">
            <UInput
              v-model="state.password"
              type="password"
              :disabled="modalLoading"
            />
          </UFormField>

          <UFormField label="Nama Lengkap" name="namaLengkap">
            <UInput v-model="state.namaLengkap" :disabled="modalLoading" />
          </UFormField>

          <UFormField label="Jenis Kelamin" name="gender">
            <USelectMenu
              v-model="state.gender"
              :items="genderOptions"
              label-key="name"
              value-key="value"
              placeholder="Masukkan Jenis Kelamin Anda"
            />
          </UFormField>

          <UFormField label="No. Telepon" name="noTelepon">
            <UInput v-model="state.noTelepon" :disabled="modalLoading" />
          </UFormField>

          <UFormField label="Status" name="isActive">
            <USwitch v-model="state.isActive" :disabled="modalLoading" />
          </UFormField>

          <hr />

          <div>
            Detail User
            <table v-if="userDetail" class="mt-2 w-full text-sm">
              <tbody>
                <tr
                  v-for="(item, index) in Object.entries(userDetail)"
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
        label="Kelola User"
        :loading="status === 'pending'"
        :data="data"
        :columns="columns"
        @edit-click="(e) => clickUpdate(e)"
      >
        <template #isActive-data="{ row }">
          <div class="flex justify-center">
            <UBadge
              size="xs"
              :label="row.isActive ? 'Aktif' : 'Tidak Aktif'"
              :color="row.isActive ? 'success' : 'error'"
              variant="solid"
              class="rounded-full"
            />
          </div>
        </template>
        <template #isActive-header="{ column }">
          <div class="text-center">
            {{ column.label }}
          </div>
        </template>
        <template #gender-data="{ row }">
          <div class="flex justify-center">
            <UBadge
              size="xs"
              :label="row.gender == 'laki' ? 'Laki - Laki' : 'Perempuan'"
              color="info"
              variant="solid"
              class="rounded-full"
            />
          </div>
        </template>
        <template #gender-header="{ column }">
          <div class="text-center">
            {{ column.label }}
          </div>
        </template>
      </AppTable>
    </UCard>
  </main>
</template>
