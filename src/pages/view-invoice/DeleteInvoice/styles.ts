import styled from "@emotion/styled";
import {
  accent06,
  secondary04,
  secondary05,
  white,
} from "../../../styles/abstracts/variables";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const DeleteInvoiceForm = styled.div`
  width: 480px;
  height: 249px;
  border-radius: 8px;
  background: ${white};
  box-shadow: 0 10px 10px -10px ${accent06};
  padding: 32px;
`;

export const DeleteInvoiceFormHeading = styled.h1`
  color: ${secondary04};
  font-family: "League Spartan";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.5px;
`;

export const DeleteInvoiceFormDescription = styled.p`
  color: ${secondary05};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.1px;
`;

export const DeleteInvoiceFormButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DeleteInvoiceFormButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
