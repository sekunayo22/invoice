import { useNavigate } from "react-router";
import { Button } from "../../../components/Button";
import type { Invoice } from "../../../models/invoice";
import { useDeleteInvoiceMutation } from "../../../services/invoice";
import {
  Backdrop,
  DeleteInvoiceForm,
  DeleteInvoiceFormButtons,
  DeleteInvoiceFormButtonsContainer,
  DeleteInvoiceFormDescription,
  DeleteInvoiceFormHeading,
} from "./styles";

interface DeleteInvoiceProps {
  invoice: Invoice | undefined;
  handleCancel: () => void;
}
const DeleteInvoice = ({ invoice, handleCancel }: DeleteInvoiceProps) => {
  const [deleteInvoice] = useDeleteInvoiceMutation();
  const navigate = useNavigate();
  const handleBackdropMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCancel();
    }
  };
  const handleDeleteInvoice = () => {
    if (!invoice) return;
    deleteInvoice(invoice.id)
      .unwrap()
      .then(() => {
        handleCancel();
        navigate("/");
      });
  };
  return (
    <Backdrop onMouseDown={handleBackdropMouseDown}>
      <DeleteInvoiceForm>
        <DeleteInvoiceFormHeading>Confirm Deletion</DeleteInvoiceFormHeading>
        <DeleteInvoiceFormDescription>
          Are you sure you want to delete invoice #{invoice?.id} ? This action
          cannot be undone.
        </DeleteInvoiceFormDescription>
        <DeleteInvoiceFormButtonsContainer>
          <DeleteInvoiceFormButtons>
            <Button
              handleClick={handleCancel}
              type="button"
              label="Cancel"
              variant="secondary"
            />
            <Button
              handleClick={handleDeleteInvoice}
              type="button"
              label="Delete"
              variant="danger"
            />
          </DeleteInvoiceFormButtons>
        </DeleteInvoiceFormButtonsContainer>
      </DeleteInvoiceForm>
    </Backdrop>
  );
};

export default DeleteInvoice;
