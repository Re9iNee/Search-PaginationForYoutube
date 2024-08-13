import { Aviation } from "@/app/types/aviation.type";
import AviationList from "../../components/AviationList";
import { filterByName } from "../../utils/appUtil";
import SearchWrapper from "./search-wrapper";

type Props = {
  searchParams: {
    term?: string;
  };
};
export default async function ServerSideListPage({ searchParams }: Props) {
  const aviationList = await getAviationList();
  const searchTerm = searchParams.term ?? "";

  return (
    <>
      <SearchWrapper />

      <AviationList list={filterByName(aviationList, searchTerm)} />
    </>
  );
}

async function getAviationList(): Promise<Aviation[]> {
  const resp = await fetch("http://localhost:3000/api/aviation", {
    cache: "no-store",
  });
  const list = await resp.json();
  return list;
}
