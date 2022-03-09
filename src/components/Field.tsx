import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../Colors";

interface ILabelProps {
  rightAlign: boolean;
}

const Label = styled.div<ILabelProps>`
  color: ${Colors.primary};
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 5px;
  text-align: ${(props) => (props.rightAlign ? "right" : "left")};
`;

interface IFieldProps {
  label: string;
  children: React.ReactNode;
  alignLabelToRight?: boolean;
}

const Field = ({ label, children, alignLabelToRight = false }: IFieldProps) => {
  return (
    <label>
      <Label rightAlign={alignLabelToRight}>{label}</Label>
      {children}
    </label>
  );
};

export default Field;
