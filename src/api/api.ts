import { makeRequest } from "@/helpers/makeRequest";
import {Currency, EstimatedExchangeAmount, MinimalExchangeAmount} from "@/api/types";

const apiKey =
  "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd";

export const getCurrencies = async () => {
  return makeRequest<Currency[], undefined>({
    url: "currencies",
  });
};

export const getMinimalExchangeAmount = async (from: string, to: string) => {
  return makeRequest<MinimalExchangeAmount, undefined>({
    url: `min-amount?fromCurrency=${from}&toCurrency=${to}`,
  });
};

export const getEstimatedExchangeAmount = async (
  amount: string,
  from: string,
  to: string,
) => {
  return makeRequest<EstimatedExchangeAmount, undefined>({
    url: `estimated-amount?fromCurrency=${from}&toCurrency=${to}&fromAmount=${amount}`,
    options: {
      headers: {
        "x-changenow-api-key": apiKey,
      },
    },
  });
};
