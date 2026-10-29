import type { IconNames } from "../../types/icon";
import { useController } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { InputError, InputLabel, InputWrapper } from "./styles";
import { InputContainer, StyledInput } from "./styles";

interface InputProps<T extends FieldValues = FieldValues> {
  label?: string;
  ariaLabel?: string;
  name: Path<T>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: IconNames;
  type:
    | "text"
    | "email"
    | "number"
    | "password"
    | "search"
    | "url"
    | "color"
    | "date";
  size?: "medium" | "large";
  control: Control<T>;
  min?: string;
  step?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  onChange?: () => void;
  readOnly?: boolean;
}

const Input = <T extends FieldValues>({
  label,
  ariaLabel,
  name,
  placeholder,
  required,
  type,
  disabled,
  size,
  control,
  min,
  step,
  autoFocus,
  autoComplete,
  onChange,
  readOnly,
}: InputProps<T>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules: { required: required ? "This field is required" : false },
  });
  const { error } = fieldState;

  const isSuccess = Boolean(field.value && !error);
  const isError = Boolean(error);

  // Determine appropriate autocomplete value based on input type and name
  const getAutoCompleteValue = () => {
    if (autoComplete) return autoComplete;

    // Map common field names to appropriate autocomplete values
    const autoCompleteMap: Record<string, string> = {
      email: "email",
      username: "username",
      password: "current-password",
      confirmPassword: "new-password",
      firstName: "given-name",
      lastName: "family-name",
      phone: "tel",
      phoneNumber: "tel",
      address: "street-address",
      city: "address-level2",
      state: "address-level1",
      zipCode: "postal-code",
      country: "country-name",
    };

    return autoCompleteMap[name as string] || "off";
  };

  return (
    <div>
      {label && (
        <InputLabel htmlFor={name} data-size={size}>
          {label}
          {required && <span>*</span>}
        </InputLabel>
      )}
      <InputWrapper>
        <InputContainer
          isError={isError}
          isSuccess={isSuccess}
          isDisabled={disabled}
        >
          <StyledInput
            id={name}
            aria-label={ariaLabel}
            type={type}
            placeholder={placeholder}
            {...field}
            onChange={(e) => {
              field.onChange(e);
              onChange?.();
            }}
            min={min}
            step={step}
            autoFocus={autoFocus}
            autoComplete={getAutoCompleteValue()}
            data-form-type="other"
            data-lpignore={type === "password" ? "true" : undefined}
            spellCheck="false"
            disabled={disabled}
            readOnly={readOnly || disabled}
          />
        </InputContainer>
        {error && <InputError>{error?.message}</InputError>}
      </InputWrapper>
    </div>
  );
};

export default Input;
