import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
type Locale = "en" | "id" | undefined;
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE") as any;
  let locale: Locale = "en";
  if (
    cookieLocale.value &&
    (cookieLocale.value === "en" || cookieLocale.value === "id")
  ) {
    locale = cookieLocale.value;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
