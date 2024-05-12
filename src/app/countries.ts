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
