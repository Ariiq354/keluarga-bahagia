<script setup lang="ts">
  defineProps<{
    title: string;
    pending: boolean;
  }>();
  const open = defineModel<boolean>();
</script>

<template>
  <UModal v-model="open" prevent-close>
    <div class="px-4 py-5">
      <div class="mb-4 flex items-center justify-between">
        <h3
          class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
        >
          {{ title }}
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          class="-my-1 rounded-full"
          :disabled="pending"
          @click="open = false"
        />
      </div>
      <slot />
    </div>
  </UModal>
</template>
