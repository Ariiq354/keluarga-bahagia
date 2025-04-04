import * as v from "valibot";

export const registerSchema = v.object({
  username: v.pipe(v.string(), v.minLength(1, "Required")),
  password: v.pipe(v.string(), v.minLength(1, "Required")),
  namaLengkap: v.pipe(v.string(), v.minLength(1, "Required")),
  noTelepon: v.pipe(v.string(), v.minLength(1, "Required")),
  email: v.pipe(v.string(), v.minLength(1, "Required")),
});

export type Schema = v.InferOutput<typeof registerSchema>;

export const getInitialFormData = (): Schema => ({
  username: "",
  password: "",
  namaLengkap: "",
  noTelepon: "",
  email: "",
});
