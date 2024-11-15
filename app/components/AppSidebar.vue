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
            ],
          },
        ]
      : []),
    {
      title: "Main",
      items: [
        {
          label: "Pencarian Member",
          link: "/dashboard/member",
          icon: "i-heroicons-user",
        },
        {
          label: "Pengajuan Taaruf",
          link: "/dashboard/pengajuan",
          icon: "i-heroicons-heart",
        },
      ],
    },
  ];
</script>

<template>
  <aside
    class="fixed top-0 z-20 h-full w-72 overflow-hidden border-r border-gray-200 bg-white shadow-xl transition-all duration-200 dark:border-gray-700 dark:bg-gray-900"
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
    <template v-if="user ? user.isActive !== false : false">
      <div v-for="(firstItem, firstIndex) in sidebarItems" :key="firstIndex">
        <h1 class="text-primary px-8 py-4 text-sm font-bold uppercase">
          {{ firstItem.title }}
        </h1>
        <nav :aria-label="firstItem.title + ' navigation'">
          <AppSidebarItem :link-item-prop="firstItem.items" :depth="0" />
        </nav>
      </div>
    </template>
  </aside>
  <div
    v-if="!sidebarState"
    class="fixed left-0 top-0 z-10 h-full w-full bg-black/20 md:hidden"
    @click="sidebarState = true"
  />
</template>
