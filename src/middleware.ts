import { getCountryFromPathname, getCountryFromRequest } from "@/app/countries";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isAlreadySuggested =
    request.cookies.get("suggestedCountry")?.value === "true";
  const requestedCountry = getCountryFromPathname(request.nextUrl.pathname);
  const userCountry = getCountryFromRequest(request);

  if (isAlreadySuggested || !userCountry || userCountry === requestedCountry) {
    return;
  }

  return NextResponse.redirect(
    new URL(
      `${request.nextUrl.pathname}?country=${userCountry}`,
      request.nextUrl
    )
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icons).*)"],
};
