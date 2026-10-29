import emptyInvoiceIllustration from "../../assets/images/empty-invoice.svg";
import {
  EmptyInvoiceRoot,
  EmptyInvoiceIllustration,
  EmptyInvoiceTitle,
  EmptyInvoiceDescription,
} from "./styles";

export function EmptyInvoice() {
  return (
    <EmptyInvoiceRoot aria-labelledby="empty-invoice-title">
      <EmptyInvoiceIllustration src={emptyInvoiceIllustration} alt="" />
      <EmptyInvoiceTitle id="empty-invoice-title">
        There is nothing here
      </EmptyInvoiceTitle>
      <EmptyInvoiceDescription>
        <span>Create an invoice by clicking the</span>
        <span>
          <strong>New Invoice</strong> button and get started
        </span>
      </EmptyInvoiceDescription>
    </EmptyInvoiceRoot>
  );
}
