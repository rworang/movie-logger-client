import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  display: flex;
  width: auto;
  height: 80%;
  padding: 0 8px;
  font-size: 1em;
  line-height: 1em;
  background-color: ${({ theme }) => theme.bgOpaque};
  outline: none;
  border: none;
  flex-grow: 4;
  margin-top: 2px;
  margin-bottom: -2px;
  font-style: italic;
  &:focus,
  :active {
    background-color: ${({ theme }) => theme.bgOpaqueHover};
  }
`;

const Input = ({ name, type, placeholder, onChange }) => {
  return (
    <InputField
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
