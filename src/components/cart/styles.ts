"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

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

export const CartBox = styled(motion.section)`
  @media (min-width: 1200px) {
    width: 48.5rem;
    height: 100%;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 9002;

    background-color: ${(props) => props.theme.primary};
  }
`;

export const CartHeader = styled.section`
  @media (min-width: 1200px) {
    width: 100%;

    flex: 1;
    display: flex;
    justify-content: space-between;

    padding: 5%;

    color: ${(props) => props.theme.white};

    & > h3 {
      width: 18rem;

      font-size: 2.7rem;
      font-weight: 700;
    }

    & > svg {
      width: 3.8rem;
      height: 3.8rem;

      color: ${(props) => props.theme.black};

      cursor: pointer;
    }
  }
`;

export const CartMain = styled.section`
  @media (min-width: 1200px) {
    width: 100%;

    flex: 6;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    overflow: hidden auto;

    padding: 5%;
    margin-bottom: 1rem;

    & > h3 {
      font-size: 2rem;
      font-weight: 700;

      color: ${(props) => props.theme.white};
    }
  }
`;

export const CartFooter = styled.section`
  @media (min-width: 1200px) {
    width: 100%;

    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .reset_cart {
      width: 60%;

      padding: 0.5rem 0;

      border-radius: 1rem;

      font-size: 2rem;
      font-weight: 700;

      background-color: red;
      color: ${(props) => props.theme.white};

      cursor: pointer;
    }

    & > .purchase {
      width: 100%;

      position: relative;

      padding: 1.5rem 0;

      overflow: hidden;

      font-size: 2.8rem;
      font-weight: 700;

      background: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};

      cursor: pointer;

      &::before {
        content: "";

        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: -100%;

        background: ${(props) => props.theme.white}15;

        transition: left 1.2s;
      }

      &:hover::before {
        content: "";

        left: 0;
      }
    }
  }
`;

export const BoxTotal = styled.div`
  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5%;

    & > h4 {
      font-size: 2.8rem;
      font-weight: 700;

      color: ${(props) => props.theme.white};
    }
  }
`;
