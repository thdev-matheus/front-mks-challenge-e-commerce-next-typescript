"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  @media (min-width: 1200px) {
    width: 100%;
    min-height: 10rem;
    max-height: 10rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    border-radius: 1rem;

    background-color: ${(props) => props.theme.white};

    & > svg {
      width: 3rem;
      height: 3rem;

      position: absolute;

      top: -0.8rem;
      right: -0.8rem;

      color: ${(props) => props.theme.black};
    }
  }
`;

export const BoxImage = styled.div`
  @media (min-width: 1200px) {
    height: 100%;

    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1rem 0 0 1rem;

    overflow: hidden;

    & > img {
      height: 80%;
    }
  }
`;

export const BoxInfo = styled.div`
  @media (min-width: 1200px) {
    height: 100%;

    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    & > h4 {
      width: 100%;

      padding: 1rem;

      font-size: 1.3rem;
      font-weight: 400;
    }
  }
`;

export const BoxQuant = styled.div`
  @media (min-width: 1200px) {
    height: 100%;

    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid yellow;
  }
`;

export const BoxValue = styled.div`
  @media (min-width: 1200px) {
    height: 100%;

    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0 1rem 1rem 0;

    overflow: hidden;

    & > h4 {
      font-size: 1.4rem;
      font-weight: 700;

      color: ${(props) => props.theme.black};
    }
  }
`;
