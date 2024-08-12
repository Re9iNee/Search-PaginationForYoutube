import { Aviation } from "../types/aviation.type";

export function filterByName(data: Aviation[], term?: string): Aviation[] {
  if (!term || term === "") {
    return data;
  }

  term = term.toLocaleLowerCase();
  return data.filter((a) => a.name.toLocaleLowerCase().includes(term));
}
