import * as v from "valibot";

export const columns = [
  {
    accessorKey: "namaLengkap",
    header: "Nama Lengkap",
  },
  {
    accessorKey: "detail.kodeUser",
    header: "Kode",
  },
  {
    accessorKey: "gender",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "noTelepon",
    header: "No. Telepon",
  },
  {
    accessorKey: "isActive",
    header: "Status",
  },
];

export const genderOptions = [
  {
    name: "Laki - laki",
    value: "laki",
  },
  {
    name: "Perempuan",
    value: "perempuan",
  },
];

export const schema = v.pipe(
  v.object({
    id: v.optional(v.number()),
    username: v.pipe(v.string(), v.minLength(1, "Required")),
    password: v.string(),
    namaLengkap: v.pipe(v.string(), v.minLength(1, "Required")),
    noTelepon: v.pipe(v.string(), v.minLength(1, "Required")),
    gender: v.pipe(v.string(), v.minLength(1, "Required")),
    isActive: v.boolean(),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["id"]],
      (input) => (input.id ? true : input.password.length < 8),
      "Karakter harus 8 atau lebih"
    ),
    ["password"]
  )
);

export type Schema = v.InferOutput<typeof schema>;

export const getInitialFormData = (): Schema => ({
  id: undefined,
  username: "",
  password: "",
  namaLengkap: "",
  noTelepon: "",
  gender: "",
  isActive: false,
});
