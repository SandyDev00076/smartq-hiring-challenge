import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../Colors";

interface IContainerProps {
  url: string;
}

const Container = styled.div<IContainerProps>`
  position: relative;
  height: 160px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 24px;
  background-image: ${(props) => `url(${props.url})`};
  background-size: cover;
`;

const Shade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent);
  z-index: 1;
`;

const Name = styled.h1`
  position: absolute;
  left: 32px;
  top: 32px;
  color: ${Colors.white};
  font-size: 2rem;
  z-index: 2;
`;

interface IBannerProps {
  name: string;
  image: string;
}

const Banner = ({ name, image }: IBannerProps) => {
  return (
    <Container url={image}>
      <Shade />
      <Name>{name}</Name>
    </Container>
  );
};

export default Banner;
