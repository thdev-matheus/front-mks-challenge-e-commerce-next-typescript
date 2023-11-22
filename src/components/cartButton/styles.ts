"use client";

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;

  position: relative;

  cursor: pointer;

  & > svg {
    width: 4rem;
    height: 4rem;

    color: ${(props) => props.theme.white};
  }
`;

export const BoxQuant = styled(motion.span)`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -1rem;
  right: -1rem;

  border-radius: 50%;

  font-size: 1rem;
  font-weight: bold;

  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
`;
