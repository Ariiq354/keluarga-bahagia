<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  import { type Schema, getInitialFormData, loginSchema } from "./_constants";

  definePageMeta({
    layout: "auth",
  });

  const state = ref(getInitialFormData());

  const isLoading = ref(false);
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    isLoading.value = true;
    try {
      await $fetch("/api/auth/login", {
        method: "POST",
        body: event.data,
      });
      await navigateTo("/");
    } catch (error: any) {
      useToastError(String(error.statusCode), error.data.message);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <Title>Login</Title>
  <main class="flex w-full items-center justify-center">
    <UCard class="w-full max-w-md">
      <div class="space-y-6">
        <div class="flex flex-col items-center text-center">
          <NuxtLink href="/">
            <NuxtImg src="/logo.webp" width="150" height="150" alt="logo ppg" />
          </NuxtLink>
          <div class="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Selamat Datang
          </div>
          <div class="mt-1 text-gray-500 dark:text-gray-400">
            Belum punya akun?
            <NuxtLink
              no-prefetch
              to="/register"
              class="text-primary font-medium"
            >
              Daftar.
            </NuxtLink>
          </div>
        </div>
        <UForm
          :schema="loginSchema"
          :state="state"
          class="w-full space-y-6"
          @submit="onSubmit"
        >
          <UFormField label="Username" name="username">
            <UInput
              v-model="state.username"
              placeholder="Masukkan nama pengguna"
            />
          </UFormField>

          <UFormField label="Password" name="password">
            <UInput
              v-model="state.password"
              type="password"
              placeholder="Masukkan kata sandi"
            />
          </UFormField>

          <UCheckbox v-model="state.rememberMe" label="Ingat saya" />

          <UButton
            class="flex w-full justify-center"
            type="submit"
            :loading="isLoading"
          >
            Lanjut
          </UButton>
        </UForm>
      </div>
    </UCard>
  </main>
</template>
