import { Aviation } from "../types/aviation.type";

export function filterByName(data: Aviation[], term?: string): Aviation[] {
  if (term === "" || term === undefined) return data;

  return data.filter((a) =>
    a.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  );
}
