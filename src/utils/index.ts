export function dateAtLocalMidnight(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function toDateInputValue(value?: Date | string) {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getPaymentTerms(
  invoiceDate?: Date | string,
  paymentDue?: Date | string,
) {
  if (!invoiceDate || !paymentDue) return "30";

  const issue = new Date(invoiceDate);
  const due = new Date(paymentDue);

  if (Number.isNaN(issue.getTime()) || Number.isNaN(due.getTime())) {
    return "30";
  }

  const days = Math.round(
    (due.getTime() - issue.getTime()) / (1000 * 60 * 60 * 24),
  );

  return ["1", "7", "14", "30"].includes(String(days)) ? String(days) : "30";
}
