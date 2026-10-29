import styled from "@emotion/styled";
import {
  primary01,
  secondary04,
  secondary05,
  secondary14,
  secondary12,
  white,
} from "../../../styles/abstracts/variables";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 4;
  inset: 0;
  display: flex;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
`;

export const Drawer = styled.aside`
  box-sizing: border-box;
  width: 720px;
  height: 100vh;
  overflow-y: auto;
  background: ${white};
  scrollbar-width: thin;

  @media (max-width: 760px) {
    width: 100%;
    height: 100dvh;
  }
`;

export const CreateInvoiceForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  padding: 64px 56px 32px 159px;
  color: ${secondary04};

  @media (max-width: 760px) {
    padding: 112px 24px 32px;
  }
`;

export const DrawerTitle = styled.h2`
  margin: 0 0 36px;
  color: ${secondary04};
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
`;

export const Section = styled.section`
  display: grid;
  gap: 24px;
  margin-bottom: 32px;
`;

export const FormSectionTitle = styled.h3`
  margin: 0;
  color: ${primary01};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const Field = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;
`;

export const FieldLabel = styled.span`
  min-height: 15px;
  margin-bottom: 9px;
  color: ${secondary05};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

export const SelectInput = styled.select`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  min-width: 0;
  padding: 0 20px;
  border: 1px solid ${secondary14};
  border-radius: 4px;
  outline: none;
  background: ${white};
  color: ${secondary04};
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;

  &:focus {
    border-color: ${primary01};
  }
`;

export const ItemTotal = styled.output`
  display: flex;
  min-width: 0;
  height: 48px;
  align-items: center;
  justify-content: flex-end;
  color: ${secondary05};
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  white-space: nowrap;
`;

export const ThreeColumnFields = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 520px) {
    gap: 10px;
  }
`;

export const TwoColumnFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const BillingFields = styled.div`
  display: grid;
  gap: 24px;
`;

export const ItemList = styled.section`
  margin-top: 29px;
`;

export const ItemListHeading = styled.h3`
  margin: 0 0 24px;
  color: ${secondary05};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.375px;
`;

export const ItemRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 180px 64px 16px;
  align-items: end;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr) 16px;
    align-items: start;
  }

  @media (max-width: 560px) {
    & > :first-child {
      grid-column: 1;
    }
    & > :nth-child(2) {
      grid-column: 1;
    }
    & > :nth-child(3) {
      grid-column: 1;
    }
    & > :last-child {
      grid-column: 2;
      grid-row: 1;
    }
  }
`;

export const ItemFields = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 100px);
  gap: 16px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const RemoveItemButton = styled.button`
  display: grid;
  width: 16px;
  height: 48px;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${secondary05};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;

  svg {
    display: block;
  }

  &:hover {
    color: #ec5757;
  }
`;

export const AddItemButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  border: 0;
  border-radius: 24px;
  background: ${secondary12};
  color: ${secondary05};
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.25px;
  cursor: pointer;

  &:hover {
    background: ${secondary14};
  }
`;

export const FormActions = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 32px;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  button {
    min-height: 48px;
    padding: 0 20px;
    font-size: 13px;
  }

  @media (max-width: 560px) {
    align-items: stretch;
    flex-direction: column-reverse;

    & > div {
      justify-content: flex-end;
    }
  }
`;
