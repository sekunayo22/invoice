import styled from "@emotion/styled";
import { Link } from "react-router";
import {
  primary01,
  accent06,
  accent05,
  secondary07,
  accent01,
  accent03,
  accent02,
  accent04,
  primary03,
  secondary05,
  secondary04,
  secondary06,
  secondary02,
  white,
} from "../../styles/abstracts/variables";

export const InvoiceCardRoot = styled(Link)`
  display: grid;
  min-height: 72px;
  grid-template-columns: 86px 136px 168px 68px 104px 24px;
  align-items: center;
  column-gap: 16px;
  padding: 0 14px 0 32px;
  border-radius: 8px;
  background: ${white};
  box-shadow: 0 10px 10px -10px ${accent06};
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  p {
    margin: 0;
    white-space: nowrap;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1.25fr 1.35fr 1fr 104px 20px;
    column-gap: 10px;
    padding-right: 18px;
    padding-left: 24px;
  }

  @media (max-width: 760px) {
    position: relative;
    min-height: 134px;
    grid-template-columns: 1fr auto;
    grid-template-rows: 20px 20px 40px;
    gap: 8px 12px;
    padding: 20px 24px;
  }

  @media (max-width: 420px) {
    padding-right: 18px;
    padding-left: 20px;
  }
`;

export const InvoiceId = styled.p`
  color: ${secondary04};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.25px;
  span {
    color: ${secondary07};
  }

  @media (max-width: 760px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const InvoiceDue = styled.p`
  color: ${secondary06};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;
  span {
    color: ${secondary05};
  }

  @media (max-width: 760px) {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const Customer = styled.p`
  color: ${secondary06};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.1px;

  @media (max-width: 760px) {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    padding-right: 16px;
  }
  @media (max-width: 420px) {
    max-width: 115px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`;

export const Amount = styled.p`
  color: ${secondary04};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.25px;
  text-align: right;

  @media (max-width: 760px) {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
    text-align: left;
  }
`;

const statusColors = {
  Paid: { color: accent01, background: accent03 },
  Pending: { color: accent02, background: accent04 },
  Draft: { color: primary03, background: accent05 },
};

export const StatusBadge = styled.span<{
  status: "Paid" | "Pending" | "Draft";
}>`
  display: flex;
  width: 104px;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 6px;
  color: ${({ status }) => statusColors[status].color};
  background: ${({ status }) => statusColors[status].background};
  font-size: 15px;
  font-weight: 700;
  margin-left: 24px;

  svg {
    width: 8px;
    height: 8px;
  }
  @media (max-width: 1100px) {
    margin-left: 0;
  }
  @media (max-width: 760px) {
    grid-column: 2;
    grid-row: 3;
    justify-self: end;
    margin-left: 0;
  }
`;

export const OpenInvoiceButton = styled.span`
  display: grid;
  width: 24px;
  height: 40px;
  place-items: center;
  padding: 0;
  border: 0;
  background: ${secondary02};
  cursor: pointer;
  svg {
    width: 6.12px;
    height: 9.42px;
  }
  &:focus-visible {
    outline: 2px solid ${primary01};
    outline-offset: 3px;
  }
  margin-left: 18px;

  @media (max-width: 1100px) {
    margin-left: 0;
  }
  @media (max-width: 760px) {
    position: absolute;
    top: 14px;
    right: 12px;
    width: 12px;
    height: 20px;
    margin-left: 0;
  }
`;
