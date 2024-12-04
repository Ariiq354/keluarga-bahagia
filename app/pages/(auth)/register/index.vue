<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import {
    type Schema,
    genderOptions,
    getInitialFormData,
    registerSchema,
  } from "./_constants";

  definePageMeta({
    layout: "auth",
  });

  const state = ref(getInitialFormData());

  const isLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    isLoading.value = true;
    try {
      await $fetch("/api/auth/register", {
        method: "POST",
        body: event.data,
      });
      useToastSuccess("Register Suskes", "Akun anda sudah terbuat");
      await navigateTo("/login");
    } catch (error: any) {
      useToastError("Register gagal", error.data.message);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <Title>Daftar Akun</Title>
    <UCard class="w-full max-w-md">
      <div class="space-y-6">
        <div class="flex flex-col items-center text-center">
          <NuxtLink href="/">
            <NuxtImg src="/logo.webp" width="150" height="150" alt="logo ppg" />
          </NuxtLink>
          <div class="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Daftar akun
          </div>
          <div class="mt-1 text-gray-500 dark:text-gray-400">
            Sudah punya akun?
            <NuxtLink no-prefetch to="/login" class="text-primary font-medium">
              Masuk.
            </NuxtLink>
          </div>
        </div>
        <UForm
          :schema="registerSchema"
          :state="state"
          class="w-full space-y-6"
          @submit="onSubmit"
        >
          <UFormGroup label="Username" name="username">
            <UInput
              v-model="state.username"
              placeholder="Masukkan nama pengguna"
            />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput
              v-model="state.password"
              type="password"
              placeholder="Masukkan kata sandi"
            />
          </UFormGroup>

          <UFormGroup label="Nama Lengkap" name="namaLengkap">
            <UInput
              v-model="state.namaLengkap"
              placeholder="Masukkan nama lengkap"
            />
          </UFormGroup>

          <UFormGroup label="No. Telepon" name="noTelepon">
            <UInput
              v-model="state.noTelepon"
              placeholder="Masukkan no. telepon"
            />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" placeholder="Masukkan email anda" />
          </UFormGroup>
          <UFormGroup label="Jenis Kelamin" name="gender">
            <USelectMenu
              v-model="state.gender"
              :options="genderOptions"
              option-attribute="name"
              value-attribute="value"
              placeholder="Masukkan Jenis Kelamin Anda"
            />
          </UFormGroup>

          <UButton
            class="flex w-full justify-center"
            type="submit"
            :loading="isLoading"
          >
            Buat Akun
          </UButton>
        </UForm>
      </div>
    </UCard>
  </div>
</template>
