import * as v from "valibot";

export const columns = [
  {
    accessorKey: "name",
    header: "Nama Jurusan",
  },
];

export const schema = v.object({
  id: v.optional(v.number()),
  name: v.pipe(v.string(), v.minLength(1, "Required")),
});

export type Schema = v.InferOutput<typeof schema>;

export const getInitialFormData = (): Schema => ({
  id: undefined,
  name: "",
});
