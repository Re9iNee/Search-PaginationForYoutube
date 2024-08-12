import { Aviation } from "../types/aviation.type";

type Props = {
  info: Aviation;
};
export default function AviationCard({ info }: Props) {
  return (
    <div className="flex flex-col rounded-md bg-slate-200 p-3 font-light justify-around min-h-max">
      <h2 className="text-xl font-semibold">{info.name}</h2>

      <div>
        <p>
          By: <span>{info.manufacturer}</span>
        </p>
        <p>Capacity: {info.passengerCapacity}</p>
      </div>
    </div>
  );
}
