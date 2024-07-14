"use client";
import { changeLanguageAction } from "@/utility/action";
import { useLocale } from "next-intl";
export default function BtnChangeLanguage() {
  const locale = useLocale();
  const handleClick = async () => {
    let lang = "en";
    if (locale === "id") {
      lang = "en";
    } else {
      lang = "id";
    }
    console.log(lang);
    const res = await changeLanguageAction(lang);
  };
  return (
    <button className="" onClick={handleClick}>
      EN/ID
    </button>
  );
}
