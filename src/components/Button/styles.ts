import styled from "@emotion/styled";
import {
  accent07,
  accent08,
  primary01,
  primary02,
  primary03,
  secondary02,
  secondary04,
  secondary05,
  secondary07,
  secondary12,
  secondary14,
  white,
} from "../../styles/abstracts/variables";
import type { ButtonVariant } from "../../types/component";

type ButtonStyle = {
  background: string;
  color: string;
  hoverBackground: string;
  border?: string;
};

const buttonStyles = (variant: ButtonVariant): ButtonStyle => {
  switch (variant) {
    case "secondary":
      return {
        background: secondary12,
        color: secondary07,
        hoverBackground: secondary14,
      };
    case "outlined":
      return {
        background: secondary02,
        color: primary01,
        hoverBackground: secondary12,
        border: `1px solid ${primary01}`,
      };
    case "draft":
      return {
        background: primary03,
        color: secondary05,
        hoverBackground: secondary04,
      };
    case "danger":
      return {
        background: accent07,
        color: white,
        hoverBackground: accent08,
      };
    case "new":
      return {
        background: secondary12,
        color: secondary07,
        hoverBackground: secondary14,
      };
    case "primary":
    default:
      return {
        background: primary01,
        color: white,
        hoverBackground: primary02,
      };
  }
};

export const StyledButton = styled.button<{
  variant: ButtonVariant;
}>`
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 24px;
  border: ${({ variant }) => buttonStyles(variant).border ?? "none"};
  border-radius: 24px;
  background: ${({ variant }) => buttonStyles(variant).background};
  color: ${({ variant }) => buttonStyles(variant).color};
  font-family: "League Spartan", Arial, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 120ms ease;

  &:hover:not(:disabled) {
    background: ${({ variant }) => buttonStyles(variant).hoverBackground};
  }

  &:focus-visible {
    outline: 2px solid ${primary01};
    outline-offset: 3px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;
