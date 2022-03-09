import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes } from "react";
import { Colors } from "../Colors";

interface IContainerProps {
  small: boolean;
  full: boolean;
}

const Container = styled.button<IContainerProps>`
  border-radius: 10px;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  font-weight: bold;
  padding: ${(props) => (props.small ? "8px 16px" : "10px 16px")};
  width: ${(props) => (props.full ? "100%" : "unset")};

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
  full?: boolean;
}

const Button = ({
  full = false,
  small = false,
  children,
  ...props
}: IButtonProps) => {
  return (
    <Container small={small} full={full} {...props}>
      {children}
    </Container>
  );
};

export default Button;
