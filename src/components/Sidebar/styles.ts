import styled from "@emotion/styled";
import {
  primary03,
  secondary15,
  white,
} from "../../styles/abstracts/variables";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 5;
  inset: 0 auto 0 0;
  display: flex;
  width: 103px;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 0 20px 20px 0;
  background: ${primary03};

  @media (max-width: 760px) {
    inset: 0 0 auto;
    width: 100%;
    height: 80px;
    flex-direction: row;
    border-radius: 0;
  }
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  display: grid;
  width: 20px;
  height: 20px;
  place-items: center;
  margin-bottom: 31px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${white};
    outline-offset: 4px;
  }
`;

export const SidebarDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 24px;
  background: ${secondary15};
`;

export const ProfileAvatar = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
