import Icon from "../Icon";
import {
  AppHeader,
  AppHeaderActions,
  AppHeaderTitle,
  // FilterButton,
  // FilterWrap,
  HeaderInvoiceButton,
  InvoiceCount,
} from "./styles";

type HeaderProps = {
  invoiceCount: number;
  handleNewInvoice?: () => void;
};

export function Header({ invoiceCount, handleNewInvoice }: HeaderProps) {
  return (
    <AppHeader>
      <div>
        <AppHeaderTitle>Invoices</AppHeaderTitle>
        <InvoiceCount>There are {invoiceCount} total invoices</InvoiceCount>
      </div>
      <AppHeaderActions>
        {/* <FilterWrap>
          <FilterButton type="button" aria-label="Filter invoices">
            <Icon name="chevron-down" />
          </FilterButton>
        </FilterWrap> */}
        <HeaderInvoiceButton
          variant="primary"
          type="button"
          ariaLabel="New invoice"
          handleClick={handleNewInvoice}
          icon={<Icon name="plus" />}
          label="New Invoice"
        />
      </AppHeaderActions>
    </AppHeader>
  );
}
