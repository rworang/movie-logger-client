import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logout } from "../redux/userSlice";

import { Menu } from "@mui/icons-material";
import NavbarMenu from "./NavbarMenu";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 56px;
  min-height: 56px;
  max-height: 56px;
  padding: 0 8px;
  box-shadow: 0 0 10px 4px #0000002b;
  z-index: 500;
`;

const MenuButton = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 150ms;
  &:hover {
    background-color: #ffffff1d;
  }
`;

const AppName = styled.h1`
  font-size: 1.4em;
  font-weight: 600;
  margin: 0;
  margin-left: 10px;
`;
const Button = styled.button`
  margin-top: 30px;
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/logout");
      dispatch(logout());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <MenuButton>
        <Menu />
      </MenuButton>

      <AppName>Movie Logger</AppName>

      <Button onClick={handleLogout}>Logout</Button>
      <NavbarMenu />
    </Container>
  );
};

export default Navbar;
