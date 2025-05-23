export function json2Csv(data: { [key: string]: unknown }[]) {
  if (data.length < 1) {
    return;
  }

  const headers = Object.keys(data[0]!).toString();

  const main = data.map((item) => {
    return Object.values(item).toString();
  });

  const csv = [headers, ...main].join("\n");

  const blob = new Blob([csv], { type: "application/csv" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.download = "data.csv";
  a.href = url;
  a.style.display = "none";

  document.body.appendChild(a);

  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
};

export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function camelToCamelCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (firstChar) => firstChar.toUpperCase());
}

export type ExtractObjectType<T> = T extends (infer U)[] ? U : never;
