"use client";

import * as S from "./styles";
import { useProducts } from "@/contexts";
import { Skeleton } from "@mui/material";
import { v4 as uuid } from "uuid";

export const Main = () => {
  const { isLoading, products } = useProducts();

  return (
    <S.Container>
      {isLoading &&
        Array.from({ length: 8 }, () => 1).map((_) => (
          <Skeleton
            key={uuid()}
            variant="rounded"
            height="29rem"
            width="21rem"
          />
        ))}
    </S.Container>
  );
};
