<template>
  <header class="sticky top-0 z-30 w-full border-b-2 bg-white py-4 font-sans">
    <div class="container flex items-center justify-between">
      <div class="flex items-center gap-4 text-2xl font-bold tracking-wider">
        <NuxtImg src="/logo.webp" alt="logo" class="h-14" />
        KELUARGA BAHAGIA
      </div>
      <nav class="flex gap-12 text-lg">
        <NuxtLink
          href="/"
          class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
        >
          Beranda
        </NuxtLink>
        <NuxtLink
          href="/about"
          class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
        >
          Tentang Kami
        </NuxtLink>
        <NuxtLink
          href="/product"
          class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
        >
          Produk
        </NuxtLink>
        <NuxtLink
          href="/contact"
          class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70"
        >
          Kontak
        </NuxtLink>
      </nav>
      <UButton to="/login" class="text-white">Daftar</UButton>
    </div>
  </header>
</template>
