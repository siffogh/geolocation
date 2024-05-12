"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { supportedCountries } from "../../app/countries";
import CloseButton from "./CloseButton";

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
      <CloseButton />
    </div>
  );
}
