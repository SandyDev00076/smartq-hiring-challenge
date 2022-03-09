import styled from "@emotion/styled";
import React, { InputHTMLAttributes } from "react";

interface IContainerProps {
  full: boolean;
}

const Container = styled.input<IContainerProps>`
  padding: 16px;
  font-weight: bold;
  box-shadow: 3.6px 4.4px 10px rgba(0, 0, 0, 0.06),
    29px 35px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  width: ${(props) => (props.full ? "100%" : "unset")};
`;

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  full?: boolean;
}

const Input = ({ full = false, ...props }: IInputProps) => {
  return <Container full={full} {...props} />;
};

export default Input;
