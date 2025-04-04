import * as v from "valibot";

export const loginSchema = v.object({
  username: v.pipe(v.string(), v.minLength(1, "Required")),
  password: v.pipe(v.string(), v.minLength(1, "Required")),
  rememberMe: v.boolean(),
});

export const getInitialFormData = (): Schema => ({
  username: "",
  password: "",
  rememberMe: false,
});

export type Schema = v.InferOutput<typeof loginSchema>;
