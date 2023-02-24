import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  padding: 2px 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  margin-right: 10px;
`;

const Username = styled.span`
  display: flex;
  font-weight: 600;
  font-size: 1em;
`;

const LoginButton = styled.div`
  display: flex;
  padding: 5px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 150ms;
  &:hover {
    background-color: #ffffff1d;
  }
`;
const NavbarMenu = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <Container>
      {currentUser != null ? (
        <Wrapper onClick={() => navigate("/user")}>
          <Avatar src={currentUser.avatar} />
          <Username>{currentUser.name}</Username>
        </Wrapper>
      ) : (
        <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
      )}
    </Container>
  );
};

export default NavbarMenu;
