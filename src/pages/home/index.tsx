import { useState } from "react";
import { Header } from "../../components/Header";
import { EmptyInvoice } from "../../components/EmptyInvoice";
import { InvoiceCard } from "../../components/InvoiceCard";
import { Sidebar } from "../../components/Sidebar";
import { invoices } from "../../data/invoices";
import type { AddInvoiceRequest } from "../../models/invoice";
import { CreateInvoice } from "./CreateInvoice";
import { StyledHome, Content, InvoiceList } from "./styles";

function Home() {
  const [homeInvoices, setHomeInvoices] = useState(invoices);
  const [isCreatingInvoice, setIsCreatingInvoice] = useState(false);

  const handleSaveInvoice = (invoice: AddInvoiceRequest) => {
    const id = `${invoice.billTo?.name
      .replace(/\s/g, "")
      .slice(0, 2)
      .toUpperCase()}${String(Date.now()).slice(-4)}`;

    setHomeInvoices((current) => [{ ...invoice, id }, ...current]);
    setIsCreatingInvoice(false);
  };
  const handleCreateInvoice = () => setIsCreatingInvoice(true);
  const handleCancelCreateInvoice = () => setIsCreatingInvoice(false);

  return (
    <StyledHome>
      <Sidebar />
      <Content>
        <Header
          invoiceCount={homeInvoices.length}
          handleNewInvoice={handleCreateInvoice}
        />
        {homeInvoices.length === 0 ? (
          <EmptyInvoice />
        ) : (
          <InvoiceList>
            {homeInvoices.map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
          </InvoiceList>
        )}
      </Content>
      {isCreatingInvoice && (
        <CreateInvoice
          handleCancel={handleCancelCreateInvoice}
          handleSave={handleSaveInvoice}
        />
      )}
    </StyledHome>
  );
}

export default Home;
