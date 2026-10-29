import type { Invoice } from "../../models/invoice";
import type { IconNames } from "../../types/icon";
import Icon from "../Icon";
import {
  Amount,
  Customer,
  InvoiceCardRoot,
  InvoiceDue,
  InvoiceId,
  OpenInvoiceButton,
  StatusBadge,
} from "./styles";

type InvoiceCardProps = {
  invoice: Invoice;
};

export function InvoiceCard({ invoice }: InvoiceCardProps) {
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: invoice?.currency,
  });
  const dueDate = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(invoice.paymentDue);

  return (
    <InvoiceCardRoot
      to={`/invoices/${invoice?.id}`}
      aria-label={`Invoice ${invoice?.id}`}
    >
      <InvoiceId>
        <span>#</span>
        {invoice?.id}
      </InvoiceId>
      <InvoiceDue>
        <span>Due&nbsp; </span>
        {dueDate}
      </InvoiceDue>
      <Customer>{invoice?.billTo?.name}</Customer>
      <Amount>{currencyFormatter.format(invoice?.amountDue ?? 0)}</Amount>
      <StatusBadge status={invoice?.status}>
        <Icon name={invoice?.status?.toLowerCase() as IconNames} />
        {invoice?.status}
      </StatusBadge>
      <OpenInvoiceButton aria-hidden="true">
        <Icon name="chevron-right" />
      </OpenInvoiceButton>
    </InvoiceCardRoot>
  );
}
