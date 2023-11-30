"use client";
import React, { useEffect, useState } from "react";
import DefaultButton from "@/components/buttons/defaultButton/DefaultButton";
import * as S from "./styles";
import DefaultInput from "@/components/inputs/defaultInput/DefaultInput";
import { Currency } from "@/api/types";
import SwapButton from "@/components/buttons/swapButton/SwapButton";
import { validate } from "@/helpers/validate";
import { useDebounce } from "@/hooks/useDebounce";
import { useDispatch } from "react-redux";
import {
  fetchCurrencies,
  fetchEstimatedExchangeAmount,
  fetchMinimalExchangeAmount,
} from "@/store/actions/currenciesActions";
import { AppDispatch, useAppSelector } from "@/store/store";
import {
  setEstimatedExchangeAmount,
  setSecondCurrency as setSecond,
  setSecondCurrency as setFirst,
  swapCurrencies,
} from "@/store/slices/currenciesSlice";
import InputWithSelect from "@/components/inputs/inputWithSelect/InputWithSelect";
import { InputContainer } from "@/components/inputs/commonStyles";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);
  const {
    currencies,
    isLoading,
    firstCurrency,
    secondCurrency,
    estimatedExchangeAmount,
    minimalExchangeAmount,
  } = useAppSelector((state) => state.currencies);
  const [firstCurrencyValue, setFirstCurrencyValue] = useState("0.1");
  const debounceValue = useDebounce(firstCurrencyValue, 300);
  useEffect(() => {
    if (firstCurrency && secondCurrency) {
      dispatch(
        fetchMinimalExchangeAmount({
          from: firstCurrency.ticker,
          to: secondCurrency.ticker,
        }),
      );
      if (minimalExchangeAmount > +debounceValue) {
        dispatch(setEstimatedExchangeAmount("..."));
      } else {
        dispatch(
          fetchEstimatedExchangeAmount({
            amount: debounceValue,
            from: firstCurrency.ticker,
            to: secondCurrency.ticker,
          }),
        );
      }
    }
  }, [
    debounceValue,
    dispatch,
    firstCurrency,
    minimalExchangeAmount,
    secondCurrency,
  ]);
  const handleClickFirstSelect = async (currency: Currency) => {
    dispatch(setFirst(currency));
  };
  const handleClickSecondSelect = async (currency: Currency) => {
    dispatch(setSecond(currency));
  };

  const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstCurrencyValue(validate(value));
  };
  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.PageTitle>Crypto Exchange</S.PageTitle>
        <S.PageSubTitle>Exchange fast and easy</S.PageSubTitle>
      </S.TitleContainer>
      {!isLoading && currencies && firstCurrency && secondCurrency ? (
        <S.InputsContainer>
          <InputWithSelect
            currency={firstCurrency}
            onClick={handleClickFirstSelect}
            value={firstCurrencyValue}
            onChange={handleChangeInput}
          />
          <SwapButton onClick={() => dispatch(swapCurrencies())} />
          <InputWithSelect
            currency={secondCurrency}
            onClick={handleClickSecondSelect}
            value={estimatedExchangeAmount}
            disabled={true}
          />
        </S.InputsContainer>
      ) : (
        <div>Loading...</div>
      )}

      <S.WalletContainer>
        <S.WalletTitle>Your Ethereum address</S.WalletTitle>
        <S.ActionsContainer>
          <InputContainer>
            <DefaultInput />
          </InputContainer>
          <DefaultButton>Exchange</DefaultButton>
        </S.ActionsContainer>
      </S.WalletContainer>
    </S.MainContainer>
  );
};

export default MainPage;
