import { Aviation } from "../types/aviation.type";
import AviationCard from "./AviationCard";

type Props = {
  list: Aviation[];
};
export default function AviationList({ list }: Props) {
  return (
    <section className="gap-5 grid grid-cols-2 md:grid-cols-3 w-full">
      {list.map((a) => (
        <AviationCard key={a.id} info={a} />
      ))}
    </section>
  );
}
