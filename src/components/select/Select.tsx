"use client";
import React, { useMemo, useState } from "react";
import * as S from "./styles";
import { Currency } from "@/api/types";
import DefaultInput from "@/components/inputs/defaultInput/DefaultInput";
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";

type SelectProps = {
  currencies: Currency[];
  onClick: (e: Currency) => void;
};
const Select = ({ currencies, onClick }: SelectProps) => {
  const [searchText, setSearchText] = useState("");

  const debouncedSearchValue = useDebounce(searchText, 500);
  const filteredOptions = useMemo(
    () =>
      currencies.filter((option) =>
        option.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      ),
    [debouncedSearchValue, currencies],
  );

  return (
    <S.SelectContainer>
      <DefaultInput
        placeholder={"Search"}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {filteredOptions.length > 0 ? (
        filteredOptions.map((e) => (
          <S.ItemContainer key={e.name} onClick={() => onClick(e)}>
            <Image src={e.image} alt={e.ticker} width={20} height={20} />
            <S.ShortName>{e.ticker}</S.ShortName>
            <S.LongName>{e.name}</S.LongName>
          </S.ItemContainer>
        ))
      ) : (
        <S.NothingContainer>😞 Nothing</S.NothingContainer>
      )}
    </S.SelectContainer>
  );
};

export default Select;
