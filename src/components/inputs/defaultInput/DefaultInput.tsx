import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { Input } from "@/components/inputs/defaultInput/styles";

type DefaultInputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
const DefaultInput = ({ ...props }: DefaultInputType) => {
  return <Input {...props} />;
};

export default DefaultInput;