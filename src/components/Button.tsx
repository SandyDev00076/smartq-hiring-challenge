import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes } from "react";
import { Colors } from "../Colors";

interface IContainerProps {
  small: boolean;
}

const Container = styled.button<IContainerProps>`
  border-radius: 10px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding: ${(props) => (props.small ? "8px 16px" : "16px")};

  &:hover {
    background-color: ${Colors.primaryLight};
  }

  &:disabled {
    background-color: ${Colors.disabled};
  }
`;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  small?: boolean;
}

const Button = ({ small = false, children, ...props }: IButtonProps) => {
  return (
    <Container small={small} {...props}>
      {children}
    </Container>
  );
};

export default Button;
