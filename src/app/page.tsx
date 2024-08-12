import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href={"/client-side"}>Client Side Method</Link>
      <Link href={"/server-side"}>Client Side Method</Link>
    </main>
  );
}
