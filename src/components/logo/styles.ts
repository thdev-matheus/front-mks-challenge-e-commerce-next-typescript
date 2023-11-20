"use client";

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: first baseline;
  gap: 0.7rem;

  & > h2 {
    font-size: 4rem;
    font-weight: 600;

    color: ${(props) => props.theme.white};
  }

  & > h3 {
    font-size: 2rem;
    font-weight: lighter;

    color: ${(props) => props.theme.white};
  }
`;
