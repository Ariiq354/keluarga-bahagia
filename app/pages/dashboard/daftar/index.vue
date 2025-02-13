<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    genderOptions,
    getInitialFormData,
    getInitialResetData,
    resetSchema,
    schema,
    statusKawinOptions,
    type ResetSchema,
    type Schema,
  } from "./_constants";

  onMounted(() => {
    defineTopbarTitle("Daftar");
  });
  const user = useUser();

  const provinsiId = ref();
  const kotaId = ref();
  const kecamatanId = ref();
  const { data: dataProvinsi } = useLazyFetch<any>(
    "https://alamat.thecloudalert.com/api/provinsi/get"
  );

  const { data: dataKota } = useFetch<any>(
    `https://alamat.thecloudalert.com/api/kabkota/get/`,
    {
      immediate: false,
      query: {
        d_provinsi_id: provinsiId,
      },
    }
  );

  const { data: dataKecamatan } = useFetch<any>(
    `https://alamat.thecloudalert.com/api/kecamatan/get/`,
    {
      immediate: false,
      query: {
        d_kabkota_id: kotaId,
      },
    }
  );

  const { data: dataKelurahan } = useFetch<any>(
    `https://alamat.thecloudalert.com/api/kelurahan/get/`,
    {
      immediate: false,
      query: {
        d_kecamatan_id: kecamatanId,
      },
    }
  );

  const { data } = useLazyFetch(`/api/users/daftar/${user.value?.id}`);
  const { data: dataSuku } = useLazyFetch(`/api/suku`);
  const { data: dataPekerjaan } = useLazyFetch(`/api/pekerjaan`);
  const { data: dataJurusan } = useLazyFetch(`/api/jurusan`);
  const { data: dataPendidikan } = useLazyFetch(`/api/pendidikan`);
  const state = ref(getInitialFormData());
  const resetState = ref(getInitialResetData());
  if (data.value) {
    state.value = data.value;
  }

  const isLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    isLoading.value = true;
    try {
      await $fetch("/api/users/daftar", {
        method: "POST",
        body: {
          ...event.data,
          provinsi: dataProvinsi.value.result.find(
            (item: any) => item.id === event.data.provinsi
          ).text,
          kota: dataKota.value.result.find(
            (item: any) => item.id === event.data.kota
          ).text,
          kecamatan: dataKecamatan.value.result.find(
            (item: any) => item.id === event.data.kecamatan
          ).text,
          kelurahan: dataKelurahan.value.result.find(
            (item: any) => item.id === event.data.kelurahan
          ).text,
        },
      });

      useToastSuccess(
        "Pengisian Data Diri Berhasil",
        "Selamat datang di Keluarga Bahagia"
      );
    } catch (error: any) {
      useToastError(String(error.statusCode), error.data.message);
    } finally {
      isLoading.value = false;
    }
  }

  async function onSubmitReset(event: FormSubmitEvent<ResetSchema>) {
    isLoading.value = true;
    try {
      await $fetch("/api/auth/reset", {
        method: "POST",
        body: event.data,
      });

      useToastSuccess(
        "Reset Password Berhasil",
        "Password anda adalah " + event.data.password
      );
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
      <div v-if="!data" class="flex items-center gap-4">
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
        <UFormGroup label="Upload Foto diri" name="foto">
          <ImageUpload
            :disabled="false"
            :url="state.foto ? state.foto : ''"
            @change="(url) => (state.foto = url)"
            @remove="() => (state.foto = '')"
          />
        </UFormGroup>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UFormGroup label="Nama Lengkap">
            <UInput :model-value="user?.namaLengkap" disabled />
          </UFormGroup>
          <UFormGroup label="Jenis Kelamin" name="gender">
            <USelectMenu
              v-model="state.gender"
              :disabled="isLoading"
              :options="genderOptions"
              option-attribute="name"
              value-attribute="value"
            />
          </UFormGroup>
          <UFormGroup label="No. Telepon">
            <UInput :model-value="user?.noTelepon" disabled />
          </UFormGroup>
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
          <div class="grid grid-cols-2 gap-4">
            <UFormGroup label="Anak Ke" name="anakKe">
              <UInput
                v-model="state.anakKe"
                type="number"
                :disabled="isLoading"
              />
            </UFormGroup>
            <UFormGroup label="Dari Bersaudara" name="dariBersaudara">
              <UInput
                v-model="state.dariBersaudara"
                type="number"
                :disabled="isLoading"
              />
            </UFormGroup>
          </div>
          <UFormGroup label="Provinsi" name="provinsi">
            <USelectMenu
              v-model="state.provinsi"
              :options="dataProvinsi ? dataProvinsi.result : []"
              :disabled="isLoading"
              option-attribute="text"
              value-attribute="id"
              searchable
              @change="provinsiId = state.provinsi"
            />
          </UFormGroup>
          <UFormGroup label="Kabupaten / Kota" name="kota">
            <USelectMenu
              v-model="state.kota"
              :options="dataKota ? dataKota.result : []"
              :disabled="isLoading"
              option-attribute="text"
              value-attribute="id"
              searchable
              @change="kotaId = state.kota"
            />
          </UFormGroup>
          <UFormGroup label="Kecamatan" name="kecamatan">
            <USelectMenu
              v-model="state.kecamatan"
              :options="dataKecamatan ? dataKecamatan.result : []"
              :disabled="isLoading"
              option-attribute="text"
              value-attribute="id"
              searchable
              @change="kecamatanId = state.kecamatan"
            />
          </UFormGroup>
          <UFormGroup label="Kelurahan / Desa" name="kelurahan">
            <USelectMenu
              v-model="state.kelurahan"
              :options="dataKelurahan ? dataKelurahan.result : []"
              :disabled="isLoading"
              option-attribute="text"
              value-attribute="id"
              searchable
            />
          </UFormGroup>
          <UFormGroup label="Suku" name="suku">
            <USelectMenu
              v-model="state.suku"
              :options="dataSuku"
              :disabled="isLoading"
              option-attribute="name"
              value-attribute="name"
              searchable
            />
          </UFormGroup>
          <UFormGroup label="Pendidikan Terakhir" name="pendidikan">
            <USelectMenu
              v-model="state.pendidikan"
              :options="dataPendidikan"
              :disabled="isLoading"
              option-attribute="name"
              value-attribute="name"
              searchable
            />
          </UFormGroup>
          <UFormGroup label="Jurusan" name="jurusan">
            <USelectMenu
              v-model="state.jurusan"
              :options="dataJurusan"
              :disabled="isLoading"
              option-attribute="name"
              value-attribute="name"
              searchable
            />
          </UFormGroup>
          <UFormGroup label="Pekerjaan" name="pekerjaan">
            <USelectMenu
              v-model="state.pekerjaan"
              :options="dataPekerjaan"
              :disabled="isLoading"
              option-attribute="name"
              value-attribute="name"
              searchable
            />
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
          <UFormGroup label="Alamat Instagram" name="instagram">
            <UInput v-model="state.instagram" :disabled="isLoading" />
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
    <UCard class="mt-4">
      <UForm
        :schema="resetSchema"
        :state="resetState"
        class="space-y-4"
        @submit="onSubmitReset"
      >
        <h1 class="font-bold">Reset Password</h1>
        <UFormGroup label="Password Baru" name="password">
          <UInput
            v-model="resetState.password"
            type="password"
            :disabled="isLoading"
          />
        </UFormGroup>

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
