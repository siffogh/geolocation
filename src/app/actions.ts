"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleGeoBannerClose(pathname: string) {
  cookies().set("suggestedCountry", "true");
  redirect(pathname);
}
