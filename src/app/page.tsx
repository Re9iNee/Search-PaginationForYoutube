import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Link href={"/client-side"}>Client Side Method</Link>
      <Link href={"/server-side"}>Server Side Method</Link>
    </main>
  );
}
