"use client";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import SwapIcon from "@/icons/SwapIcon";
import * as S from "./styles";

type SwapButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const SwapButton = ({ ...props }: SwapButtonType) => {
  return (
    <S.ButtonContainer {...props}>
      <SwapIcon />
    </S.ButtonContainer>
  );
};

export default SwapButton;
