"use client";

import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 1200px) {
    width: 21rem;
    height: 29rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 1rem;

    overflow: hidden;

    box-shadow: 0 0 0.5rem 0 ${(props) => props.theme.black}75;

    transition: 0.7s;

    &:hover {
      box-shadow: 0 0 0.7rem 0 ${(props) => props.theme.black};
    }
  }
`;

export const BoxImg = styled.div`
  @media (min-width: 1200px) {
    width: 100%;

    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    & > img {
      width: 80%;

      transition: 1.2s;

      &:hover {
        transform: scale(1.05) rotate(10deg);
      }
    }
  }
`;

export const BoxContent = styled.div`
  @media (min-width: 1200px) {
    width: 100%;

    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 1rem;

    cursor: default;

    & > .content_top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > h3 {
        font-size: 1.6rem;
        font-weight: 400;
      }

      & > span {
        min-width: 7.2rem;
        height: 2.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 0.7rem;

        font-size: 1.2rem;
        font-weight: 700;

        background-color: ${(props) => props.theme.bgSecondary};
        color: ${(props) => props.theme.textSecondary};
      }
    }

    & > h4 {
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;

      font-size: 1rem;
      font-weight: 300;
    }
  }
`;

export const BoxButton = styled.div`
  @media (min-width: 1200px) {
    width: 100%;

    flex: 1;

    overflow: hidden;

    & > button {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      font-size: 1.4rem;
      font-weight: 600;

      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.textSecondary};

      cursor: pointer;
      transition: 1.2s;

      & > svg {
        width: 2rem;
        height: 3rem;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
