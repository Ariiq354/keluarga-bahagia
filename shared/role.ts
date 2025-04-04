import type { UserLucia, UserRole as ROLES } from "~~/server/db/schema/auth";

type RESOURCE = {
  role: ["admin", "user"];
};

type ROLESTYPE = {
  [Role in ROLES]: {
    [K in keyof RESOURCE]?: Array<RESOURCE[K][number]>;
  };
};

const ROLES: ROLESTYPE = {
  admin: {
    role: ["admin"],
  },
  user: {
    role: ["user"],
  },
} as const;

type ResourcePermissions = {
  [K in keyof RESOURCE]: `${K}:${RESOURCE[K][number]}`;
}[keyof RESOURCE];

export function hasPermission(
  user: UserLucia["role"],
  permission: ResourcePermissions
) {
  const [resource, value] = permission.split(":") as [keyof RESOURCE, string];

  return (ROLES[user][resource] as string[])?.includes(value) ?? false;
}
