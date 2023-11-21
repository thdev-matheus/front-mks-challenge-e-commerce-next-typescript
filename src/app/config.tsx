"use client";

import { ReactNode } from "react";
import { Providers } from "@/contexts";
import { Styles } from "@/styles";

export const Config = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <Styles>{children}</Styles>
    </Providers>
  );
};
