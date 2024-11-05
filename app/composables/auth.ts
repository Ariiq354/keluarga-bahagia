import type { UserLucia } from "~~/server/db/schema/auth";

export const useUser = () => {
  const user = useState<UserLucia | null>("user", () => null);
  return user;
};
