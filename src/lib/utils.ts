import { clsx, type ClassValue } from "clsx"
import { getRequestConfig } from "next-intl/server";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatIsoToLocale(
  isoString: string,
) {

  
  // const locale = new Intl.DateTimeFormat().resolvedOptions().locale ?? "en-US";
  const locale = "en-US"
  
  // const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone ?? "America/New_York";
  const timeZone = "America/New_York"

  console.log("Locale:", locale);
  console.log("TimeZone:", timeZone);

  const d = new Date(isoString);
  const fmt = new Intl.DateTimeFormat(locale, {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const parts = Object.fromEntries(fmt.formatToParts(d).map(p => [p.type, p.value]));
  return `${parts.day}.${parts.month}.${parts.year} ${parts.hour}:${parts.minute}:${parts.second}`;
}