import { format, formatRelative, parseJSON } from "date-fns";

export function formatCurrency(
  value: string | number,
  hideSign = false
): string {
  const amount = value ? +value : 0;

  const formatted = new Intl.NumberFormat("en-AU", {
    currency: "AUD",
    style: "currency",
  }).format(amount);

  return hideSign ? formatted.replace("$", "") : formatted;
}

export function formatDate(value: string): string {
  return value ? format(new Date(value), "yyyy/MM/dd") : "";
}

export function formatDateTimeDisplay(value: string): string {
  return value
    ? format(new Date(parseJSON(value)), "dd MMM yyyy hh:mm aaa")
    : "";
}

export function timeAgo(value: string): string {
  return value ? formatRelative(parseJSON(value), new Date()) : "";
}

export function formatDisplayDate(value: string | Date): string {
  const appDate = typeof value === "string" ? new Date(value) : value;
  return appDate.toLocaleString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
