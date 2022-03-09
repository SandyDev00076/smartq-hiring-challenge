import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";

const Container = styled.input`
  padding: 16px;
  font-weight: bold;
  box-shadow: 3.6px 4.4px 10px rgba(0, 0, 0, 0.06),
    29px 35px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInputProps) => {
  return <Container {...props} />;
};

export default Input;
