"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { handleGeoBannerClose } from "./actions";
import { supportedCountries } from "./countries";

export default function Banner() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country");
  const country = supportedCountries.find((c) => c.code === countryParam);

  if (!country) return null;

  return (
    <div className="px-4 py-2 flex justify-center gap-4 bg-accent">
      <div>
        Continue to <Link href={`/${country.code}`}>{country.label}</Link>
      </div>
      <button onClick={() => handleGeoBannerClose(window.location.pathname)}>
        <Image src="/icons/cross.svg" alt="Close" width={14} height={14} />
      </button>
    </div>
  );
}
