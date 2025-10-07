import { useTranslations } from "next-intl";

export default function HomePage() {
  const translationsCommon = useTranslations("common")
  return (
    <div>
      <p>{translationsCommon("projects")}</p>
    </div>
  );
}