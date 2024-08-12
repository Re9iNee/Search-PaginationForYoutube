"use client";

import { useCallback } from "react";

import Search from "@/app/components/Search";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchWrapper() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setTermToUrl = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);

      if (value !== "") {
        params.set("term", value);
      } else {
        params.delete("term");
      }

      push(`${pathname}?${params.toString()}`);
    },
    [pathname, searchParams, push]
  );

  return <Search onChange={(t) => setTermToUrl(t)} />;
}
