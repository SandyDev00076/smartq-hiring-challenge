import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../Colors";
import Field from "./Field";
import Input from "./Input";

const Container = styled.section`
  flex: 1;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  color: ${Colors.primary};
  margin-bottom: 24px;
`;

const SectionContent = styled.h1`
  box-shadow: 12.5px 3.9px 10px rgba(0, 0, 0, 0.015),
    100px 31px 80px rgba(0, 0, 0, 0.03);
  background-color: ${Colors.white};
  margin-bottom: 32px;
  padding: 32px;
  display: grid;
  gap: 32px;
  border-radius: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

const EventDetail = () => {
  return (
    <Container>
      <Header>Event Detail</Header>
      <SectionContent>
        <Field label="Name">
          <Input full />
        </Field>
        <Field label="Contact Number">
          <Input full type="tel" />
        </Field>
        <Field label="Event Name">
          <Input full />
        </Field>
        <Field label="Event Location">
          <Input full />
        </Field>
        <Field label="Event Date">
          <Input full type="date" />
        </Field>
        <Field label="Delivery Mode">
          <Input full />
        </Field>
      </SectionContent>
    </Container>
  );
};

export default EventDetail;
