import React, { useState } from "react";
import styled from "styled-components";
import { Close } from "@mui/icons-material";
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
  background-color: ${({ theme }) => theme.bgOpaqueDarker};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 78%;
  margin-top: -3%;
  width: 56%;
  overflow: clip;
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
  background-color: ${({ theme }) => theme.bg};
  padding-bottom: 4px;
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
  height: 28px;
  align-items: center;
  justify-content: center;

  > label {
    display: flex;
    flex: 1;
    min-width: 140px;
    justify-content: end;
    padding-right: 8px;
    color: ${({ theme }) => theme.textSoft};
    cursor: default;
  }

  > span {
    width: 20px;
    height: 20px;
    display: flex;
    margin: 5px;
    margin-bottom: 1px;
    color: ${({ theme }) => theme.textSofter};
    &:hover {
      color: ${({ theme }) => theme.textSoft};
    }
    > svg {
      cursor: pointer;
    }
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

const ChangePassword = ({ toggled, onClose }) => {
  const [canClear, setCanClear] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });

  const clearInput = (name) => {
    const el = document.getElementsByName(name)[0];
    el.value = "";
    changeHandler(name);
  };

  const changeHandler = (name) => {
    const { value } = document.getElementsByName(name)[0];
    if (value === "") {
      setCanClear((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    } else {
      setCanClear((prevState) => ({
        ...prevState,
        [name]: true,
      }));
    }
  };

  return (
    toggled && (
      <Container>
        <Wrapper>
          <Header>
            <Title>Change your password</Title>
            <span title="Close window" onClick={() => onClose()}>
              <Close fontSize="small" />
            </span>
          </Header>
          <Form>
            <FormRow>
              <label>Password:</label>
              <Input
                name="password"
                type="password"
                onChange={() => changeHandler("password")}
              />
              <span>
                {canClear.password && (
                  <Close
                    fontSize="small"
                    onClick={() => clearInput("password")}
                  />
                )}
              </span>
            </FormRow>
            <hr />
            <FormRow>
              <label>New password:</label>
              <Input
                name="newPassword"
                type="password"
                onChange={() => changeHandler("newPassword")}
              />
              <span>
                {canClear.newPassword && (
                  <Close
                    fontSize="small"
                    onClick={() => clearInput("newPassword")}
                  />
                )}
              </span>
            </FormRow>
            <FormRow>
              <label>Confirm:</label>
              <Input
                name="confirmPassword"
                type="password"
                onChange={() => changeHandler("confirmPassword")}
              />
              <span>
                {canClear.confirmPassword && (
                  <Close
                    fontSize="small"
                    onClick={() => clearInput("confirmPassword")}
                  />
                )}
              </span>
            </FormRow>
          </Form>
          <SaveButton>Update password</SaveButton>
        </Wrapper>
      </Container>
    )
  );
};

export default ChangePassword;
