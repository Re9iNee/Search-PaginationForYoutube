import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search & Pagination Example",
  description: "Developed by A Guide to Die By Code youtube channel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex flex-col min-h-screen justify-between">
      <body className={`${inter.className}`}>{children}</body>
      <Footer />
    </html>
  );
}
