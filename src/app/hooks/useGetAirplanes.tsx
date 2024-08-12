import airplanesJson from "@/app/mocks/airplanes.json";
import { useMemo } from "react";
import { Aviation } from "../types/aviation.type";

export default function useGetAirplanes() {
  const aviationList: Aviation[] = useMemo(
    () => JSON.parse(JSON.stringify(airplanesJson)),
    []
  );
  return { aviationList };
}
