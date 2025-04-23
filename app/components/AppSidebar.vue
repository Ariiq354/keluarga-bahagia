<script setup lang="ts">
  const sidebarState = useSidebarToggle();
  const user = useUser();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const sidebarItems = [
    ...(user.value?.role === "admin"
      ? [
          {
            label: "Dashboard",
            type: "label",
          },
          {
            label: "Home Dashboard",
            to: "/dashboard",
            icon: "i-heroicons-home",
            onSelect: () => {
              if (!isDesktop.value) {
                sidebarState.value = true;
              }
            },
          },
          {
            label: "User",
            to: "/dashboard/user",
            icon: "i-heroicons-user",
            onSelect: () => {
              if (!isDesktop.value) {
                sidebarState.value = true;
              }
            },
          },
          {
            label: "Bootcamp",
            to: "/dashboard/bootcamp",
            icon: "i-heroicons-computer-desktop",
            onSelect: () => {
              if (!isDesktop.value) {
                sidebarState.value = true;
              }
            },
          },
          {
            label: "Pengajuan Taaruf",
            to: "/dashboard/list-taaruf",
            icon: "i-heroicons-users",
            onSelect: () => {
              if (!isDesktop.value) {
                sidebarState.value = true;
              }
            },
          },
          {
            label: "Opsi Form",
            icon: "i-heroicons-adjustments-horizontal",
            children: [
              {
                label: "Jurusan",
                to: "/dashboard/jurusan",
                onSelect: () => {
                  if (!isDesktop.value) {
                    sidebarState.value = true;
                  }
                },
              },
              {
                label: "Pekerjaan",
                to: "/dashboard/pekerjaan",
                onSelect: () => {
                  if (!isDesktop.value) {
                    sidebarState.value = true;
                  }
                },
              },
              {
                label: "Pendidikan",
                to: "/dashboard/pendidikan",
                onSelect: () => {
                  if (!isDesktop.value) {
                    sidebarState.value = true;
                  }
                },
              },
              {
                label: "Suku",
                to: "/dashboard/suku",
                onSelect: () => {
                  if (!isDesktop.value) {
                    sidebarState.value = true;
                  }
                },
              },
            ],
          },
        ]
      : []),

    [
      {
        label: "Main",
        type: "label",
      },
      {
        label: "Pencarian Pasangan",
        to: "/dashboard/member",
        icon: "i-heroicons-user",
        onSelect: () => {
          if (!isDesktop.value) {
            sidebarState.value = true;
          }
        },
      },
      {
        label: "Pengajuan Taaruf",
        to: "/dashboard/pengajuan",
        icon: "i-heroicons-heart",
        onSelect: () => {
          if (!isDesktop.value) {
            sidebarState.value = true;
          }
        },
      },
      {
        label: "Identitas Diri",
        to: "/dashboard/daftar",
        icon: "i-heroicons-user-circle",
        onSelect: () => {
          if (!isDesktop.value) {
            sidebarState.value = true;
          }
        },
      },
      {
        label: "Transaksi",
        icon: "i-heroicons-credit-card",
        onSelect: () => {
          if (!isDesktop.value) {
            sidebarState.value = true;
          }
        },
      },
      {
        label: "Paket Saya",
        icon: "i-heroicons-cube",
        onSelect: () => {
          if (!isDesktop.value) {
            sidebarState.value = true;
          }
        },
      },
    ],
  ];
</script>

<template>
  <aside
    class="fixed top-0 z-20 hidden h-full w-72 overflow-auto border-r border-gray-200 bg-white shadow-xl transition-all duration-200 md:block dark:border-gray-700 dark:bg-gray-900"
    :class="sidebarState ? '-left-72 md:left-0' : 'left-0 md:-left-72'"
  >
    <div class="flex items-center justify-center pt-8 pb-6 text-(--ui-primary)">
      <div class="flex items-center text-2xl tracking-widest">
        <NuxtImg src="/logo.webp" class="h-14 w-14" />
        <span>
          Keluarga <br />
          Bahagia
        </span>
      </div>
    </div>
    <!-- @vue-expect-error -->
    <UNavigationMenu
      orientation="vertical"
      :items="sidebarItems"
      class="w-full"
      :ui="{
        label: 'text-sm uppercase text-(--ui-primary) mb-2',
        link: 'text-base py-2',
        root: 'px-4',
        separator: 'h-0',
      }"
    />
  </aside>
  <div
    v-if="!sidebarState"
    class="fixed top-0 left-0 z-10 h-full w-full bg-black/20 md:hidden"
    @click="sidebarState = true"
  />
  <USlideover
    v-if="!isDesktop"
    side="left"
    :open="!sidebarState"
    title="Menu"
    @update:open="(val) => (sidebarState = !val)"
  >
    <template #body>
      <aside class="overflow-auto">
        <!-- @vue-expect-error -->
        <UNavigationMenu
          orientation="vertical"
          :items="sidebarItems"
          class="w-full"
          :ui="{
            label: 'text-sm uppercase text-(--ui-primary) mb-2',
            link: 'text-base py-2',
            separator: 'h-0',
          }"
        />
      </aside>
    </template>
  </USlideover>
</template>
