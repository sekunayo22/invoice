import styled from "@emotion/styled";
import {
  accent01,
  accent07,
  primary01,
  secondary04,
  secondary05,
  secondary07,
  secondary14,
  white,
} from "../../styles/abstracts/variables";

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 9px;
  color: ${secondary05};
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.1px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div<{
  isSuccess?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  background-color: ${({ isDisabled }) => (isDisabled ? secondary14 : white)};
  border: ${({ isError }) =>
    isError ? `1px solid ${accent07}` : `1px solid ${secondary14}`};
  border-radius: 4px;
  &:focus-within {
    border-color: ${primary01};
  }
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "text")};
  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const InputIcon = styled.div`
  width: 20px;
  height: 20px;
`;

export const InputError = styled.div`
  font-size: 12px;
  color: ${accent07};
`;

export const InputSuccess = styled.div`
  font-size: 12px;
  color: ${accent01};
`;

export const InputPlaceholder = styled.div`
  font-size: 12px;
  color: ${secondary05};
`;

export const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background-color: initial;
  color: ${secondary04};
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  outline: none;
  &::placeholder {
    font-size: 13px;
    color: ${secondary07};
  }
  &[type="date"] {
    color-scheme: light;
  }
`;

export const PasswordToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 12px 0 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${secondary07};
  &:hover {
    color: ${secondary04};
  }
  & svg {
    width: 18px;
    height: 18px;
  }
`;
