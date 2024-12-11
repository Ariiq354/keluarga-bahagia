<script setup lang="ts">
  const sidebarState = useSidebarToggle();

  const user = useUser();

  const sidebarItems = [
    ...(user.value?.role === "admin"
      ? [
          {
            title: "Dashboard",
            items: [
              {
                label: "Home Dashboard",
                link: "/dashboard",
                icon: "i-heroicons-home",
              },
              {
                label: "User",
                link: "/dashboard/user",
                icon: "i-heroicons-user",
              },
              {
                label: "Pengajuan Taaruf",
                link: "/dashboard/list-taaruf",
                icon: "i-heroicons-users",
              },
              {
                label: "Opsi Form",
                icon: "i-heroicons-adjustments-horizontal",
                children: [
                  {
                    label: "Jurusan",
                    link: "/dashboard/jurusan",
                  },
                  {
                    label: "Pekerjaan",
                    link: "/dashboard/pekerjaan",
                  },
                  {
                    label: "Pendidikan",
                    link: "/dashboard/pendidikan",
                  },
                  {
                    label: "Suku",
                    link: "/dashboard/suku",
                  },
                ],
              },
            ],
          },
        ]
      : []),
    {
      title: "Main",
      items: [
        {
          label: "Pencarian Pasangan",
          link: "/dashboard/member",
          icon: "i-heroicons-user",
        },
        {
          label: "Pengajuan Taaruf",
          link: "/dashboard/pengajuan",
          icon: "i-heroicons-heart",
        },
        {
          label: "Identitas Diri",
          link: "/dashboard/daftar",
          icon: "i-heroicons-user-circle",
        },
        {
          label: "Transaksi",
          icon: "i-heroicons-credit-card",
        },
        {
          label: "Paket Saya",
          icon: "i-heroicons-cube",
        },
      ],
    },
  ];
</script>

<template>
  <aside
    class="fixed top-0 z-20 flex h-full w-72 flex-col overflow-hidden border-r border-gray-200 bg-white shadow-xl transition-all duration-200 dark:border-gray-700 dark:bg-gray-900"
    :class="sidebarState ? '-left-72 md:left-0' : 'left-0 md:-left-72'"
  >
    <div class="text-primary flex items-center justify-center pb-8 pt-10">
      <div class="flex items-center gap-2 text-2xl tracking-widest">
        <NuxtImg src="/logo.webp" width="50" alt="logo" />
        <span class="font-bold">
          KELUARGA <br />
          BAHAGIA
        </span>
      </div>
    </div>
    <div v-for="(firstItem, firstIndex) in sidebarItems" :key="firstIndex">
      <h1 class="text-primary px-8 py-4 text-sm font-bold uppercase">
        {{ firstItem.title }}
      </h1>
      <nav :aria-label="firstItem.title + ' navigation'">
        <AppSidebarItem :link-item-prop="firstItem.items" :depth="0" />
      </nav>
    </div>
    <div
      class="text-primary mb-4 mt-auto flex items-center justify-center gap-1"
    >
      Butuh Bantuan?
      <UButton
        href="https://wa.me/6285772048120"
        target="_blank"
        variant="ghost"
        class="rounded-full p-2"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6"
        >
          <title>WhatsApp</title>
          <path
            fill="#25D366"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>
      </UButton>
    </div>
  </aside>
  <div
    v-if="!sidebarState"
    class="fixed left-0 top-0 z-10 h-full w-full bg-black/20 md:hidden"
    @click="sidebarState = true"
  />
</template>
