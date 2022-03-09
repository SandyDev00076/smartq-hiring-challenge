import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../Colors";

const Label = styled.div`
  color: ${Colors.primary};
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;

interface IFieldProps {
  label: string;
  children: React.ReactNode;
}

const Field = ({ label, children }: IFieldProps) => {
  return (
    <label>
      <Label>{label}</Label>
      {children}
    </label>
  );
};

export default Field;
