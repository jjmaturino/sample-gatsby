/*
  Author: Juan Maturino
  Date: 12/4/2020

  Title: Sidebar
  Description: Sidebar Menu component that will display menu options
 */

import React from "react"
import styled from "styled-components"
import logo from "../../assets/logos/Edua.svg"
import userIcon from "../../assets/icons/User.png"
import settingIcon from "../../assets/icons/Settings.png"
import dashboardIcon from "../../assets/icons/dashboard_icon.png"
import MenuButton from "../buttons/menu_button.js"
import { BodyIntro, Caption } from "../styles/text_styles"

export default function Sidebar() {
  return (
    <Container>
      <MenuHeaderContainer>
        <img src={logo} alt="Logo" width="78" />
        <TextArea>
          <Name>Juan M.</Name>
          <Date>Dec. 15, 2020</Date>
        </TextArea>
      </MenuHeaderContainer>
      <MenuItemsContainer>
        <MenuButton
          link="/dashboard"
          title="Dashboard"
          image={dashboardIcon}
          imageAlt="Logo"
        />
        <MenuButton
          link="/account"
          title="Account"
          image={userIcon}
          imageAlt="Logo"
        />
        <MenuButton
          link="/settings"
          title="Settings"
          image={settingIcon}
          imageAlt="Logo"
        />
      </MenuItemsContainer>
      <LogOutSection>
        <LogoutButton>
          <a href="https://www.edua.io">Log Out</a>
        </LogoutButton>
      </LogOutSection>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 260px;
  border-right: 1px solid #f3f4f6;
`

const MenuHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 20px 0 0 20px;
`

const TextArea = styled.div`
  margin: 36px 0 0 0;
  display: grid;
  grid-gap: 4px 0;
  text-align: left;
`

const MenuItemsContainer = styled.div`
  width: 260px;
  height: 200px;
  margin: 65px 0 0 0px;
  display: grid;
  justify-items: center;
`

const Name = styled(BodyIntro)`
  color: #262628;
  font-size: 24px;
  font-weight: 700;
`

const Date = styled(Caption)`
  color: #bab9c1;
  font-size: 15px;
  font-weight: 400;
`

const LogOutSection = styled.div`
  margin: 200px 0 0 0;
`

const LogoutButton = styled.div`
  width: 170px;
  height: 56px;
  margin: 0 auto;
  background: #5b4dbe;
  border-radius: 16px;
  display: grid;
  justify-items: center;
  align-items: center;

  a {
    display: block;
    color: white;
  }
`
