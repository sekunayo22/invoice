import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { InvoiceStatus } from "../../models/invoice";
import { Button } from "../../components/Button";
import Icon from "../../components/Icon";
import { Sidebar } from "../../components/Sidebar";
import {
  AmountDue,
  BackButton,
  BackButtonArrow,
  DetailsCard,
  InvoiceDescription,
  InvoiceActions,
  InvoiceDates,
  InvoiceHeading,
  InvoiceIdentifier,
  InvoiceItemsPanel,
  InvoiceItemTable,
  InvoiceMeta,
  InvoiceStatusBar,
  ItemCell,
  MetaAddress,
  MetaBlock,
  MetaLabel,
  MetaValue,
  SenderAddress,
  StatusGroup,
  StatusLabel,
  StatusPill,
  ViewInvoiceContent,
  ViewInvoicePageRoot,
} from "./styles";
import type { IconNames } from "../../types/icon";
import { EditInvoice } from "./EditInvoice";
import DeleteInvoice from "./DeleteInvoice";
import { useGetInvoiceByIdQuery } from "../../services/invoice";

export default function ViewInvoice() {
  const [isDeletingInvoice, setIsDeletingInvoice] = useState(false);
  const [isEditingInvoice, setIsEditingInvoice] = useState(false);
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const { id } = useParams();
  const {data: invoice} = useGetInvoiceByIdQuery(Number(id))
  const currencyFormatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: invoice?.currency || "GBP",
  });
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleDeleteInvoice = () => setIsDeletingInvoice(true);
  const handleEditInvoice = () => setIsEditingInvoice(true);
  const handleCancelEditInvoice = () => setIsEditingInvoice(false);
  const handleCancelDeleteInvoice = () => setIsDeletingInvoice(false);

  if(!invoice) {
    return (
      <h1>No data yet!. Kindly check the invoice id</h1>
    )
  }

  return (
    <ViewInvoicePageRoot>
      <Sidebar />
      <ViewInvoiceContent>
        <BackButton type="button" onClick={handleGoBack}>
          <BackButtonArrow>
            <Icon name="chevron-right" />
          </BackButtonArrow>
          Go back
        </BackButton>

        <InvoiceStatusBar>
          <StatusGroup>
            <StatusLabel>Status</StatusLabel>
            <StatusPill status={invoice?.status as InvoiceStatus}>
              <Icon name={invoice?.status.toLowerCase() as IconNames} />
              {invoice?.status}
            </StatusPill>
          </StatusGroup>
          <InvoiceActions>
            <Button
              handleClick={handleDeleteInvoice}
              variant="danger"
              type="button"
              label="Delete"
            />
            <Button
              handleClick={handleEditInvoice}
              variant="secondary"
              type="button"
              label="Edit"
            />
            <Button variant="primary" type="button" label="Mark as Paid" />
          </InvoiceActions>
        </InvoiceStatusBar>

        <DetailsCard aria-label={`Invoice ${invoice?.id}`}>
          <InvoiceHeading>
            <p>
              <InvoiceIdentifier>
                <span>#</span> {invoice?.id}
              </InvoiceIdentifier>
              <InvoiceDescription>
                {invoice?.description ?? ""}
              </InvoiceDescription>
            </p>
            <SenderAddress>
              <p>{invoice?.billTo?.address ?? ""} </p>
              <p>{invoice?.billTo?.city ?? ""} </p>
              <p>{invoice?.billTo?.postcode ?? ""} </p>
              <p>{invoice?.billTo?.country ?? ""} </p>
            </SenderAddress>
          </InvoiceHeading>

          <InvoiceMeta>
            <InvoiceDates>
              <MetaBlock>
                <MetaLabel>Invoice Date</MetaLabel>
                <MetaValue>
                  {invoice?.invoiceDate
                    ? dateFormatter.format(new Date(invoice.invoiceDate!))
                    : ""}
                </MetaValue>
              </MetaBlock>
              <MetaBlock>
                <MetaLabel>Payment Due</MetaLabel>
                <MetaValue>
                   {invoice?.paymentDue
                    ? dateFormatter.format(new Date(invoice.paymentDue!))
                    : ""}
                </MetaValue>
              </MetaBlock>
            </InvoiceDates>
            <MetaBlock>
              <MetaLabel>Bill From</MetaLabel>
              <MetaValue>{invoice?.billFrom?.name}</MetaValue>
              <MetaAddress>
                <p>{invoice?.billFrom?.address ?? ""} </p>
                <p>{invoice?.billFrom?.city ?? ""} </p>
                <p>{invoice?.billFrom?.postcode ?? ""} </p>
                <p>{invoice?.billFrom?.country ?? ""} </p>
              </MetaAddress>
            </MetaBlock>
            <MetaBlock>
              <MetaLabel>Bill To</MetaLabel>
              <MetaValue>{invoice?.billTo?.name ?? ""}</MetaValue>
            </MetaBlock>
          </InvoiceMeta>

          <InvoiceItemsPanel>
            <InvoiceItemTable>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>QTY.</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {(invoice?.items ?? []).map((item) => (
                  <tr key={item.name}>
                    <ItemCell>{item.name}</ItemCell>
                    <ItemCell>{item.quantity}</ItemCell>
                    <ItemCell>{currencyFormatter.format(item.price)}</ItemCell>
                    <ItemCell>{currencyFormatter.format(item.total)}</ItemCell>
                  </tr>
                ))}
              </tbody>
            </InvoiceItemTable>
          </InvoiceItemsPanel>

          <AmountDue>
            <span>Amount Due</span>
            <strong>{currencyFormatter.format(invoice?.amountDue ?? 0)}</strong>
          </AmountDue>
        </DetailsCard>
      </ViewInvoiceContent>
      {isEditingInvoice && (
        <EditInvoice handleCancel={handleCancelEditInvoice} invoice={invoice} />
      )}
      {isDeletingInvoice && (
        <DeleteInvoice
          handleCancel={handleCancelDeleteInvoice}
          invoice={invoice}
        />
      )}
    </ViewInvoicePageRoot>
  );
}
