import { useState } from "react";
import { Header } from "../../components/Header";
import { EmptyInvoice } from "../../components/EmptyInvoice";
import { InvoiceCard } from "../../components/InvoiceCard";
import { Sidebar } from "../../components/Sidebar";
import { CreateInvoice } from "./CreateInvoice";
import { StyledHome, Content, InvoiceList } from "./styles";
import { useGetInvoicesQuery } from "../../services/invoice";

function Home() {
  const { data: invoices } = useGetInvoicesQuery();
  const [isCreatingInvoice, setIsCreatingInvoice] = useState(false);

  const handleCreateInvoice = () => setIsCreatingInvoice(true);
  const handleCancelCreateInvoice = () => setIsCreatingInvoice(false);

  return (
    <StyledHome>
      <Sidebar />
      <Content>
        <Header
          invoiceCount={invoices?.length ?? 0}
          handleNewInvoice={handleCreateInvoice}
        />
        {!invoices?.length ? (
          <EmptyInvoice />
        ) : (
          <InvoiceList>
            {invoices?.map((invoice) => (
              <InvoiceCard key={invoice.id} invoice={invoice} />
            ))}
          </InvoiceList>
        )}
      </Content>
      {isCreatingInvoice && (
        <CreateInvoice handleCancel={handleCancelCreateInvoice} />
      )}
    </StyledHome>
  );
}

export default Home;
