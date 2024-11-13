<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    genderOptions,
    getInitialFormData,
    schema,
    statusKawinOptions,
    type Schema,
  } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("Daftar");
  });

  const user = useUser();
  const { data, refresh } = useFetch(`/api/users/daftar/${user.value?.id}`);

  if (user.value?.isActive === true) {
    await navigateTo("/dashboard");
  }

  const state = ref(getInitialFormData());

  if (data.value) {
    state.value = data.value;
  }

  const isLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    isLoading.value = true;
    try {
      await $fetch("/api/users/daftar", {
        method: "POST",
        body: event.data,
      });

      useToastSuccess(
        "Pendaftaran Berhasil",
        "Silahkan menunggu aktivasi akun anda"
      );
      await refresh();
    } catch (error: any) {
      useToastError(String(error.statusCode), error.data.message);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <main>
    <Title>Daftar Diri</Title>
    <UCard>
      <div v-if="data" class="flex items-center gap-4">
        <UIcon name="i-heroicons-information-circle" size="30" /> Silahkan
        tunggu akun anda teraktivasi
      </div>
      <div v-else class="flex items-center gap-4">
        <UIcon name="i-heroicons-information-circle" size="30" /> Lengkapi data
        diri anda sebelum memulai
      </div>
    </UCard>
    <UCard class="mt-4">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <h1 class="font-bold">Data Diri</h1>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UFormGroup label="Nama Lengkap">
            <UInput :model-value="user?.namaLengkap" disabled />
          </UFormGroup>
          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Jenis Kelamin">
              <UInput
                :model-value="
                  genderOptions.find((item) => item.value === user?.gender)
                    ?.name
                "
                disabled
              />
            </UFormGroup>
            <UFormGroup label="No. Telepon">
              <UInput :model-value="user?.noTelepon" disabled />
            </UFormGroup>
          </div>
          <UFormGroup label="Status Kawin" name="statusKawin">
            <USelectMenu
              v-model="state.statusKawin"
              :options="statusKawinOptions"
              :disabled="isLoading"
            />
          </UFormGroup>
          <UFormGroup label="Tanggal Lahir" name="tanggalLahir">
            <UInput
              v-model="state.tanggalLahir"
              type="date"
              :disabled="isLoading"
            />
          </UFormGroup>

          <UFormGroup label="Nama Ayah" name="namaAyah">
            <UInput v-model="state.namaAyah" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Suku" name="suku">
            <UInput v-model="state.suku" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Pendidikan Terakhir" name="pendidikan">
            <UInput v-model="state.pendidikan" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Pekerjaan" name="pekerjaan">
            <UInput v-model="state.pekerjaan" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Tinggi Badan" name="tinggi">
            <UInput
              v-model="state.tinggi"
              type="number"
              :disabled="isLoading"
            />
          </UFormGroup>
          <UFormGroup label="Berat Badan" name="berat">
            <UInput v-model="state.berat" type="number" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Hobi" name="hobi">
            <UInput v-model="state.hobi" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Deskripsi Singkat Diri Anda" name="deskripsi">
            <UInput v-model="state.deskripsi" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Alamat Domisili" name="alamat">
            <UTextarea v-model="state.alamat" :rows="5" :disabled="isLoading" />
          </UFormGroup>
          <UFormGroup label="Kriteria Pasangan" name="kriteria">
            <UTextarea
              v-model="state.kriteria"
              :rows="5"
              :disabled="isLoading"
            />
          </UFormGroup>
        </div>

        <div class="flex w-full justify-end gap-2">
          <UButton
            type="submit"
            icon="i-heroicons-check-16-solid"
            :loading="isLoading"
          >
            Simpan
          </UButton>
        </div>
      </UForm>
    </UCard>
  </main>
</template>
