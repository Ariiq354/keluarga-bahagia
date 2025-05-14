import * as v from "valibot";

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Harga",
  },
  {
    accessorKey: "quota",
    header: "Kuota",
  },
  {
    accessorKey: "place",
    header: "Tempat",
  },
  {
    accessorKey: "time",
    header: "Jadwal",
  },
  {
    accessorKey: "isActive",
    header: "Aktif",
    cell: (params: { row: { getValue: (key: string) => any } }) =>
      params.row.getValue("isActive") === 1 ? "Aktif" : "Nonaktif",
  },
  {
    accessorKey: "speaker",
    header: "Pembicara",
  },
];

export const schema = v.pipe(
  v.object({
    id: v.optional(v.number()),
    title: v.pipe(v.string(), v.minLength(1, "Required")),
    price: v.pipe(v.number()),
    quota: v.pipe(v.number()),
    isActive: v.pipe(v.number()),
    gmaps: v.pipe(v.string()),
    description: v.pipe(v.string(), v.minLength(1, "Required")),
    foto: v.pipe(v.string(), v.minLength(1, "Required")),
    place: v.pipe(v.string(), v.minLength(1, "Required")),
    time: v.pipe(v.string(), v.minLength(1, "Required")),
    speaker: v.pipe(v.string(), v.minLength(1, "Required")),
  })
);

export type Schema = v.InferOutput<typeof schema>;

export const getInitialFormData = (): Schema => ({
  id: undefined,
  title: "",
  price: 0,
  description: "",
  quota: 0,
  isActive: 1,
  gmaps: "",
  place: "",
  time: "",
  foto: "",
  speaker: "",
});
