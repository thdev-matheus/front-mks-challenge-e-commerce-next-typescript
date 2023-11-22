"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 8rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.black}55;
  border-radius: 0.5rem;

  & > button {
    height: 100%;

    font-size: 2rem;
    font-weight: 400;

    background-color: transparent;

    cursor: pointer;
  }

  & > .button_sub {
    flex: 1;

    transition: 1.2s;

    &:hover {
      background-color: #ff3030;
    }
  }

  & > h4 {
    flex: 1;

    font-size: 1.2rem;
    font-weight: 700;

    border-right: 1px solid ${(props) => props.theme.black}55;
    border-left: 1px solid ${(props) => props.theme.black}55;

    text-align: center;
  }

  & > .button_add {
    flex: 1;

    transition: 1.2s;

    &:hover {
      background-color: #30ff30;
    }
  }
`;
