import styled from "@emotion/styled";
import { secondary01, white } from "../../styles/abstracts/variables";

export const StyledHome = styled.main`
  min-height: 100vh;
  padding: 77px 32px 40px;
  color: ${white};
  background: ${secondary01};
  font-family: "League Spartan", Arial, sans-serif;

  @media (max-width: 1100px) {
    padding-right: 28px;
    padding-left: 131px;
  }
  @media (max-width: 760px) {
    padding: 108px 24px 32px;
  }
  @media (max-width: 420px) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export const Content = styled.section`
  width: min(730px, 100%);
  margin: 0 auto;

  @media (max-width: 760px) {
    width: min(100%, 520px);
  }
`;

export const InvoiceList = styled.div`
  display: grid;
  gap: 16px;
`;
