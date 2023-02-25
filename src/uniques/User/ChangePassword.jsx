import { Close } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  left: -12px;
  padding: 12px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgOpaqueDark};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 78%;
  margin-top: -3%;
  width: 56%;
  background-color: ${({ theme }) => theme.bgLight};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: default;
  color: ${({ theme }) => theme.textSoft};
  > span {
    position: absolute;
    padding: 4px;
    top: 4px;
    right: 6px;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.textSofter};
    }
  }
`;

const Title = styled.h3`
  margin: 3px auto;
  font-size: 1.1em;
  letter-spacing: 0.5px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: 1.02em;
  > hr {
    border: none;
    margin: 6px auto;
  }
`;
const FormRow = styled.div`
  display: flex;
  height: 32px;

  > label {
    display: flex;
    flex: 1;
    min-width: 140px;
    justify-content: end;
    padding-right: 8px;
    color: ${({ theme }) => theme.textSoft};
    cursor: default;
  }
`;

const SaveButton = styled.button`
  display: flex;
  padding: 8px 12px;
  margin: 0 auto;
  margin-bottom: 12px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bgOpaque};
  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bgOpaqueHover};
  }
`;

const ChangePassword = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Change your password</Title>
          <span title="Close window">
            <Close fontSize="small" />
          </span>
        </Header>
        <Form>
          <FormRow>
            <label>Old password:</label>
            <Input name="oldPassword" type="password" />
          </FormRow>
          <hr />
          <FormRow>
            <label>New password:</label>
            <Input name="newPassword" type="password" />
          </FormRow>
          <FormRow>
            <label>Confirm password:</label>
            <Input name="confirmNewPassword" type="password" />
          </FormRow>
        </Form>
        <SaveButton>Save password</SaveButton>
      </Wrapper>
    </Container>
  );
};

export default ChangePassword;
