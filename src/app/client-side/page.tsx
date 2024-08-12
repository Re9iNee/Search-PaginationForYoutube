"use client";

import airplanes from "@/app/mocks/airplanes.json";
import { useMemo, useState } from "react";
import AviationList from "../components/AviationList";
import { Aviation } from "../types/aviation.type";
import { filterByName } from "../utils/appUtil";
import ClientSideSearch from "./client-side-search";

export default function ClientSideFilterPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const aviationList: Aviation[] = useMemo(
    () => JSON.parse(JSON.stringify(airplanes)),
    []
  );

  return (
    <div className="p-5 mx-auto grid place-items-center gap-7 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-10">Aviation List</h1>
      <ClientSideSearch onChange={(t) => setSearchTerm(t)} />

      <AviationList list={filterByName(aviationList, searchTerm)} />
    </div>
  );
}
