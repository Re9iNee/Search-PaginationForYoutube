"use client";

import { useState } from "react";
import AviationList from "../../components/AviationList";
import Search from "../../components/Search";
import useGetAirplanes from "../../hooks/useGetAirplanes";
import { filterByName } from "../../utils/appUtil";

export default function ClientSideListPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { aviationList } = useGetAirplanes();

  return (
    <>
      <Search onChange={(t) => setSearchTerm(t)} />

      <AviationList list={filterByName(aviationList, searchTerm)} />
    </>
  );
}
