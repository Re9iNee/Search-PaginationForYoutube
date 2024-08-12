import AviationList from "../../components/AviationList";
import useGetAirplanes from "../../hooks/useGetAirplanes";
import { filterByName } from "../../utils/appUtil";
import SearchWrapper from "./search-wrapper";

type Props = {
  searchParams: {
    term?: string;
  };
};
export default function ServerSide({ searchParams }: Props) {
  const searchTerm = searchParams.term ?? "";
  const { aviationList } = useGetAirplanes();

  return (
    <>
      <SearchWrapper />

      <AviationList list={filterByName(aviationList, searchTerm)} />
    </>
  );
}
