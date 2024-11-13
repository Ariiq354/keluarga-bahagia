<script setup lang="ts">
  const user = useUser();

  const sidebarState = useSidebarToggle();

  const route = useRoute();

  if (user.value?.isActive === false && !route.fullPath.includes("daftar")) {
    await navigateTo("/dashboard/daftar");
  }

  const adminPath = ["/dashboard", "/dashboard/user"];

  if (
    user.value?.role !== "admin" &&
    adminPath.some((item) => route.fullPath === item)
  ) {
    await navigateTo("/dashboard/member");
  }

  async function logout() {
    try {
      await $fetch("/api/auth/logout", {
        method: "POST",
      });
      user.value = null;
      await navigateTo("/");
    } catch (error: any) {
      useToastError(String(error.statusCode), error.data.message);
    }
  }
</script>

<template>
  <div class="flex">
    <AppSidebar />
    <div
      class="flex flex-1 flex-col overflow-auto p-4 transition-all duration-200 md:p-8"
      :class="{ 'md:ml-72': sidebarState }"
    >
      <AppTopbar :logout="logout" />
      <slot />
    </div>
  </div>
</template>

<style>
  html {
    font-family: Poppins, sans-serif;
    font-size: 14px;
  }
</style>
