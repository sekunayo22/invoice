import { icons } from "../../assets/icons/iconNames";
import { type IconNames } from "../../types/icon";
import { StyledIcon } from "./styles";
interface IconProps {
  name: IconNames;
}

const Icon: React.FC<IconProps> = ({ name }): React.ReactNode => {
  return (
    <StyledIcon
      aria-hidden={true}
      id="icon-element"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
};

export default Icon;
