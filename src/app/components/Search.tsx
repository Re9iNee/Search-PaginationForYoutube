type Props = {
  onChange: (term: string) => void;
};
export default function Search({ onChange }: Props) {
  return (
    <input
      type="search"
      placeholder="✈️  Search Aviations"
      className="max-w-screen-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
