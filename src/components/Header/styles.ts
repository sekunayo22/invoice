import styled from "@emotion/styled";
import {
  secondary02,
  secondary05,
  primary01,
  secondary04,
} from "../../styles/abstracts/variables";
import { Button } from "../Button";

export const AppHeader = styled.header`
  display: flex;
  min-height: 54px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 760px) {
    min-height: 48px;
    margin-bottom: 32px;
    gap: 12px;
  }
`;

export const AppHeaderTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1.125px;
  color: ${secondary04};

  @media (max-width: 760px) {
    font-size: 32px;
  }
  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

export const InvoiceCount = styled.p`
  margin: 8px 0 0;
  color: ${secondary05};
  font-size: 13px;
  line-height: 15px;

  @media (max-width: 760px) {
    font-size: 12px;
  }
`;

export const AppHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1100px) {
    gap: 24px;
  }
  @media (max-width: 760px) {
    gap: 18px;
  }
  @media (max-width: 420px) {
    gap: 12px;
  }
`;

export const FilterWrap = styled.div`
  position: relative;
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 0;
  border: 0;
  color: inherit;
  background: ${secondary02};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;

  svg {
    width: 10px;
    height: auto;
  }
  &:focus-visible {
    outline: 2px solid ${primary01};
    outline-offset: 3px;
  }

  @media (max-width: 760px) {
    gap: 8px;
    font-size: 14px;
  }
  @media (max-width: 420px) {
    max-width: 113px;
    font-size: 12px;
  }
`;

export const HeaderInvoiceButton = styled(Button)`
  width: 150px;
  padding: 0 8px;
  gap: 14px;

  @media (max-width: 760px) {
    width: 48px;
    padding: 0;
  }

  .header-invoice-label {
    @media (max-width: 760px) {
      display: none;
    }
  }
`;
