"use client";
import React, { useRef, useState } from "react";
import DefaultInput from "@/components/inputs/defaultInput/DefaultInput";
import * as S from "@/components/MainPage/styles";
import Image from "next/image";
import Select from "@/components/select/Select";
import { Currency } from "@/api/types";
import { useAppSelector } from "@/store/store";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type InputWithSelectType = {
  currency: Currency;
  onClick: (e: Currency) => void;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const InputWithSelect = ({
  currency,
  onClick,
  value,
  onChange,
  disabled,
}: InputWithSelectType) => {
  const { currencies } = useAppSelector((state) => state.currencies);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleClickSelectItem = (e: Currency) => {
    onClick(e);
    setIsOpen(false);
  };
  const handleOutsideClick = () => {
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 0);
  };

  useOutsideClick(selectRef, handleOutsideClick);

  return (
    <S.InputContainer>
      <DefaultInput
        type={"text"}
        value={value}
        onChange={onChange ? (e) => onChange(e) :  undefined}
        disabled={disabled}
      />
      <S.Separator />
      <S.SelectedCurrency onClick={() => setIsOpen(true)}>
        <Image
          src={currency?.image}
          alt={currency?.ticker}
          width={20}
          height={20}
        />

        <div>{currency?.ticker?.toUpperCase()}</div>
      </S.SelectedCurrency>
      {isOpen && (
        <div ref={selectRef}>
          <Select currencies={currencies} onClick={handleClickSelectItem} />
        </div>
      )}
    </S.InputContainer>
  );
};

export default InputWithSelect;
