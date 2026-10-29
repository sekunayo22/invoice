import profileAvatar from "../../assets/images/profile-avatar.png";
import { BrandMark } from "../BrandMark";
import Icon from "../Icon";
import {
  ProfileAvatar,
  SidebarContainer,
  SidebarDivider,
  SidebarFooter,
  ThemeButton,
} from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer aria-label="Main navigation">
      <BrandMark />
      <SidebarFooter>
        <ThemeButton type="button" aria-label="Toggle theme">
          <Icon name="theme" />
        </ThemeButton>
        <SidebarDivider />
        <ProfileAvatar src={profileAvatar} alt="User profile" />
      </SidebarFooter>
    </SidebarContainer>
  );
}
