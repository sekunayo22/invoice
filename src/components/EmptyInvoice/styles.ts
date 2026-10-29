import styled from "@emotion/styled";
import { secondary04, secondary05 } from "../../styles/abstracts/variables";

export const EmptyInvoiceRoot = styled.section`
  display: flex;
  width: 241px;
  min-height: 342px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
`;

export const EmptyInvoiceIllustration = styled.img`
  display: block;
  width: 241px;
  height: 200px;
  object-fit: contain;
`;

export const EmptyInvoiceTitle = styled.h2`
  margin: 66px 0 0;
  color: ${secondary04};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.75px;
  white-space: nowrap;
`;

export const EmptyInvoiceDescription = styled.p`
  display: flex;
  flex-direction: column;
  margin: 23px 0 0;
  color: ${secondary05};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;

  strong {
    font-weight: 700;
  }
`;
