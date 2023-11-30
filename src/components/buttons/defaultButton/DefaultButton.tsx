import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as S from "./styles";

type DefaultButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const DefaultButton = ({ ...props }: DefaultButtonType) => {
  return <S.ButtonContainer {...props} />;
};

export default DefaultButton;