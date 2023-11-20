"use client";

import styled from "styled-components";

export const Container = styled.main`
  @media (min-width: 1200px) {
    width: 100vw;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    overflow: hidden auto;

    padding: 3rem 10vw;
  }
`;
