import styled from "@emotion/styled";
import {
  accent02,
  accent04,
  accent06,
  accent01,
  accent03,
  accent05,
  primary01,
  primary03,
  secondary01,
  secondary04,
  secondary05,
  secondary06,
  secondary07,
  secondary12,
  secondary02,
  white,
} from "../../styles/abstracts/variables";
import type { InvoiceStatus } from "../../models/invoice";

export const ViewInvoicePageRoot = styled.main`
  min-height: 100vh;
  background: ${secondary01};
  color: ${secondary04};
  font-family: "League Spartan", Arial, sans-serif;
`;

export const ViewInvoiceContent = styled.section`
  width: min(730px, calc(100% - 48px));
  margin: 0 auto;
  padding: 65px 0 54px;

  @media (max-width: 760px) {
    width: min(100% - 32px, 520px);
    padding-top: 104px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin: 0 0 31px;
  padding: 0;
  border: 0;
  background: ${secondary02};
  color: ${secondary04};
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${primary01};
    outline-offset: 4px;
  }
`;

export const BackButtonArrow = styled.span`
  display: inline-flex;
  width: 8px;
  height: 10px;
  transform: rotate(180deg);

  svg {
    width: 8px;
    height: 10px;
  }
`;

export const InvoiceStatusBar = styled.div`
  display: flex;
  min-height: 88px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 32px;
  border-radius: 8px;
  background: ${white};
  box-shadow: 0 10px 10px -10px ${accent06};

  @media (max-width: 760px) {
    min-height: 130px;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 14px;
    padding: 16px;
  }
`;

export const InvoiceActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 760px) {
    justify-content: flex-end;
    gap: 6px;
  }
`;

export const StatusGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StatusLabel = styled.span`
  color: ${secondary06};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

const statusColors: Record<
  InvoiceStatus,
  { color: string; background: string }
> = {
  "PAID": { color: accent01, background: accent03 },
  "PENDING": { color: accent02, background: accent04 },
  "DRAFT": { color: primary03, background: accent05 },
};

export const StatusPill = styled.span<{ status: InvoiceStatus }>`
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

  svg {
    width: 8px;
    height: 8px;
  }
`;

export const DetailsCard = styled.article`
  min-height: 631px;
  margin-top: 24px;
  padding: 48px;
  border-radius: 8px;
  background: ${white};
  box-shadow: 0 10px 10px -10px ${accent06};
`;

export const InvoiceHeading = styled.header`
  display: flex;
  min-height: 72px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

export const InvoiceIdentifier = styled.p`
  margin: 0;
  color: ${secondary04};
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.25px;

  span {
    color: ${secondary05};
  }
`;

export const InvoiceDescription = styled.p`
  margin: 7px 0 0;
  color: ${secondary07};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

export const SenderAddress = styled.div`
  display: block;
  color: ${secondary07};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.1px;
  text-align: right;
`;

export const InvoiceMeta = styled.div`
  display: grid;
  min-height: 130px;
  grid-template-columns: 196px 203px minmax(0, 1fr);
  margin-top: 24px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }
`;

export const InvoiceDates = styled.div`
  display: grid;
  align-content: start;
  gap: 31px;

  @media (max-width: 760px) {
    gap: 24px;
  }
`;

export const MetaBlock = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
`;

export const MetaLabel = styled.span`
  color: ${secondary07};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

export const MetaValue = styled.span`
  margin-top: 13px;
  color: ${secondary04};
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.25px;
`;

export const MetaAddress = styled.address`
  display: block;
  margin-top: 7px;
  color: ${secondary07};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.1px;
`;

export const InvoiceItemsPanel = styled.div`
  height: 184px;
  margin-top: 44px;
  padding: 32px;
  border-radius: 8px 8px 0 0;
  background: ${secondary12};
  overflow: hidden;

  @media (max-width: 760px) {
    height: 184px;
    margin-top: 28px;
    padding: 24px 16px;
  }
`;

export const InvoiceItemTable = styled.table`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  margin: 0;
  border-spacing: 0;
  background: transparent;

  th,
  td {
    padding: 0;
    text-align: right;
    vertical-align: top;
  }

  th:first-child,
  td:first-child {
    width: 50%;
    text-align: left;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 15%;
    text-align: center;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 20%;
  }

  th:last-child,
  td:last-child {
    width: 15%;
  }

  th {
    height: 18px;
    color: ${secondary07};
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.1px;
    vertical-align: top;
  }

  td {
    height: 47px;
    padding-top: 32px;
    color: ${secondary07};
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  td:first-child,
  td:last-child {
    color: ${secondary04};
  }

  @media (max-width: 760px) {
    th:first-child,
    td:first-child {
      width: 40%;
    }
    th:nth-child(2),
    td:nth-child(2) {
      width: 12%;
    }
    th:nth-child(3),
    td:nth-child(3) {
      width: 24%;
    }
    th:last-child,
    td:last-child {
      width: 24%;
    }
    td {
      padding-top: 24px;
    }
  }
`;

export const ItemCell = styled.td``;

export const AmountDue = styled.footer`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  border-radius: 0 0 8px 8px;
  background: ${primary03};
  color: ${white};

  span {
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.1px;
  }

  strong {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.5px;
  }
`;
