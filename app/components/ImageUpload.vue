<script setup lang="ts">
  const { onChange } = defineProps<{
    disabled: boolean;
    onChange: (value: string) => void;
    onRemove: () => void;
    url: string;
  }>();

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };
</script>

<template>
  <div>
    <div v-if="url" class="mb-4 flex items-center gap-4">
      <div class="relative h-[200px] w-[200px] overflow-hidden rounded-md">
        <div class="absolute top-2 right-2 z-10">
          <UButton
            v-if="!disabled"
            size="sm"
            color="error"
            class="aspect-square"
            @click="onRemove"
          >
            <UIcon name="i-heroicons-trash" />
          </UButton>
        </div>
        <NuxtLink :href="url" target="_blank">
          <NuxtImg class="h-full object-cover" alt="cloudinary" :src="url" />
        </NuxtLink>
      </div>
    </div>
    <CldUploadWidget
      v-if="!disabled"
      v-slot="{ open }"
      upload-preset="kbuser"
      @error="(e: any) => useToastError('Upload Error', String(e))"
      @result="(e: any) => useToastError('Upload Result', String(e))"
      @success="onUpload"
    >
      <UButton icon="i-heroicons-document-plus" @click="open">
        Upload Foto
      </UButton>
    </CldUploadWidget>
  </div>
</template>
