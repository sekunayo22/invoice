import { icons } from "../../assets/icons/iconNames";
import Icon from "../Icon";
import { BrandBase, BrandMarkRoot, BrandSymbol, BrandWave } from "./styles";

const brandWaveMask = `url("data:image/svg+xml,${encodeURIComponent(icons["brand-wave-mask"])}")`;

export function BrandMark() {
  return (
    <BrandMarkRoot aria-label="Invoice app">
      <BrandBase />
      <BrandWave
        style={{
          maskImage: brandWaveMask,
          WebkitMaskImage: brandWaveMask,
        }}
      />
      <BrandSymbol>
        <Icon name="brand-symbol" />
      </BrandSymbol>
    </BrandMarkRoot>
  );
}
