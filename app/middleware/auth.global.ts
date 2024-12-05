import type { UserLucia } from "~~/server/db/schema/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  const user = useUser();
  // @ts-ignore
  const data: UserLucia = await useRequestFetch()("/api/auth/session");
  if (data) {
    user.value = data;
  }
  const currentRoute = to.fullPath;
  if (!data && currentRoute.includes("/dashboard")) {
    return navigateTo("/login");
  }
  if (
    (data && data.isActive === false && currentRoute === "/dashboard/member") ||
    currentRoute === "/dashboard/pengajuan"
  ) {
    return navigateTo("/dashboard/daftar");
  }

  if (
    data &&
    data.role !== "admin" &&
    PROTECTED.some((item) => item === currentRoute)
  ) {
    return navigateTo("/dashboard/member");
  }
});

const PROTECTED = ["/dashboard", "/dashboard/user", "/dashboard/list-taaruf"];
