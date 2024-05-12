import { getCountryFromPathname, supportedCountries } from "@/app/countries";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const hasCountryParam = request.nextUrl.searchParams.has("country");
  const isAlreadySuggested =
    request.cookies.get("suggestedCountry")?.value === "true";

  if (hasCountryParam || isAlreadySuggested) {
    return;
  }

  const userCountry = request.geo?.country;
  const isUserCountrySupported = supportedCountries.some(
    (country) => country.code === userCountry
  );
  const requestedCountry = getCountryFromPathname(request.nextUrl.pathname);

  if (isUserCountrySupported && userCountry !== requestedCountry) {
    const response = NextResponse.redirect(
      new URL(
        `${request.nextUrl.pathname}?country=${userCountry}`,
        request.nextUrl
      )
    );
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icons).*)"],
};
