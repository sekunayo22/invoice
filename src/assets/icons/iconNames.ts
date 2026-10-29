import type { IconNames } from "../../types/icon";
import brandSymbol from "./brand-symbol.svg?raw";
import brandWaveMask from "./brand-wave-mask.svg?raw";
import chevronDown from "./chevron-down.svg?raw";
import chevronRight from "./chevron-right.svg?raw";
import theme from "./theme.svg?raw";
import plus from "./plus.svg?raw";
import draft from "./draft.svg?raw";
import paid from "./paid.svg?raw";
import pending from "./pending.svg?raw";
import trash from "./delete.svg?raw";

export const icons: Record<IconNames, string> = {
  "brand-symbol": brandSymbol,
  "brand-wave-mask": brandWaveMask,
  "chevron-down": chevronDown,
  "chevron-right": chevronRight,
  theme,
  plus: plus,
  draft: draft,
  paid: paid,
  pending: pending,
  trash,
};
