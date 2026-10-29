import type { CSSProperties, ReactNode } from "react";
import { StyledButton } from "./styles";
import type {
  ButtonIconPosition,
  ButtonType,
  ButtonVariant,
} from "../../types/component";

interface ButtonProps {
  label?: string;
  variant: ButtonVariant;
  type: ButtonType;
  buttonStyles?: CSSProperties;
  disabled?: boolean;
  handleClick?: () => void;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  ariaLabel?: string;
  name?: string;
  value?: string;
}

export const Button = ({
  variant = "primary",
  type = "button",
  handleClick,
  disabled,
  label,
  children,
  icon,
  iconPosition = "left",
  ariaLabel,
  buttonStyles,
  name,
  value,
}: ButtonProps) => {
  const content = label ?? children;
  return (
    <StyledButton
      variant={variant}
      type={type}
      style={buttonStyles}
      aria-label={ariaLabel}
      name={name}
      value={value}
      onClick={(e) => {
        e.stopPropagation();
        handleClick?.();
      }}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && icon}
      {content}
      {icon && iconPosition === "right" && icon}
    </StyledButton>
  );
};
