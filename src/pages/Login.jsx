import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";

import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.6em;
  font-weight: 600;
  letter-spacing: 0.025em;
`;

const Input = styled.input`
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.bgLighter};
  padding: 0.6em 1em;
  font-size: 1em;
  margin-bottom: 0.8em;
  border-radius: 7px;
`;
const Button = styled.button`
  padding: 0.6em 1em;
  font-size: 1em;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  border-radius: 5px;
  border: none;
`;

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:1784/api/auth/login", {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return !currentUser ? (
    <Container>
      <Input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
