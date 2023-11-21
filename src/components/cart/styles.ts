"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9000;
`;

export const deadArea = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9001;
`;

export const CartBox = styled.section`
  @media (min-width: 1200px) {
    width: 48.5rem;
    height: 100%;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 9002;

    background-color: ${(props) => props.theme.primary};
  }
`;
