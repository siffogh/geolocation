import { NextRequest } from "next/server";

export const supportedCountries = [
  {
    code: "us",
    label: "United States",
  },
  {
    code: "de",
    label: "Germany",
  },
];

export function getCountryFromPathname(pathname: string) {
  const pathnameCountryCode = pathname.split("/")[1];
  return (
    supportedCountries.find((country) => country.code === pathnameCountryCode)
      ?.code || supportedCountries[0].code
  );
}

export function getCountryFromRequest(request: NextRequest) {
  const hasCountryParam = request.nextUrl.searchParams.has("country");

  if (hasCountryParam) {
    return null;
  }

  const userCountry = request.geo?.country;

  const isUserCountrySupported = supportedCountries.some(
    (country) => country.code === userCountry
  );

  return isUserCountrySupported ? userCountry : null;
}
