"use client";

import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 1200px) {
    width: 100vw;
    height: 10rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 5vw;

    background-color: ${(props) => props.theme.primary};
  }
`;
