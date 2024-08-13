export default function AviationListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='p-5 mx-auto grid place-items-center gap-7 max-w-screen-lg'>
      <h1 className='text-3xl font-bold mb-10'>Aviation List</h1>
      {children}
    </div>
  );
}
